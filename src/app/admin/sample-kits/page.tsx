"use client";

import { useState } from "react";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { SampleKitItem } from "@/types";

export default function AdminSampleKitsPage() {
  const [kits, setKits] = useState<SampleKitItem[]>(Object.values(sampleKitsData));
  const [savedAlert, setSavedAlert] = useState(false);

  const handlePriceChange = (slug: string, newPrice: number) => {
    setKits((prev) =>
      prev.map((k) => (k.slug === slug ? { ...k, price: newPrice } : k))
    );
  };

  const handleSave = () => {
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-serif text-stone-900 font-semibold">Sample Kits Management</h1>
          <p className="text-xs text-stone-500 mt-1">
            Configure direct-payment sample kits, prices, and package inclusions.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 transition-colors"
        >
          Save Configuration
        </button>
      </div>

      {savedAlert && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-sm">
          Sample kit configurations updated successfully.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {kits.map((kit) => (
          <div key={kit.id} className="bg-white p-6 rounded-sm border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                  {kit.slug}
                </span>
                <h2 className="text-lg font-serif text-stone-900 font-medium">{kit.name}</h2>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-emerald-100 text-emerald-800 font-semibold">
                ACTIVE
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Price (INR)
              </label>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-stone-500">₹</span>
                <input
                  type="number"
                  value={kit.price}
                  onChange={(e) => handlePriceChange(kit.slug, Number(e.target.value))}
                  className="w-32 bg-stone-50 border border-stone-300 rounded-sm px-3 py-1.5 text-sm font-mono font-semibold text-stone-900"
                />
                <span className="text-xs text-stone-500 font-mono">INR</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Tagline
              </label>
              <textarea
                rows={2}
                defaultValue={kit.tagline}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm p-2 text-xs text-stone-800"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Key Inclusions ({kit.includedItems.length} items)
              </label>
              <ul className="text-xs text-stone-600 space-y-1.5 bg-stone-50 p-3 rounded-sm border border-stone-200">
                {kit.includedItems.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                    <span>{item}</span>
                  </li>
                ))}
                {kit.includedItems.length > 4 && (
                  <li className="text-[11px] text-stone-400 italic pt-1">
                    + {kit.includedItems.length - 4} additional items in box
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
