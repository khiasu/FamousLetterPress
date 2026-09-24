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

    console.log("New Project Lead Received:", {
      leadRef,
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
      createdAt: new Date().toISOString(),
    });

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
