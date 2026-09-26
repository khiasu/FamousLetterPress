import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";
import { PortfolioPiece } from "@/types";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.portfolio });
}

export async function POST(req: Request) {
  try {
    const newPiece: PortfolioPiece = await req.json();
    const store = readCMSStore();

    if (!newPiece.id) {
      newPiece.id = `port-${Date.now()}`;
    }
    store.portfolio.unshift(newPiece);

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.portfolio });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const updatedPiece: PortfolioPiece = await req.json();
    const store = readCMSStore();

    const index = store.portfolio.findIndex((p) => p.id === updatedPiece.id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: "Piece not found" }, { status: 404 });
    }

    store.portfolio[index] = updatedPiece;
    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.portfolio });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
    }

    const store = readCMSStore();
    store.portfolio = store.portfolio.filter((p) => p.id !== id);

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.portfolio });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
