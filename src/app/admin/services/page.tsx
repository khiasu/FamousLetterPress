"use client";

import React, { useState, useEffect } from "react";
import { ServiceItem } from "@/types";
import { ImageInput } from "@/components/admin/ImageInput";

export default function AdminServicesPage() {
  const [services, setServices] = useState<Record<string, ServiceItem>>({});
  const [activeSlug, setActiveSlug] = useState<string>("wedding-stationery");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/admin/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setServices(data.data);
          const firstKey = Object.keys(data.data)[0];
          if (firstKey) setActiveSlug(firstKey);
        }
      })
      .catch((err) => console.error("Error loading services:", err))
      .finally(() => setLoading(false));
  }, []);

  const activeService = services[activeSlug];

  const handleFieldChange = (field: keyof ServiceItem, value: any) => {
    if (!activeService) return;
    setServices((prev) => ({
      ...prev,
      [activeSlug]: {
        ...prev[activeSlug],
        [field]: value,
      },
    }));
  };

  const handleAddGalleryImage = (url: string) => {
    if (!activeService || !url) return;
    const current = activeService.galleryImages || [];
    handleFieldChange("galleryImages", [...current, url]);
  };

  const handleRemoveGalleryImage = (index: number) => {
    if (!activeService) return;
    const current = [...(activeService.galleryImages || [])];
    current.splice(index, 1);
    handleFieldChange("galleryImages", current);
  };

  const handleSave = async () => {
    if (!activeService) return;
    setSaving(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/admin/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: activeSlug, service: activeService }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage({ text: "Service updated and saved successfully.", type: "success" });
      } else {
        setStatusMessage({ text: data.message || "Failed to update service.", type: "error" });
      }
    } catch (err) {
      setStatusMessage({ text: "Network error while saving.", type: "error" });
    } finally {
      setSaving(false);
      setTimeout(() => setStatusMessage(null), 4000);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-xs font-mono text-stone-500">
        Loading services management...
      </div>
    );
  }

  const slugs = Object.keys(services);

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">Services Management</h1>
          <p className="text-xs text-stone-500 mt-1">
            Edit service descriptions, materials, lead times, and Cloudinary imagery.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 disabled:opacity-50 transition-colors"
        >
          {saving ? "Saving..." : "Save Changes"}
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

      {/* Service Tabs */}
      <div className="flex gap-2 border-b border-stone-200 pb-2 overflow-x-auto">
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
            {services[slug]?.title || slug}
          </button>
        ))}
      </div>

      {activeService && (
        <div className="bg-white p-6 sm:p-8 rounded-sm border border-stone-200 shadow-2xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Service Title</label>
              <input
                type="text"
                value={activeService.title || ""}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">URL Slug</label>
              <input
                type="text"
                value={activeService.slug || ""}
                disabled
                className="w-full bg-stone-100 border border-stone-200 rounded-sm px-3 py-2 text-xs font-mono text-stone-500 cursor-not-allowed"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1">Tagline</label>
              <input
                type="text"
                value={activeService.tagline || ""}
                onChange={(e) => handleFieldChange("tagline", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1">Short Description</label>
              <textarea
                rows={2}
                value={activeService.shortDesc || ""}
                onChange={(e) => handleFieldChange("shortDesc", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Production Lead Time</label>
              <input
                type="text"
                value={activeService.leadTime || ""}
                onChange={(e) => handleFieldChange("leadTime", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Sample Kit Link</label>
              <input
                type="text"
                value={activeService.sampleKitHref || ""}
                onChange={(e) => handleFieldChange("sampleKitHref", e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs font-mono text-stone-900"
              />
            </div>
          </div>

          {/* Featured Image Cloudinary Editor */}
          <div className="pt-6 border-t border-stone-200">
            <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3">
              Service Imagery (Cloudinary / CDN Supported)
            </h2>
            <ImageInput
              label="Primary Featured Image URL"
              value={activeService.featuredImage || ""}
              onChange={(url) => handleFieldChange("featuredImage", url)}
              helperText="Paste your Cloudinary image URL (e.g. https://res.cloudinary.com/...) or image CDN link."
              aspectRatio="portrait"
            />
          </div>

          {/* Gallery Images List */}
          <div className="pt-4 border-t border-stone-200 space-y-3">
            <label className="block text-xs font-medium text-stone-700">
              Gallery Images ({activeService.galleryImages?.length || 0})
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeService.galleryImages?.map((imgUrl, idx) => (
                <div key={idx} className="relative group aspect-[4/3] rounded-sm overflow-hidden border border-stone-200 bg-stone-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgUrl} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
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

            {/* Quick Add Gallery Image */}
            <div className="flex gap-2">
              <input
                type="url"
                id="new-gallery-url"
                placeholder="Paste new Cloudinary image URL for gallery..."
                className="flex-1 bg-stone-50 border border-stone-300 rounded-sm px-3 py-1.5 text-xs font-mono text-stone-900"
              />
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById("new-gallery-url") as HTMLInputElement;
                  if (input && input.value) {
                    handleAddGalleryImage(input.value.trim());
                    input.value = "";
                  }
                }}
                className="px-3 py-1.5 bg-stone-800 text-white rounded-sm text-xs font-medium hover:bg-stone-700 transition-colors"
              >
                + Add to Gallery
              </button>
            </div>
          </div>

          {/* SEO Metadata */}
          <div className="pt-6 border-t border-stone-200 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
              Search Engine (SEO) Meta Tags
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">SEO Title</label>
                <input
                  type="text"
                  value={activeService.metaTitle || ""}
                  onChange={(e) => handleFieldChange("metaTitle", e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">SEO Description</label>
                <input
                  type="text"
                  value={activeService.metaDescription || ""}
                  onChange={(e) => handleFieldChange("metaDescription", e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
