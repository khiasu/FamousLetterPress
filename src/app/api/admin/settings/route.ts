import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.settings });
}

export async function PUT(req: Request) {
  try {
    const updatedSettings = await req.json();
    const store = readCMSStore();

    store.settings = {
      ...store.settings,
      ...updatedSettings,
    };

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.settings });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
