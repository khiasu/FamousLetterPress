"use client";

import React, { useState, useEffect } from "react";
import { PortfolioPiece } from "@/types";
import { ImageInput } from "@/components/admin/ImageInput";

export default function AdminPortfolioPage() {
  const [pieces, setPieces] = useState<PortfolioPiece[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingPiece, setEditingPiece] = useState<PortfolioPiece | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/admin/portfolio")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setPieces(data.data);
        }
      })
      .catch((err) => console.error("Error loading portfolio:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleCreateNew = () => {
    setEditingPiece({
      id: `port-${Date.now()}`,
      title: "",
      slug: "",
      category: "weddings",
      categoryLabel: "Wedding Stationery",
      clientOrProject: "",
      description: "",
      techniques: ["Letterpress", "Foil Stamping"],
      paperStock: "100% Cotton 600gsm",
      featuredImage: "",
      featured: false,
    });
    setIsCreating(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPiece) return;

    if (!editingPiece.title || !editingPiece.featuredImage) {
      setStatusMessage({ text: "Please enter a title and image URL.", type: "error" });
      return;
    }

    setSaving(true);
    setStatusMessage(null);

    const method = isCreating ? "POST" : "PUT";
    try {
      const res = await fetch("/api/admin/portfolio", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPiece),
      });
      const data = await res.json();
      if (data.success) {
        setPieces(data.data);
        setEditingPiece(null);
        setIsCreating(false);
        setStatusMessage({ text: "Portfolio item saved successfully.", type: "success" });
      } else {
        setStatusMessage({ text: data.message || "Failed to save portfolio piece.", type: "error" });
      }
    } catch (err) {
      setStatusMessage({ text: "Network error while saving.", type: "error" });
    } finally {
      setSaving(false);
      setTimeout(() => setStatusMessage(null), 4000);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this portfolio piece?")) return;

    try {
      const res = await fetch(`/api/admin/portfolio?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setPieces(data.data);
        if (editingPiece?.id === id) {
          setEditingPiece(null);
          setIsCreating(false);
        }
        setStatusMessage({ text: "Portfolio piece deleted.", type: "success" });
      }
    } catch (err) {
      setStatusMessage({ text: "Failed to delete item.", type: "error" });
    }
  };

  if (loading) {
    return <div className="p-8 text-xs font-mono text-stone-500">Loading portfolio management...</div>;
  }

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">Portfolio Management</h1>
          <p className="text-xs text-stone-500 mt-1">
            Manage public gallery items, paper stocks, print techniques, and Cloudinary project photos.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 transition-colors"
        >
          + Add New Commission
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

      {/* Editor Modal / Form */}
      {editingPiece && (
        <div className="bg-white p-6 sm:p-8 rounded-sm border border-stone-300 shadow-lg space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-lg font-serif font-medium text-stone-900">
              {isCreating ? "Add New Portfolio Piece" : `Edit: ${editingPiece.title}`}
            </h2>
            <button
              onClick={() => {
                setEditingPiece(null);
                setIsCreating(false);
              }}
              className="text-stone-400 hover:text-stone-800 text-sm"
            >
              ✕ Cancel
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={editingPiece.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    setEditingPiece((prev) => (prev ? { ...prev, title, slug: isCreating ? slug : prev.slug } : null));
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Slug</label>
                <input
                  type="text"
                  required
                  value={editingPiece.slug}
                  onChange={(e) => setEditingPiece((prev) => (prev ? { ...prev, slug: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs font-mono text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Category</label>
                <select
                  value={editingPiece.category}
                  onChange={(e) => {
                    const cat = e.target.value as PortfolioPiece["category"];
                    const label =
                      cat === "weddings"
                        ? "Wedding Stationery"
                        : cat === "business-cards"
                        ? "Business Cards"
                        : "Personalised Stationery";
                    setEditingPiece((prev) => (prev ? { ...prev, category: cat, categoryLabel: label } : null));
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                >
                  <option value="weddings">Wedding Stationery</option>
                  <option value="business-cards">Business Cards</option>
                  <option value="personalised">Personalised Stationery</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Client or Project Name</label>
                <input
                  type="text"
                  value={editingPiece.clientOrProject || ""}
                  onChange={(e) => setEditingPiece((prev) => (prev ? { ...prev, clientOrProject: e.target.value } : null))}
                  placeholder="e.g. Studio K Architecture, Private Wedding"
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">Paper Stock Specification</label>
                <input
                  type="text"
                  value={editingPiece.paperStock || ""}
                  onChange={(e) => setEditingPiece((prev) => (prev ? { ...prev, paperStock: e.target.value } : null))}
                  placeholder="e.g. Crane Lettra 600gsm Pearl White & Handmade Cotton"
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingPiece.description}
                  onChange={(e) => setEditingPiece((prev) => (prev ? { ...prev, description: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Techniques (Comma-separated)
                </label>
                <input
                  type="text"
                  value={editingPiece.techniques.join(", ")}
                  onChange={(e) =>
                    setEditingPiece((prev) =>
                      prev
                        ? {
                            ...prev,
                            techniques: e.target.value
                              .split(",")
                              .map((t) => t.trim())
                              .filter(Boolean),
                          }
                        : null
                    )
                  }
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>
            </div>

            {/* Cloudinary Image Input */}
            <div className="pt-2">
              <ImageInput
                label="Primary Featured Image URL (Cloudinary / CDN)"
                value={editingPiece.featuredImage}
                onChange={(url) => setEditingPiece((prev) => (prev ? { ...prev, featuredImage: url } : null))}
                aspectRatio="portrait"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="featured"
                checked={editingPiece.featured || false}
                onChange={(e) => setEditingPiece((prev) => (prev ? { ...prev, featured: e.target.checked } : null))}
                className="rounded-xs text-stone-900"
              />
              <label htmlFor="featured" className="text-xs font-medium text-stone-800 cursor-pointer">
                Feature on Homepage showcase
              </label>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Piece"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingPiece(null);
                  setIsCreating(false);
                }}
                className="px-4 py-2 border border-stone-300 text-stone-700 text-xs rounded-sm hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Portfolio Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pieces.map((piece) => (
          <div
            key={piece.id}
            className="bg-white rounded-sm border border-stone-200 shadow-2xs overflow-hidden flex flex-col justify-between group hover:border-stone-400 transition-colors"
          >
            <div>
              <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative border-b border-stone-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={piece.featuredImage}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-stone-900/90 text-white px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase">
                  {piece.categoryLabel}
                </span>
                {piece.featured && (
                  <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="text-[11px] font-mono text-terracotta uppercase tracking-wider mb-1 font-medium">
                  {piece.clientOrProject || "Bespoke Project"}
                </div>
                <h3 className="font-serif text-lg text-stone-900 font-medium mb-1">{piece.title}</h3>
                <p className="text-xs text-stone-500 mb-3">{piece.paperStock}</p>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-light mb-4">
                  {piece.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {piece.techniques.map((t) => (
                    <span key={t} className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setEditingPiece(piece);
                  setIsCreating(false);
                }}
                className="text-xs font-medium text-stone-900 hover:underline"
              >
                Edit Piece &rarr;
              </button>
              <button
                type="button"
                onClick={() => handleDelete(piece.id)}
                className="text-[11px] text-rose-600 hover:text-rose-800 font-mono"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
