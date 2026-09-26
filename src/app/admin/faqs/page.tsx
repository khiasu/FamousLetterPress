"use client";

import React, { useState, useEffect } from "react";
import { FAQSectionItem } from "@/lib/data/faqs";

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<FAQSectionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQSectionItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetch("/api/admin/faqs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setFaqs(data.data);
        }
      })
      .catch((err) => console.error("Error loading FAQs:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleCreateNew = () => {
    setEditingFaq({
      id: `faq-${Date.now()}`,
      category: "General & The Studio",
      question: "",
      answer: "",
      order: faqs.length + 1,
    });
    setIsCreating(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;

    if (!editingFaq.question || !editingFaq.answer) {
      setStatusMessage({ text: "Please enter both question and answer.", type: "error" });
      return;
    }

    setSaving(true);
    setStatusMessage(null);

    const method = isCreating ? "POST" : "PUT";
    try {
      const res = await fetch("/api/admin/faqs", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingFaq),
      });
      const data = await res.json();
      if (data.success) {
        setFaqs(data.data);
        setEditingFaq(null);
        setIsCreating(false);
        setStatusMessage({ text: "FAQ saved successfully.", type: "success" });
      } else {
        setStatusMessage({ text: data.message || "Failed to save FAQ.", type: "error" });
      }
    } catch (err) {
      setStatusMessage({ text: "Network error while saving.", type: "error" });
    } finally {
      setSaving(false);
      setTimeout(() => setStatusMessage(null), 4000);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;

    try {
      const res = await fetch(`/api/admin/faqs?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setFaqs(data.data);
        if (editingFaq?.id === id) {
          setEditingFaq(null);
          setIsCreating(false);
        }
        setStatusMessage({ text: "FAQ deleted successfully.", type: "success" });
      }
    } catch (err) {
      setStatusMessage({ text: "Failed to delete FAQ.", type: "error" });
    }
  };

  if (loading) {
    return <div className="p-8 text-xs font-mono text-stone-500">Loading FAQs...</div>;
  }

  // Group by category
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">FAQs Management</h1>
          <p className="text-xs text-stone-500 mt-1">
            Maintain answers to common customer questions across weddings, turnaround times, and shipping.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 transition-colors"
        >
          + Add New Question
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

      {/* Editor Modal */}
      {editingFaq && (
        <div className="bg-white p-6 rounded-sm border border-stone-300 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <h2 className="text-base font-serif font-medium text-stone-900">
              {isCreating ? "Add FAQ Question" : "Edit Question"}
            </h2>
            <button
              onClick={() => {
                setEditingFaq(null);
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
                <label className="block text-xs font-medium text-stone-700 mb-1">Category</label>
                <input
                  type="text"
                  required
                  value={editingFaq.category}
                  onChange={(e) => setEditingFaq((prev) => (prev ? { ...prev, category: e.target.value } : null))}
                  placeholder="e.g. Wedding Stationery, Business Cards"
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Sort Order</label>
                <input
                  type="number"
                  value={editingFaq.order}
                  onChange={(e) =>
                    setEditingFaq((prev) => (prev ? { ...prev, order: Number(e.target.value) } : null))
                  }
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">Question</label>
                <input
                  type="text"
                  required
                  value={editingFaq.question}
                  onChange={(e) => setEditingFaq((prev) => (prev ? { ...prev, question: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-stone-700 mb-1">Answer</label>
                <textarea
                  rows={4}
                  required
                  value={editingFaq.answer}
                  onChange={(e) => setEditingFaq((prev) => (prev ? { ...prev, answer: e.target.value } : null))}
                  className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900 leading-relaxed"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Question"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingFaq(null);
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

      {/* Grouped FAQs */}
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat} className="bg-white rounded-sm border border-stone-200 shadow-2xs overflow-hidden">
            <div className="p-4 bg-stone-50 border-b border-stone-200">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-600">
                {cat}
              </h2>
            </div>

            <div className="divide-y divide-stone-100">
              {faqs
                .filter((f) => f.category === cat)
                .map((faq) => (
                  <div key={faq.id} className="p-5 flex items-start justify-between gap-4 hover:bg-stone-50/60">
                    <div className="space-y-1 max-w-3xl">
                      <h3 className="font-serif text-base text-stone-900 font-medium">{faq.question}</h3>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingFaq(faq);
                          setIsCreating(false);
                        }}
                        className="text-xs font-medium text-stone-800 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(faq.id)}
                        className="text-[11px] text-rose-600 hover:text-rose-800 font-mono"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
