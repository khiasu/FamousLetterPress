import { NextResponse } from "next/server";
import { sendStudioEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      roleTitle,
      companyName,
      email,
      phone,
      cityCountry,
      websiteOrPortfolio,
      partnerCategory,
      estimatedAnnualVolume,
      artworkReadiness,
      servicesNeeded,
      requestSampleKit,
      message,
      preferredContact,
      hpField, // Anti-spam honeypot
    } = body;

    // Honeypot spam check - silently discard bots
    if (hpField) {
      return NextResponse.json({ success: true, leadRef: "PTR-SPAM-FILTERED" });
    }

    // Required fields validation
    if (!fullName || !email || !companyName || !message) {
      return NextResponse.json(
        { error: "Please provide your name, company name, email, and a brief message." },
        { status: 400 }
      );
    }

    const partnerRef = `PTR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const formattedServices = Array.isArray(servicesNeeded) && servicesNeeded.length > 0
      ? servicesNeeded.join(", ")
      : "Not specified";

    const cleanPhone = phone ? phone.replace(/[^0-9+]/g, "") : "";
    const waLink = cleanPhone ? `https://wa.me/${cleanPhone.replace(/[^0-9]/g, "")}` : null;

    // --- 1. Studio Notification Email (to FLP team) ---
    const studioHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 28px; border: 1px solid #E5E5E5; color: #111; background-color: #FFFFFF;">
        <div style="border-bottom: 2px solid #000; padding-bottom: 16px; margin-bottom: 20px;">
          <p style="text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; color: #7b7566; margin: 0 0 6px;">Trade Network Application</p>
          <h1 style="font-size: 22px; font-weight: 600; margin: 0; color: #000;">New Channel Partner Registration</h1>
          <p style="font-size: 12px; color: #888; margin: 4px 0 0;">Reference: <strong style="font-family: monospace; color: #000;">${partnerRef}</strong></p>
        </div>

        <table style="width: 100%; font-size: 13.5px; line-height: 1.6; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; width: 160px; font-weight: 500;">Applicant Name:</td>
            <td style="padding: 8px 0; color: #000;"><strong>${fullName}</strong> ${roleTitle ? `<span style="color: #666;">(${roleTitle})</span>` : ""}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Studio / Agency:</td>
            <td style="padding: 8px 0; color: #000;"><strong>${companyName}</strong></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Work Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #000; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0;">${phone ? `<a href="tel:${phone}" style="color: #000;">${phone}</a>` : "Not provided"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Location:</td>
            <td style="padding: 8px 0; color: #000;">${cityCountry || "Not specified"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Portfolio / Website:</td>
            <td style="padding: 8px 0;">${
              websiteOrPortfolio
                ? `<a href="${websiteOrPortfolio.startsWith("http") ? websiteOrPortfolio : `https://${websiteOrPortfolio}`}" target="_blank" style="color: #000; text-decoration: underline;">${websiteOrPortfolio}</a>`
                : "None supplied"
            }</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Discipline:</td>
            <td style="padding: 8px 0; color: #000;"><strong>${partnerCategory || "General Trade"}</strong></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Project Frequency:</td>
            <td style="padding: 8px 0; color: #000;">${estimatedAnnualVolume || "Not specified"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Pre-Press Status:</td>
            <td style="padding: 8px 0; color: #000;">${artworkReadiness || "Not specified"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Services of Interest:</td>
            <td style="padding: 8px 0; color: #000;">${formattedServices}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Sample Swatch Kit:</td>
            <td style="padding: 8px 0; color: #000;">${requestSampleKit ? "<strong>Requested for Studio Archive</strong>" : "Not requested"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #7b7566; font-weight: 500;">Preferred Contact:</td>
            <td style="padding: 8px 0; color: #000;"><strong>${preferredContact || "WhatsApp"}</strong></td>
          </tr>
        </table>

        <div style="margin-top: 16px; padding: 16px; background-color: #FBF9F6; border: 1px solid #EFEAE1;">
          <p style="margin: 0 0 6px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #7b7566; font-weight: 600;">Studio Message / Project Needs:</p>
          <p style="margin: 0; font-size: 13.5px; line-height: 1.6; white-space: pre-wrap; color: #111;">${message}</p>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; display: flex; gap: 12px;">
          ${
            waLink
              ? `<a href="${waLink}" style="display: inline-block; background: #000; color: #fff; text-decoration: none; padding: 10px 18px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500; margin-right: 10px;">Chat on WhatsApp</a>`
              : ""
          }
          <a href="mailto:${email}?subject=Regarding%20Famous%20Letterpress%20Trade%20Partnership%20[${partnerRef}]" style="display: inline-block; background: #eee; color: #000; text-decoration: none; padding: 10px 18px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 500;">Reply via Email</a>
        </div>
      </div>
    `;

    // --- 2. Applicant Automated Confirmation Email (to creative partner) ---
    const applicantHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 32px 24px; border: 1px solid #E5E5E5; color: #111; background-color: #FFFFFF;">
        <div style="text-align: center; border-bottom: 1px solid #E5E5E5; padding-bottom: 20px; margin-bottom: 24px;">
          <p style="text-transform: uppercase; letter-spacing: 0.24em; font-size: 10px; color: #7b7566; margin: 0 0 8px;">Letterpress · Foil Stamping · Archival Cotton</p>
          <h1 style="font-size: 24px; font-family: Georgia, serif; font-weight: 400; margin: 0; color: #000; letter-spacing: -0.02em;">Famous Letterpress</h1>
          <p style="font-size: 12px; color: #666; margin: 4px 0 0;">Workshop: Dimapur, Nagaland, India</p>
        </div>

        <p style="font-size: 15px; line-height: 1.6; color: #111; margin-bottom: 16px;">
          Dear ${fullName},
        </p>

        <p style="font-size: 14px; line-height: 1.7; color: #333; margin-bottom: 18px;">
          Thank you for applying to join our <strong>Trade Partner Network</strong> on behalf of <strong>${companyName}</strong>. We have logged your submission under partner reference <strong>${partnerRef}</strong>.
        </p>

        <p style="font-size: 14px; line-height: 1.7; color: #333; margin-bottom: 24px;">
          At Famous Letterpress, we serve as the dedicated, discreet printmaker for discerning wedding planners, graphic designers, calligraphers, and creative agencies worldwide. We treat your studio's work with the highest precision on our vintage cast-iron presses.
        </p>

        <div style="background-color: #FBF9F6; border: 1px solid #EFEAE1; padding: 20px; margin-bottom: 24px;">
          <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; color: #000; margin: 0 0 12px; font-weight: 600;">What Happens Next:</h2>
          <ol style="margin: 0; padding-left: 18px; font-size: 13.5px; line-height: 1.7; color: #444;">
            <li style="margin-bottom: 8px;"><strong>Portfolio & Trade Review:</strong> Our studio founder and pre-press lead will review your profile within 24 business hours.</li>
            <li style="margin-bottom: 8px;"><strong>Trade Rate Schedule:</strong> Once approved, we will provide our confidential trade pricing margin guide and relief plate parameters.</li>
            <li style="margin-bottom: 8px;"><strong>Pre-Press & Swatches:</strong> Direct vector file auditing, die templates, and dispatch of our tactile Trade Material Archive.</li>
            <li><strong>Discreet Fulfillment:</strong> White-label unbranded packaging shipped directly to you or your clients with full tracking.</li>
          </ol>
        </div>

        <div style="border: 1px solid #E5E5E5; padding: 16px; margin-bottom: 24px; font-size: 13px; line-height: 1.6;">
          <strong style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #7b7566; margin-bottom: 8px;">Summary of Your Submission:</strong>
          <div><strong>Studio:</strong> ${companyName}</div>
          <div><strong>Category:</strong> ${partnerCategory || "Trade Creative"}</div>
          <div><strong>Location:</strong> ${cityCountry || "N/A"}</div>
          <div><strong>Interests:</strong> ${formattedServices}</div>
        </div>

        <p style="font-size: 13.5px; line-height: 1.7; color: #333; margin-bottom: 24px;">
          If you have an imminent press run or vector brief ready for immediate quotation, you can connect directly with our studio artisans via WhatsApp at <a href="https://wa.me/918416099340" style="color: #000; font-weight: 600; text-decoration: underline;">+91 84160 99340</a> or by replying directly to this email.
        </p>

        <div style="border-top: 1px solid #E5E5E5; padding-top: 20px; font-size: 12px; color: #777; line-height: 1.6;">
          <p style="margin: 0 0 4px;"><strong>Famous Letterpress Studio</strong></p>
          <p style="margin: 0 0 4px;">Email: <a href="mailto:info@famousletterpress.com" style="color: #777;">info@famousletterpress.com</a> · Dimapur, Nagaland, India</p>
          <p style="margin: 0;">Trade Reference: ${partnerRef}</p>
        </div>
      </div>
    `;

    // Dispatch emails asynchronously
    // 1. Studio notification
    const emailPromises = [
      sendStudioEmail({
        replyTo: email,
        subject: `[Trade Partner Application] ${companyName} — ${fullName} [${partnerRef}]`,
        html: studioHtml,
        text: `New trade partner application from ${fullName} (${companyName}). Email: ${email}, Phone: ${phone}. Ref: ${partnerRef}`,
      }),
    ];

    // 2. Automated applicant confirmation (if applicant has provided a valid-looking email)
    if (email && email.includes("@")) {
      emailPromises.push(
        sendStudioEmail({
          to: email,
          replyTo: "info@famousletterpress.com",
          subject: `Trade Partnership Application Received — Famous Letterpress [${partnerRef}]`,
          html: applicantHtml,
          text: `Dear ${fullName}, thank you for your application to join the Famous Letterpress Creative Trade Network. Reference: ${partnerRef}. Our studio team will review your credentials within 24 business hours.`,
        })
      );
    }

    // Execute email sends and await completion so Vercel serverless runtime does not freeze prematurely
    try {
      const results = await Promise.allSettled(emailPromises);
      results.forEach((res, index) => {
        if (res.status === "rejected") {
          console.error(`Email dispatch ${index === 0 ? "studio" : "applicant"} error:`, res.reason);
        }
      });
    } catch (err) {
      console.error("Email automation trigger error:", err);
    }

    return NextResponse.json({
      success: true,
      leadRef: partnerRef,
      message: "Your trade partner application has been received. Our studio will review your credentials and contact you within 24 business hours.",
    });
  } catch (error) {
    console.error("Channel partner application API error:", error);
    return NextResponse.json(
      { error: "Failed to submit partner application. Please try again or message us on WhatsApp." },
      { status: 500 }
    );
  }
}
