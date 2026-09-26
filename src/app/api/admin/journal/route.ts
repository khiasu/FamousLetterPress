import { NextResponse } from "next/server";
import { readCMSStore, writeCMSStore } from "@/lib/cms/store";
import { JournalArticle } from "@/lib/data/articles";

export async function GET() {
  const store = readCMSStore();
  return NextResponse.json({ success: true, data: store.articles });
}

export async function POST(req: Request) {
  try {
    const newArticle: JournalArticle = await req.json();
    const store = readCMSStore();

    if (!newArticle.id) {
      newArticle.id = `art-${Date.now()}`;
    }
    store.articles.unshift(newArticle);

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.articles });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const updatedArticle: JournalArticle = await req.json();
    const store = readCMSStore();

    const index = store.articles.findIndex((a) => a.id === updatedArticle.id);
    if (index === -1) {
      return NextResponse.json({ success: false, message: "Article not found" }, { status: 404 });
    }

    store.articles[index] = updatedArticle;
    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.articles });
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
    store.articles = store.articles.filter((a) => a.id !== id);

    const saved = writeCMSStore(store);
    if (!saved) {
      return NextResponse.json({ success: false, message: "Failed to persist" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: store.articles });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
