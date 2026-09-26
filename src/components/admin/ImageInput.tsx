"use client";

import React, { useState } from "react";

interface ImageInputProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helperText?: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "video";
}

export function ImageInput({
  label,
  value,
  onChange,
  helperText = "Paste a Cloudinary URL (https://res.cloudinary.com/...) or any valid image CDN link.",
  aspectRatio = "landscape",
}: ImageInputProps) {
  const [imgError, setImgError] = useState(false);

  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "portrait"
      ? "aspect-[3/4]"
      : aspectRatio === "video"
      ? "aspect-video"
      : "aspect-[16/10]";

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-medium text-stone-700">{label}</label>
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange("");
              setImgError(false);
            }}
            className="text-[11px] text-rose-600 hover:underline font-mono"
          >
            Clear image
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
        <div className="sm:col-span-8 space-y-1.5">
          <input
            type="url"
            value={value}
            placeholder="https://res.cloudinary.com/famous-letterpress/image/upload/..."
            onChange={(e) => {
              onChange(e.target.value.trim());
              setImgError(false);
            }}
            className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs font-mono text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-white"
          />
          <p className="text-[11px] text-stone-500 leading-tight">
            {helperText}
          </p>
        </div>

        <div className="sm:col-span-4">
          <div
            className={`w-full ${aspectClass} rounded-sm border border-stone-200 bg-stone-100 overflow-hidden relative flex items-center justify-center`}
          >
            {value && !imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={value}
                alt="Preview"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-2 text-neutral-400">
                <span className="text-[10px] font-mono uppercase tracking-wider block">
                  {imgError ? "Invalid URL" : "No image"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
