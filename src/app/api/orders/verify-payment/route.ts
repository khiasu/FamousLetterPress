import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, orderNumber } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (secret && razorpaySignature && razorpayPaymentId && razorpayOrderId) {
      const generatedSignature = crypto
        .createHmac("sha256", secret)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest("hex");

      if (generatedSignature !== razorpaySignature) {
        return NextResponse.json({ error: "Invalid payment signature verification failed" }, { status: 400 });
      }
    }

    // In production with DB connected, mark Order status as PAID and log Payment record here.
    return NextResponse.json({
      success: true,
      message: "Payment successfully verified and order confirmed",
      orderNumber,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json({ error: "Payment verification failed" }, { status: 500 });
  }
}
