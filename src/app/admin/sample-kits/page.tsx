"use client";

import React, { useState, useEffect } from "react";
import { SampleKitItem } from "@/types";
import { ImageInput } from "@/components/admin/ImageInput";

export default function AdminSampleKitsPage() {
  const [kits, setKits] = useState<Record<string, SampleKitItem>>({});
  const [activeSlug, setActiveSlug] = useState<string>("wedding-sample-kit");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/admin/sample-kits")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setKits(data.data);
          const firstKey = Object.keys(data.data)[0];
          if (firstKey) setActiveSlug(firstKey);
        }
      })
      .catch((err) => console.error("Error loading sample kits:", err))
      .finally(() => setLoading(false));
  }, []);

  const activeKit = kits[activeSlug];

  const handleFieldChange = (field: keyof SampleKitItem, value: any) => {
    if (!activeKit) return;
    setKits((prev) => ({
      ...prev,
      [activeSlug]: {
        ...prev[activeSlug],
        [field]: value,
      },
    }));
  };

  const handleAddGalleryImage = (url: string) => {
    if (!activeKit || !url) return;
    const current = activeKit.galleryImages || [];
    handleFieldChange("galleryImages", [...current, url]);
  };

  const handleRemoveGalleryImage = (index: number) => {
    if (!activeKit) return;
    const current = [...(activeKit.galleryImages || [])];
    current.splice(index, 1);
    handleFieldChange("galleryImages", current);
  };

  const handleSave = async () => {
    if (!activeKit) return;
    setSaving(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/admin/sample-kits", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: activeSlug, kit: activeKit }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage({ text: "Sample kit saved and updated successfully.", type: "success" });
      } else {
        setStatusMessage({ text: data.message || "Failed to update sample kit.", type: "error" });
      }
    } catch (err) {
      setStatusMessage({ text: "Network error while saving.", type: "error" });
    } finally {
      setSaving(false);
      setTimeout(() => setStatusMessage(null), 4000);
    }
  };

  if (loading) {
    return <div className="p-8 text-xs font-mono text-stone-500">Loading sample kits...</div>;
  }

  const slugs = Object.keys(kits);

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">Sample Kits Management</h1>
          <p className="text-xs text-stone-500 mt-1">
            Configure direct-payment sample kits, prices, Cloudinary product photos, and box contents.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 disabled:opacity-50 transition-colors"
        >
          {saving ? "Saving..." : "Save Kit Configuration"}
        </button>
      </div>

      {statusMessage && (
        <div
          className={`p-3 text-xs rounded-sm border ${
            statusMessage.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-rose-50 border-rose-200 text-rose-800"
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      {/* Kit Selector Tabs */}
      <div className="flex gap-2 border-b border-stone-200 pb-2">
        {slugs.map((slug) => (
          <button
            key={slug}
            onClick={() => setActiveSlug(slug)}
            className={`px-4 py-2 text-xs font-mono rounded-sm transition-colors ${
              activeSlug === slug
                ? "bg-stone-900 text-white font-semibold"
                : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
            }`}
          >
            {kits[slug]?.name || slug}
          </button>
        ))}
      </div>

      {activeKit && (
        <div className="bg-white p-6 sm:p-8 rounded-sm border border-stone-200 shadow-2xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Kit Name</label>
              <input
                type="text"
                value={activeKit.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900 font-serif text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Price (INR)</label>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-stone-500">₹</span>
                <input
                  type="number"
                  value={activeKit.price}
                  onChange={(e) => handleFieldChange("price", Number(e.target.value))}
                  className="w-32 bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-sm font-mono font-bold text-stone-900"
                />
                <span className="text-xs text-stone-500 font-mono">INR</span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1">Tagline</label>
              <input
                type="text"
                value={activeKit.tagline || ""}
                onChange={(e) => handleFieldChange("tagline", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1">Detailed Description</label>
              <textarea
                rows={3}
                value={activeKit.description}
                onChange={(e) => handleFieldChange("description", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900 leading-relaxed"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1">Shipping & Dispatch Notice</label>
              <input
                type="text"
                value={activeKit.shippingInfo || ""}
                onChange={(e) => handleFieldChange("shippingInfo", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
          </div>

          {/* Cloudinary Image Input */}
          <div className="pt-6 border-t border-stone-200">
            <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3">
              Kit Photography (Cloudinary / CDN)
            </h2>
            <ImageInput
              label="Primary Kit Showcase Image URL"
              value={activeKit.featuredImage || ""}
              onChange={(url) => handleFieldChange("featuredImage", url)}
              aspectRatio="landscape"
              helperText="Paste Cloudinary product photography URL or image CDN link."
            />
          </div>

          {/* Gallery Thumbnails */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            <label className="block text-xs font-medium text-stone-700">
              Gallery Thumbnails ({activeKit.galleryImages?.length || 0})
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeKit.galleryImages?.map((imgUrl, idx) => (
                <div key={idx} className="relative group aspect-square rounded-sm overflow-hidden border border-stone-200 bg-stone-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => handleRemoveGalleryImage(idx)}
                    className="absolute top-1.5 right-1.5 bg-black/75 hover:bg-rose-700 text-white p-1 rounded-xs text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remove image"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="url"
                id="new-kit-gallery-url"
                placeholder="Paste new Cloudinary image URL for gallery swatch..."
                className="flex-1 bg-stone-50 border border-stone-300 rounded-sm px-3 py-1.5 text-xs font-mono text-stone-900"
              />
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById("new-kit-gallery-url") as HTMLInputElement;
                  if (input && input.value) {
                    handleAddGalleryImage(input.value.trim());
                    input.value = "";
                  }
                }}
                className="px-3 py-1.5 bg-stone-800 text-white rounded-sm text-xs font-medium hover:bg-stone-700 transition-colors"
              >
                + Add Thumbnail
              </button>
            </div>
          </div>

          {/* Inclusions */}
          <div className="pt-6 border-t border-stone-200 space-y-3">
            <label className="block text-xs font-medium text-stone-700">
              Included Items List (One item per line)
            </label>
            <textarea
              rows={6}
              value={activeKit.includedItems.join("\n")}
              onChange={(e) =>
                handleFieldChange(
                  "includedItems",
                  e.target.value.split("\n").filter((line) => line.trim().length > 0)
                )
              }
              className="w-full bg-stone-50 border border-stone-300 rounded-sm p-3 text-xs text-stone-900 font-mono leading-relaxed"
            />
          </div>

          {/* Stock Toggle */}
          <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={activeKit.stockAvailable}
                onChange={(e) => handleFieldChange("stockAvailable", e.target.checked)}
                className="rounded-xs text-stone-900"
              />
              <span className="text-xs font-medium text-stone-800">
                In Stock & Accepting Orders (Razorpay Checkout active)
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
