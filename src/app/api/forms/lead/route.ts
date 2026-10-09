import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      city,
      serviceNeeded,
      quantity,
      timeline,
      budget,
      message,
      preferredContact,
      hpField, // Anti-spam
    } = body;

    if (hpField) {
      // Honeypot triggered
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and a message about your project." },
        { status: 400 }
      );
    }

    const leadRef = `PRJ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const eventOrService = [
      serviceNeeded || "Bespoke Letterpress",
      quantity ? `${quantity} qty` : null,
      city ? `City: ${city}` : null,
      budget ? `Budget: ${budget}` : null,
      timeline ? `Timeline: ${timeline}` : null,
    ]
      .filter(Boolean)
      .join(" · ");

    // Persist lead in CMS Store
    import("@/lib/cms/store").then(({ addCMSLead }) => {
      addCMSLead({
        id: String(Date.now()),
        ref: leadRef,
        type: "General Project",
        name,
        email,
        phone: phone || "Not specified",
        eventOrService,
        status: "NEW",
        notes: `[Contact via ${preferredContact || "WhatsApp"}]\n${message || "No additional message"}`,
        date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      });
    }).catch((err) => console.error("CMS lead logging error:", err));

    // Automated Gmail dispatch to studio (matching WordPress CF7 behavior)
    import("@/lib/email").then(({ sendStudioEmail }) => {
      sendStudioEmail({
        replyTo: email,
        subject: `New Price Request / Commission from ${name} [${leadRef}]`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E5E5; color: #111;">
            <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 8px; color: #000;">New Project Inquiry — Famous Letterpress</h2>
            <p style="font-size: 13px; color: #666; margin-top: 0;">Reference: <strong>${leadRef}</strong></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
            <table style="width: 100%; font-size: 14px; line-height: 1.6; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #777; width: 140px;">Client Name:</td><td><strong>${name}</strong></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Email:</td><td><a href="mailto:${email}" style="color: #000;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Phone:</td><td><a href="tel:${phone}" style="color: #000;">${phone || "N/A"}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Preferred Contact:</td><td><strong>${preferredContact || "WhatsApp"}</strong></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Service & Specs:</td><td>${eventOrService}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 14px; background: #fafafa; border: 1px solid #eee;">
              <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #555;">Project Message:</strong>
              <p style="margin: 8px 0 0; font-size: 14px; white-space: pre-wrap; color: #222;">${message}</p>
            </div>
            ${phone ? `
              <div style="margin-top: 20px;">
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="display: inline-block; padding: 10px 18px; background: #111; color: #fff; text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;">
                  Reply via WhatsApp
                </a>
              </div>
            ` : ""}
          </div>
        `,
      });
    }).catch((err) => console.error("Email send trigger error:", err));

    return NextResponse.json({
      success: true,
      leadRef,
      message: "Your project details have been received. We will be in touch shortly.",
    });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json({ error: "Failed to submit project details." }, { status: 500 });
  }
}
