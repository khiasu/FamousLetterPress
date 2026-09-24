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

    // Log consultation lead for development / production storage
    console.log("New Early Bride Consultation Received:", {
      leadRef,
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
      createdAt: new Date().toISOString(),
    });

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
