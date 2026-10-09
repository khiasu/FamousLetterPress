import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      coupleNames,
      email,
      phone,
      weddingDate,
      weddingLocation,
      estimatedGuestCount,
      stationeryNeeds,
      designStatus,
      estimatedBudget,
      aestheticVision,
      preferredContact,
      hpField, // Honeypot spam trap
    } = body;

    // Spam check
    if (hpField) {
      // Silently discard spam bots
      return NextResponse.json({ success: true });
    }

    if (!coupleNames || !email || !phone || !weddingDate) {
      return NextResponse.json(
        { error: "Please provide couple names, email, phone, and wedding date." },
        { status: 400 }
      );
    }

    const leadRef = `EB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const eventOrService = [
      weddingDate ? `Wedding Date: ${weddingDate}` : null,
      weddingLocation ? `Location: ${weddingLocation}` : null,
      estimatedGuestCount ? `${estimatedGuestCount} Guests` : null,
      estimatedBudget ? `Budget: ${estimatedBudget}` : null,
    ]
      .filter(Boolean)
      .join(" · ");

    const notesSummary = [
      stationeryNeeds && stationeryNeeds.length > 0 ? `Stationery: ${stationeryNeeds.join(", ")}` : null,
      designStatus ? `Design Status: ${designStatus}` : null,
      aestheticVision ? `Vision: ${aestheticVision}` : null,
      preferredContact ? `Preferred Contact: ${preferredContact}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    // Persist consultation in CMS Store
    import("@/lib/cms/store").then(({ addCMSLead }) => {
      addCMSLead({
        id: String(Date.now()),
        ref: leadRef,
        type: "Early Bride",
        name: coupleNames,
        email,
        phone,
        eventOrService,
        status: "NEW",
        notes: notesSummary,
        date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      });
    }).catch((err) => console.error("CMS Early Bride lead logging error:", err));

    // Automated Gmail dispatch to studio
    import("@/lib/email").then(({ sendStudioEmail }) => {
      sendStudioEmail({
        replyTo: email,
        subject: `New Early Bride Consultation: ${coupleNames} [${leadRef}]`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E5E5; color: #111;">
            <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 8px; color: #000;">New Early Bride Consultation — Famous Letterpress</h2>
            <p style="font-size: 13px; color: #666; margin-top: 0;">Reference: <strong>${leadRef}</strong></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />
            <table style="width: 100%; font-size: 14px; line-height: 1.6; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #777; width: 140px;">Couple Names:</td><td><strong>${coupleNames}</strong></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Email:</td><td><a href="mailto:${email}" style="color: #000;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Phone:</td><td><a href="tel:${phone}" style="color: #000;">${phone}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Wedding Date:</td><td><strong>${weddingDate}</strong></td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Location:</td><td>${weddingLocation || "Not specified"}</td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Guest Count:</td><td>${estimatedGuestCount || "Not specified"}</td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Budget Range:</td><td>${estimatedBudget || "Not specified"}</td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Design Status:</td><td>${designStatus || "Not specified"}</td></tr>
              <tr><td style="padding: 6px 0; color: #777;">Preferred Contact:</td><td><strong>${preferredContact || "WhatsApp"}</strong></td></tr>
            </table>
            ${stationeryNeeds && stationeryNeeds.length > 0 ? `
              <div style="margin-top: 14px; padding: 12px; background: #fafafa; border: 1px solid #eee;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #555;">Stationery Needs:</strong>
                <ul style="margin: 6px 0 0 16px; padding: 0; font-size: 13px; color: #333;">
                  ${stationeryNeeds.map((s: string) => `<li>${s}</li>`).join("")}
                </ul>
              </div>
            ` : ""}
            ${aestheticVision ? `
              <div style="margin-top: 14px; padding: 12px; background: #fafafa; border: 1px solid #eee;">
                <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #555;">Aesthetic Vision:</strong>
                <p style="margin: 6px 0 0; font-size: 13px; color: #333; white-space: pre-wrap;">${aestheticVision}</p>
              </div>
            ` : ""}
            <div style="margin-top: 20px;">
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="display: inline-block; padding: 10px 18px; background: #111; color: #fff; text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;">
                Reply via WhatsApp
              </a>
            </div>
          </div>
        `,
      });
    }).catch((err) => console.error("Email send trigger error:", err));

    return NextResponse.json({
      success: true,
      leadRef,
      message: "Consultation submitted successfully. Our studio will review and contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Early bride form error:", error);
    return NextResponse.json({ error: "Failed to submit consultation. Please try again." }, { status: 500 });
  }
}
