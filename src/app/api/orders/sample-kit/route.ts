import { NextResponse } from "next/server";
import { sampleKitsData } from "@/lib/data/sample-kits";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { kitSlug, customerName, customerEmail, customerPhone, addressLine1, addressLine2, city, state, postalCode } = body;

    // Validate kit exists
    const kit = sampleKitsData[kitSlug];
    if (!kit) {
      return NextResponse.json({ error: "Invalid sample kit selected" }, { status: 400 });
    }

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !addressLine1 || !city || !state || !postalCode) {
      return NextResponse.json({ error: "Please fill in all required shipping fields" }, { status: 400 });
    }

    const orderNumber = `FLP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const amount = kit.price; // in INR

    // If Razorpay keys are provided in environment
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    let razorpayOrderId = null;

    if (razorpayKeyId && razorpayKeySecret) {
      try {
        // Dynamic import / basic auth order call
        const auth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64");
        const rzpResponse = await fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${auth}`,
          },
          body: JSON.stringify({
            amount: amount * 100, // Razorpay takes amount in paise
            currency: "INR",
            receipt: orderNumber,
            notes: {
              kitName: kit.name,
              customerEmail,
              customerPhone,
            },
          }),
        });

        if (rzpResponse.ok) {
          const rzpData = await rzpResponse.json();
          razorpayOrderId = rzpData.id;
        }
      } catch (err) {
        console.error("Razorpay order creation fallback:", err);
      }
    }

    // Return order details for frontend checkout modal
    return NextResponse.json({
      success: true,
      orderNumber,
      kitName: kit.name,
      amount,
      currency: "INR",
      razorpayOrderId: razorpayOrderId || `mock_rzp_${Date.now()}`,
      razorpayKeyId: razorpayKeyId || "rzp_test_placeholder",
      customer: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
      },
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json({ error: "Failed to initialize order" }, { status: 500 });
  }
}
