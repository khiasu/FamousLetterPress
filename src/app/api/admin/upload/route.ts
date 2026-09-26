import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let buffer: Buffer;
    let extension = "webp";
    let originalName = "image";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
      originalName = file.name.replace(/\.[^/.]+$/, "");
      const extMatch = file.name.match(/\.([a-zA-Z0-9]+)$/);
      if (extMatch) {
        extension = extMatch[1].toLowerCase();
      }
    } else {
      // JSON with base64 dataUrl
      const body = await req.json();
      const { dataUrl, filename } = body;

      if (!dataUrl || typeof dataUrl !== "string") {
        return NextResponse.json({ error: "No dataUrl provided" }, { status: 400 });
      }

      const matches = dataUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
      if (!matches) {
        return NextResponse.json({ error: "Invalid dataUrl format" }, { status: 400 });
      }

      extension = matches[1] === "jpeg" ? "jpg" : matches[1];
      buffer = Buffer.from(matches[2], "base64");
      if (filename) {
        originalName = String(filename).replace(/\.[^/.]+$/, "");
      }
    }

    // Sanitize name
    const safeName = originalName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .slice(0, 30);
    const uniqueSuffix = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
    const finalFilename = `${safeName}-${uniqueSuffix}.${extension}`;

    // Ensure public/uploads directory exists
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      await fs.promises.mkdir(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, finalFilename);
    await fs.promises.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${finalFilename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: finalFilename,
      size: buffer.length,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process image upload" },
      { status: 500 }
    );
  }
}
