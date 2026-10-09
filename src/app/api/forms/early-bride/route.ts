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
