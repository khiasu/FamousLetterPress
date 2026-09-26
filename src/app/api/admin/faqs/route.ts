import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";
import { FAQSectionItem } from "@/lib/data/faqs";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.faqs });
}

export async function POST(req: Request) {
  try {
    const newFaq: FAQSectionItem = await req.json();
    const store = readCMSStore();

    if (!newFaq.id) {
      newFaq.id = `faq-${Date.now()}`;
    }
    store.faqs.push(newFaq);

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.faqs });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const updatedFaq: FAQSectionItem = await req.json();
    const store = readCMSStore();

    const index = store.faqs.findIndex((f) => f.id === updatedFaq.id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: "FAQ not found" }, { status: 404 });
    }

    store.faqs[index] = updatedFaq;
    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.faqs });
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
    store.faqs = store.faqs.filter((f) => f.id !== id);

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.faqs });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
