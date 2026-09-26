import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.services });
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const store = readCMSStore();

    if (body.slug && body.service) {
      store.services[body.slug] = body.service;
    } else if (body.services) {
      store.services = body.services;
    } else {
      return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
    }

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.services });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
