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

    if (razorpayKeyId && razorpayKeySecret && !razorpayKeyId.includes("placeholder")) {
      try {
        const auth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64");
        const rzpResponse = await fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${auth}`,
          },
          body: JSON.stringify({
            amount: amount * 100, // in paise
            currency: "INR",
            receipt: orderNumber,
            notes: {
              kitName: kit.name,
              customerEmail,
              customerPhone,
              shippingCity: city,
              shippingState: state,
            },
          }),
        });

        if (rzpResponse.ok) {
          const rzpData = await rzpResponse.json();
          razorpayOrderId = rzpData.id;
        } else {
          const errData = await rzpResponse.json();
          console.error("Razorpay order API error response:", errData);
        }
      } catch (err) {
        console.error("Razorpay order creation network fallback:", err);
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
      razorpayKeyId: razorpayKeyId || "",
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
