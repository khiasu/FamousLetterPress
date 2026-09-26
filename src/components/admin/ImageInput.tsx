"use client";

import React, { useState, useRef } from "react";
import {
  Upload,
  Crop as CropIcon,
  Link as LinkIcon,
  Trash2,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";
import { ImageCropperModal, AspectRatioType } from "./ImageCropperModal";

interface ImageInputProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helperText?: string;
  aspectRatio?: AspectRatioType;
}

export function ImageInput({
  label,
  value,
  onChange,
  helperText,
  aspectRatio = "portrait",
}: ImageInputProps) {
  const [imgError, setImgError] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [cropperOpen, setCropperOpen] = useState(false);
  const [tempImageSrc, setTempImageSrc] = useState<string>("");
  const [tempFileName, setTempFileName] = useState<string>("upload");
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const ratioLabels: Record<AspectRatioType, string> = {
    portrait: "3:4 (Portrait)",
    landscape: "16:10 (Landscape)",
    square: "1:1 (Square)",
    video: "16:9 (Widescreen)",
    free: "Free ratio",
  };

  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "portrait"
      ? "aspect-[3/4]"
      : aspectRatio === "video"
      ? "aspect-video"
      : "aspect-[16/10]";

  // Handle file selection from disk
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    processSelectedFile(file);
    // Reset file input so selecting the same file again triggers change
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const processSelectedFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (JPEG, PNG, WebP, AVIF).");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setTempImageSrc(objectUrl);
    setTempFileName(file.name);
    setCropperOpen(true);
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
  };

  // Re-crop existing image
  const handleRecropExisting = () => {
    if (!value) return;
    setTempImageSrc(value);
    setTempFileName("recrop");
    setCropperOpen(true);
  };

  const handleCropComplete = (uploadedUrl: string) => {
    onChange(uploadedUrl);
    setImgError(false);
  };

  return (
    <div className="space-y-2.5">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Header with Label and Frame Ratio */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <label className="block text-xs font-semibold text-stone-800">
            {label}
          </label>
          <span className="text-[10px] font-mono tracking-tight bg-stone-100 text-stone-600 px-2 py-0.5 rounded border border-stone-200">
            Frame: {ratioLabels[aspectRatio]}
          </span>
        </div>
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange("");
              setImgError(false);
            }}
            className="text-[11px] text-rose-600 hover:text-rose-800 transition-colors flex items-center gap-1 font-mono"
          >
            <Trash2 className="w-3 h-3" />
            <span>Remove</span>
          </button>
        )}
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch">
        {/* Left: Primary Upload Button & Action Area */}
        <div className="sm:col-span-8 flex flex-col justify-between space-y-2.5">
          {/* Primary Upload Button / Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-md p-4 transition-all duration-200 text-center flex flex-col items-center justify-center gap-2 ${
              isDragging
                ? "border-stone-900 bg-stone-100 scale-[1.01]"
                : "border-stone-300 hover:border-stone-500 bg-stone-50/70"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-stone-200 flex items-center justify-center text-stone-800">
              <Upload className="w-5 h-5" />
            </div>

            <div className="space-y-0.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded shadow-xs transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload from Device</span>
              </button>
              <p className="text-[11px] text-stone-500 pt-1">
                Drag &amp; drop an image here, or browse from device
              </p>
            </div>

            <p className="text-[10px] text-stone-400 font-mono">
              Predefined crop ratio will open automatically to frame your shot
            </p>
          </div>

          {/* Action Row for Existing Image or Alternative URL Input */}
          <div className="flex items-center justify-between gap-2 flex-wrap pt-0.5">
            <div className="flex items-center gap-2">
              {value && !imgError && (
                <button
                  type="button"
                  onClick={handleRecropExisting}
                  className="px-2.5 py-1 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded transition-colors flex items-center gap-1.5 shadow-2xs"
                  title="Adjust framing of current image"
                >
                  <CropIcon className="w-3 h-3 text-stone-600" />
                  <span>Adjust Framing</span>
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowUrlInput(!showUrlInput)}
              className="text-[11px] font-mono text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors ml-auto"
            >
              <LinkIcon className="w-3 h-3" />
              <span>{showUrlInput ? "Hide URL input" : "Paste URL / CDN directly"}</span>
            </button>
          </div>

          {/* Collapsible Direct URL Input */}
          {showUrlInput && (
            <div className="p-3 bg-white border border-stone-200 rounded-md space-y-1.5 shadow-2xs">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500">
                Direct Image URL (Cloudinary / CDN)
              </label>
              <input
                type="url"
                value={value}
                placeholder="https://res.cloudinary.com/famous-letterpress/image/upload/..."
                onChange={(e) => {
                  onChange(e.target.value.trim());
                  setImgError(false);
                }}
                className="w-full bg-stone-50 border border-stone-300 rounded px-2.5 py-1.5 text-xs font-mono text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-white"
              />
              <p className="text-[10px] text-stone-400">
                {helperText || "Paste an existing Cloudinary link or external CDN image URL."}
              </p>
            </div>
          )}
        </div>

        {/* Right: Framed Live Thumbnail Preview */}
        <div className="sm:col-span-4 flex flex-col justify-center">
          <div
            className={`w-full ${aspectClass} rounded-md border border-stone-200 bg-stone-100 overflow-hidden relative shadow-2xs flex items-center justify-center group`}
          >
            {value && !imgError ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={value}
                  alt="Framed preview"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                  <button
                    type="button"
                    onClick={handleRecropExisting}
                    className="p-1.5 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow transition-transform hover:scale-110"
                    title="Adjust frame"
                  >
                    <CropIcon className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-1.5 bg-white/90 hover:bg-white text-stone-900 rounded-full shadow transition-transform hover:scale-110"
                    title="Replace with new photo"
                  >
                    <Upload className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="absolute bottom-1 right-1 pointer-events-none">
                  <span className="inline-flex items-center gap-1 bg-stone-900/80 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                    Framed
                  </span>
                </div>
              </>
            ) : (
              <div className="text-center p-3 text-stone-400 flex flex-col items-center gap-1">
                <ImageIcon className="w-5 h-5 stroke-[1.5]" />
                <span className="text-[10px] font-mono uppercase tracking-wider block">
                  {imgError ? "Invalid URL" : "No image"}
                </span>
                <span className="text-[9px] text-stone-400">
                  {ratioLabels[aspectRatio]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Crop & Frame Modal */}
      <ImageCropperModal
        isOpen={cropperOpen}
        imageSrc={tempImageSrc}
        initialRatio={aspectRatio}
        fileName={tempFileName}
        onClose={() => setCropperOpen(false)}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
}
