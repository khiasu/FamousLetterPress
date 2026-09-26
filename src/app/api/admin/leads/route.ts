import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.leads });
}

export async function PUT(req: Request) {
  try {
    const { id, status, notes } = await req.json();
    const store = readCMSStore();

    const index = store.leads.findIndex((l: any) => l.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: "Lead not found" }, { status: 404 });
    }

    if (status) store.leads[index].status = status;
    if (notes !== undefined) store.leads[index].notes = notes;

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.leads });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
