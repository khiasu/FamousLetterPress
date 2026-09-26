import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.orders });
}

export async function PUT(req: Request) {
  try {
    const { id, fulfillmentStatus, trackingNumber } = await req.json();
    const store = readCMSStore();

    const index = store.orders.findIndex((o: any) => o.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
    }

    if (fulfillmentStatus) store.orders[index].fulfillmentStatus = fulfillmentStatus;
    if (trackingNumber !== undefined) store.orders[index].trackingNumber = trackingNumber;

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.orders });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
