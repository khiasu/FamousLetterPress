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

    // Mark Order status as PAID in CMS Store and send email notification
    if (orderNumber) {
      import("@/lib/cms/store").then(({ updateCMSOrderStatus, readCMSStore }) => {
        updateCMSOrderStatus(orderNumber, {
          paymentStatus: "PAID",
          paymentId: razorpayPaymentId || undefined,
        });

        // Find order details for email dispatch
        const store = readCMSStore();
        const ord = store.orders.find((o: any) => o.orderNumber === orderNumber);
        if (ord) {
          import("@/lib/email").then(({ sendStudioEmail }) => {
            sendStudioEmail({
              replyTo: ord.customerEmail,
              subject: `Sample Kit Order PAID: ${ord.customerName} [${orderNumber}]`,
              html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E5E5; color: #111;">
                  <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 8px; color: #000;">Sample Kit Order Confirmed & Paid</h2>
                  <p style="font-size: 13px; color: #666; margin-top: 0;">Order: <strong>${orderNumber}</strong> · Razorpay ID: <strong>${razorpayPaymentId || "N/A"}</strong></p>
                  <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
                  <table style="width: 100%; font-size: 14px; line-height: 1.6; border-collapse: collapse;">
                    <tr><td style="padding: 6px 0; color: #777; width: 140px;">Customer Name:</td><td><strong>${ord.customerName}</strong></td></tr>
                    <tr><td style="padding: 6px 0; color: #777;">Email:</td><td><a href="mailto:${ord.customerEmail}" style="color: #000;">${ord.customerEmail}</a></td></tr>
                    <tr><td style="padding: 6px 0; color: #777;">Phone:</td><td><a href="tel:${ord.customerPhone}" style="color: #000;">${ord.customerPhone}</a></td></tr>
                    <tr><td style="padding: 6px 0; color: #777;">Product:</td><td><strong>${ord.kitName}</strong></td></tr>
                    <tr><td style="padding: 6px 0; color: #777;">Amount:</td><td><strong>₹${ord.amount} (PAID)</strong></td></tr>
                    <tr><td style="padding: 6px 0; color: #777;">Shipping Address:</td><td>${ord.shippingAddress}</td></tr>
                  </table>
                </div>
              `,
            });
          }).catch((err) => console.error("Order email error:", err));
        }
      }).catch((err) => console.error("CMS update order error:", err));
    }

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
