import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.sampleKits });
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const store = readCMSStore();

    if (body.slug && body.kit) {
      store.sampleKits[body.slug] = body.kit;
    } else if (body.sampleKits) {
      store.sampleKits = body.sampleKits;
    } else {
      return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
    }

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.sampleKits });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
