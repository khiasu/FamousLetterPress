"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
  Check,
  Upload,
  Crop as CropIcon,
  RefreshCw,
} from "lucide-react";

export type AspectRatioType = "square" | "portrait" | "landscape" | "video" | "free";

interface RatioOption {
  key: AspectRatioType;
  label: string;
  ratio: number; // width / height
  desc: string;
}

const RATIO_OPTIONS: RatioOption[] = [
  { key: "portrait", label: "Portrait 3:4", ratio: 3 / 4, desc: "Services & Portfolio" },
  { key: "landscape", label: "Landscape 16:10", ratio: 16 / 10, desc: "Banners & Editorial" },
  { key: "square", label: "Square 1:1", ratio: 1, desc: "Sample Kits & Detail" },
  { key: "video", label: "Video 16:9", ratio: 16 / 9, desc: "Wide Hero" },
];

interface ImageCropperModalProps {
  isOpen: boolean;
  imageSrc: string;
  initialRatio?: AspectRatioType;
  fileName?: string;
  onClose: () => void;
  onCropComplete: (uploadedUrl: string) => void;
}

export function ImageCropperModal({
  isOpen,
  imageSrc,
  initialRatio = "portrait",
  fileName = "uploaded-image",
  onClose,
  onCropComplete,
}: ImageCropperModalProps) {
  const [selectedRatio, setSelectedRatio] = useState<AspectRatioType>(initialRatio);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0); // 0, 90, 180, 270
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  // Reset state when a new image or ratio opens
  useEffect(() => {
    if (isOpen) {
      setSelectedRatio(initialRatio);
      setZoom(1);
      setRotation(0);
      setOffset({ x: 0, y: 0 });
      setUploadError(null);
      setIsUploading(false);
    }
  }, [isOpen, initialRatio, imageSrc]);

  const activeRatioConfig =
    RATIO_OPTIONS.find((r) => r.key === selectedRatio) || RATIO_OPTIONS[0];
  const targetRatio = activeRatioConfig.ratio;

  // Viewport / framing box dimensions inside modal (max ~520x420)
  const maxFrameW = 500;
  const maxFrameH = 380;
  let frameWidth = maxFrameW;
  let frameHeight = maxFrameW / targetRatio;

  if (frameHeight > maxFrameH) {
    frameHeight = maxFrameH;
    frameWidth = maxFrameH * targetRatio;
  }

  // Handle image load
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
    setImgLoaded(true);
    setOffset({ x: 0, y: 0 });
    setZoom(1);
  };

  // Base cover scale
  const isRotated90 = rotation % 180 !== 0;
  const currentImgW = isRotated90 ? naturalSize.height : naturalSize.width;
  const currentImgH = isRotated90 ? naturalSize.width : naturalSize.height;

  const baseScale =
    currentImgW > 0 && currentImgH > 0
      ? Math.max(frameWidth / currentImgW, frameHeight / currentImgH)
      : 1;

  const effectiveScale = baseScale * zoom;

  // Pan / Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0015;
    setZoom((prev) => Math.min(3.5, Math.max(1, prev + delta)));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
    setOffset({ x: 0, y: 0 });
  };

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setOffset({ x: 0, y: 0 });
  };

  // Perform crop & upload
  const handleCropAndUpload = async () => {
    if (!imgRef.current || !imgLoaded) return;
    setIsUploading(true);
    setUploadError(null);

    try {
      // Determine output canvas size (high-res export for crisp letterpress detail)
      const maxOutputDim = 1600;
      let outW: number;
      let outH: number;

      if (targetRatio >= 1) {
        outW = maxOutputDim;
        outH = Math.round(maxOutputDim / targetRatio);
      } else {
        outH = maxOutputDim;
        outW = Math.round(maxOutputDim * targetRatio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext("2d");

      if (!ctx) throw new Error("Could not create canvas context");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Ratio between canvas export and viewfinder frame
      const canvasToFrameRatio = outW / frameWidth;

      // Fill canvas background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, outW, outH);

      // Translate context to center of canvas
      ctx.save();
      ctx.translate(outW / 2, outH / 2);

      // Apply pan offsets scaled to output resolution
      ctx.translate(offset.x * canvasToFrameRatio, offset.y * canvasToFrameRatio);

      // Apply rotation
      ctx.rotate((rotation * Math.PI) / 180);

      // Draw image centered
      const drawScale = effectiveScale * canvasToFrameRatio;
      const drawW = naturalSize.width * drawScale;
      const drawH = naturalSize.height * drawScale;

      ctx.drawImage(imgRef.current, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();

      // Convert to blob
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((b) => resolve(b), "image/webp", 0.92);
      });

      if (!blob) throw new Error("Failed to render cropped image");

      // Upload to server
      const formData = new FormData();
      const safeBaseName = fileName.replace(/\.[^/.]+$/, "") || "cropped-image";
      formData.append("file", blob, `${safeBaseName}-${selectedRatio}.webp`);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || "Server failed to save cropped image");
      }

      const result = await res.json();
      if (result.url) {
        onCropComplete(result.url);
        onClose();
      } else {
        throw new Error("Invalid response from upload server");
      }
    } catch (err: any) {
      console.error("Crop error:", err);
      setUploadError(err.message || "Failed to crop and upload");
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs select-none"
      onPointerUp={handlePointerUp}
    >
      <div
        className="w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-lg shadow-2xl flex flex-col overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-stone-800 flex items-center justify-center text-stone-300">
              <CropIcon className="w-4 h-4" />
            </div>
            <div>
              <h2
                className="text-sm font-semibold tracking-tight !text-white"
                style={{ color: "#ffffff" }}
              >
                Place &amp; Frame Image
              </h2>
              <p className="text-[11px] text-stone-400">
                Drag to position · Zoom or scroll to scale · Predefined ratio
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Aspect Ratio Selector Pills */}
        <div className="px-5 py-2.5 bg-stone-950/60 border-b border-stone-800/80 flex items-center justify-between gap-2 flex-wrap">
          <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
            Target Ratio:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {RATIO_OPTIONS.map((opt) => {
              const active = selectedRatio === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => {
                    setSelectedRatio(opt.key);
                    setOffset({ x: 0, y: 0 });
                  }}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
                    active
                      ? "bg-white text-stone-950 font-semibold shadow-xs"
                      : "bg-stone-800/70 text-stone-300 hover:bg-stone-800 hover:text-white"
                  }`}
                >
                  <span>{opt.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Viewfinder Workspace */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          className="relative bg-stone-950 flex items-center justify-center p-4 min-h-[380px] max-h-[440px] overflow-hidden"
        >
          {/* Viewfinder framing box */}
          <div
            style={{ width: `${frameWidth}px`, height: `${frameHeight}px` }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            className="relative cursor-grab active:cursor-grabbing border-2 border-white/90 shadow-[0_0_0_9999px_rgba(0,0,0,0.72)] z-10 overflow-hidden"
          >
            {/* Rule of thirds grid lines */}
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                <div className="border-r border-b border-white/20" />
                <div className="border-r border-b border-white/20" />
                <div className="border-b border-white/20" />
                <div className="border-r border-b border-white/20" />
                <div className="border-r border-b border-white/20" />
                <div className="border-b border-white/20" />
                <div className="border-r border-white/20" />
                <div className="border-r border-white/20" />
                <div />
              </div>
            </div>

            {/* Corner crop tick marks */}
            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white pointer-events-none z-30" />
            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-white pointer-events-none z-30" />
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-white pointer-events-none z-30" />
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white pointer-events-none z-30" />

            {/* Image being framed */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Framing preview"
              onLoad={onImageLoad}
              crossOrigin={
                imageSrc.startsWith("blob:") || imageSrc.startsWith("data:") || imageSrc.startsWith("/")
                  ? undefined
                  : "anonymous"
              }
              onError={(e) => {
                if (e.currentTarget.crossOrigin) {
                  e.currentTarget.removeAttribute("crossorigin");
                  e.currentTarget.src = imageSrc;
                }
              }}
              draggable={false}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg) scale(${effectiveScale})`,
                transformOrigin: "center center",
                maxWidth: "none",
                maxHeight: "none",
                pointerEvents: "none",
                transition: isDragging ? "none" : "transform 0.05s ease-out",
              }}
            />
          </div>

          {/* Ratio helper badge floating in viewfinder */}
          <div className="absolute bottom-3 left-4 z-20 pointer-events-none">
            <span className="text-[10px] font-mono tracking-wider bg-stone-900/90 text-stone-300 px-2 py-0.5 rounded border border-stone-800">
              {activeRatioConfig.label} · {activeRatioConfig.desc}
            </span>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="px-5 py-3 border-t border-stone-800 bg-stone-900/95 flex flex-wrap items-center justify-between gap-4">
          {/* Zoom Slider */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] max-w-xs">
            <button
              type="button"
              onClick={() => setZoom((prev) => Math.max(1, prev - 0.15))}
              className="text-stone-400 hover:text-white transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <input
              type="range"
              min="1"
              max="3.5"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <button
              type="button"
              onClick={() => setZoom((prev) => Math.min(3.5, prev + 0.15))}
              className="text-stone-400 hover:text-white transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-stone-400 min-w-[32px]">
              {zoom.toFixed(1)}x
            </span>
          </div>

          {/* Quick Adjust Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleRotate}
              className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded transition-colors flex items-center gap-1.5"
              title="Rotate 90 degrees clockwise"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Rotate</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded transition-colors flex items-center gap-1.5"
              title="Reset zoom & center"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Error message */}
        {uploadError && (
          <div className="px-5 py-2 bg-red-950/80 border-t border-red-800 text-xs text-red-200 flex items-center justify-between">
            <span>{uploadError}</span>
            <button
              type="button"
              onClick={() => setUploadError(null)}
              className="text-red-300 hover:text-white text-xs underline font-mono"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Modal Footer Actions */}
        <div className="px-5 py-3 border-t border-stone-800 bg-stone-950 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            disabled={isUploading}
            className="px-4 py-2 text-xs font-medium text-stone-400 hover:text-white transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCropAndUpload}
              disabled={isUploading || !imgLoaded}
              className="px-5 py-2 bg-white text-stone-950 hover:bg-stone-200 text-xs font-semibold rounded transition-colors flex items-center gap-2 shadow-xs disabled:opacity-50"
            >
              {isUploading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Cropping &amp; Uploading...</span>
                </>
              ) : (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Crop &amp; Apply Image</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
