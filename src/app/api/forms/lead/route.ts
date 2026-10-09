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
