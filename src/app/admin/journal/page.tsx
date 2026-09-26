"use client";

import React, { useState, useEffect } from "react";
import { JournalArticle } from "@/lib/data/articles";
import { ImageInput } from "@/components/admin/ImageInput";

export default function AdminJournalPage() {
  const [articles, setArticles] = useState<JournalArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingArticle, setEditingArticle] = useState<JournalArticle | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/admin/journal")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setArticles(data.data);
        }
      })
      .catch((err) => console.error("Error loading articles:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleCreateNew = () => {
    setEditingArticle({
      id: `art-${Date.now()}`,
      slug: "",
      title: "",
      subtitle: "",
      excerpt: "",
      category: "Craft & Printing",
      publishedAt: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: "5 min read",
      author: "Famous Letterpress Studio",
      image: "",
      metaTitle: "",
      metaDescription: "",
      sections: [
        {
          heading: "Introduction",
          paragraphs: ["Write your article introduction here..."],
        },
      ],
    });
    setIsCreating(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;

    if (!editingArticle.title || !editingArticle.slug) {
      setStatusMessage({ text: "Please enter a title and slug.", type: "error" });
      return;
    }

    setSaving(true);
    setStatusMessage(null);

    const method = isCreating ? "POST" : "PUT";
    try {
      const res = await fetch("/api/admin/journal", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingArticle),
      });
      const data = await res.json();
      if (data.success) {
        setArticles(data.data);
        setEditingArticle(null);
        setIsCreating(false);
        setStatusMessage({ text: "Article saved successfully.", type: "success" });
      } else {
        setStatusMessage({ text: data.message || "Failed to save article.", type: "error" });
      }
    } catch (err) {
      setStatusMessage({ text: "Network error while saving.", type: "error" });
    } finally {
      setSaving(false);
      setTimeout(() => setStatusMessage(null), 4000);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const res = await fetch(`/api/admin/journal?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setArticles(data.data);
        if (editingArticle?.id === id) {
          setEditingArticle(null);
          setIsCreating(false);
        }
        setStatusMessage({ text: "Article deleted successfully.", type: "success" });
      }
    } catch (err) {
      setStatusMessage({ text: "Failed to delete article.", type: "error" });
    }
  };

  if (loading) {
    return <div className="p-8 text-xs font-mono text-stone-500">Loading journal articles...</div>;
  }

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">Journal & Editorial CMS</h1>
          <p className="text-xs text-stone-500 mt-1">
            Publish educational guides on letterpress mechanics, pure cotton paper, and wedding etiquette.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 transition-colors"
        >
          + Write New Guide
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

      {/* Editor Form */}
      {editingArticle && (
        <div className="bg-white p-6 sm:p-8 rounded-sm border border-stone-300 shadow-lg space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h2 className="text-lg font-serif font-medium text-stone-900">
              {isCreating ? "Draft New Journal Article" : `Edit: ${editingArticle.title}`}
            </h2>
            <button
              onClick={() => {
                setEditingArticle(null);
                setIsCreating(false);
              }}
              className="text-stone-400 hover:text-stone-800 text-sm"
            >
              ✕ Cancel
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">Article Title</label>
                <input
                  type="text"
                  required
                  value={editingArticle.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    setEditingArticle((prev) => (prev ? { ...prev, title, slug: isCreating ? slug : prev.slug } : null));
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900 font-serif text-base"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">URL Slug</label>
                <input
                  type="text"
                  required
                  value={editingArticle.slug}
                  onChange={(e) => setEditingArticle((prev) => (prev ? { ...prev, slug: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs font-mono text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Category</label>
                <select
                  value={editingArticle.category}
                  onChange={(e) =>
                    setEditingArticle((prev) =>
                      prev ? { ...prev, category: e.target.value as JournalArticle["category"] } : null
                    )
                  }
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                >
                  <option value="Craft & Printing">Craft & Printing</option>
                  <option value="Wedding Stationery">Wedding Stationery</option>
                  <option value="Paper & Materials">Paper & Materials</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Read Time</label>
                <input
                  type="text"
                  value={editingArticle.readTime}
                  onChange={(e) => setEditingArticle((prev) => (prev ? { ...prev, readTime: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Published Date</label>
                <input
                  type="text"
                  value={editingArticle.publishedAt}
                  onChange={(e) => setEditingArticle((prev) => (prev ? { ...prev, publishedAt: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={editingArticle.subtitle}
                  onChange={(e) => setEditingArticle((prev) => (prev ? { ...prev, subtitle: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">Excerpt / Summary</label>
                <textarea
                  rows={2}
                  value={editingArticle.excerpt}
                  onChange={(e) => setEditingArticle((prev) => (prev ? { ...prev, excerpt: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>
            </div>

            {/* Cloudinary Header Image */}
            <div className="pt-2">
              <ImageInput
                label="Editorial Header Image URL (Cloudinary / CDN)"
                value={editingArticle.image || ""}
                onChange={(url) => setEditingArticle((prev) => (prev ? { ...prev, image: url } : null))}
                aspectRatio="landscape"
                helperText="Paste Cloudinary URL or image CDN link for the wide editorial banner."
              />
            </div>

            {/* Article Sections Preview / Text */}
            <div className="pt-4 border-t border-stone-200">
              <label className="block text-xs font-medium text-stone-700 mb-2">
                Primary Content Body ({editingArticle.sections.length} Sections)
              </label>
              <textarea
                rows={6}
                value={editingArticle.sections[0]?.paragraphs?.join("\n\n") || ""}
                onChange={(e) => {
                  const paragraphs = e.target.value.split("\n\n").filter(Boolean);
                  setEditingArticle((prev) => {
                    if (!prev) return null;
                    const sections = [...prev.sections];
                    sections[0] = { ...sections[0], paragraphs };
                    return { ...prev, sections };
                  });
                }}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm p-3 text-xs text-stone-900 font-mono leading-relaxed"
                placeholder="Separate paragraphs with double enter..."
              />
            </div>

            {/* SEO */}
            <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">SEO Title</label>
                <input
                  type="text"
                  value={editingArticle.metaTitle}
                  onChange={(e) => setEditingArticle((prev) => (prev ? { ...prev, metaTitle: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">SEO Description</label>
                <input
                  type="text"
                  value={editingArticle.metaDescription}
                  onChange={(e) => setEditingArticle((prev) => (prev ? { ...prev, metaDescription: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Article"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingArticle(null);
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

      {/* Articles List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-sm border border-stone-200 shadow-2xs overflow-hidden flex flex-col justify-between group hover:border-stone-400 transition-colors"
          >
            <div>
              <div className="aspect-[16/9] bg-stone-100 overflow-hidden relative border-b border-stone-200">
                {art.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400 font-mono text-xs">
                    No image uploaded
                  </div>
                )}
                <span className="absolute top-2.5 left-2.5 bg-stone-900/90 text-white px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase">
                  {art.category}
                </span>
                <span className="absolute bottom-2.5 right-2.5 bg-stone-900/80 text-white px-2 py-0.5 rounded-xs text-[10px] font-mono">
                  {art.readTime}
                </span>
              </div>

              <div className="p-5">
                <div className="text-[10px] text-stone-400 font-mono mb-1">{art.publishedAt}</div>
                <h3 className="font-serif text-lg text-stone-900 font-medium mb-2 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-light">
                  {art.excerpt}
                </p>
              </div>
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setEditingArticle(art);
                  setIsCreating(false);
                }}
                className="text-xs font-medium text-stone-900 hover:underline"
              >
                Edit Article &rarr;
              </button>
              <button
                type="button"
                onClick={() => handleDelete(art.id)}
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
