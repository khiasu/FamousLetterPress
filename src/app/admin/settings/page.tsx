"use client";

import { useState, useEffect } from "react";
import { StudioSiteSettings, initialSiteSettings } from "@/lib/data/settings";
import { ImageInput } from "@/components/admin/ImageInput";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<StudioSiteSettings>(initialSiteSettings);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((res) => res.json())
      .then((data) => { if (data && data.studioName) setSettings(data); })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) { console.error(err); }
    finally { setSaving(false); }
  };

  if (loading) return <p className="py-12 text-sm text-neutral-400 text-center">Loading...</p>;

  const inputClass = "w-full bg-neutral-50 border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors";
  const labelClass = "block text-xs text-neutral-500 mb-1";

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-xl font-medium text-neutral-900">Settings</h1>
        <p className="text-sm text-neutral-500 mt-1">Studio identity, contact info, and site announcement.</p>
      </div>

      {saved && (
        <div className="px-4 py-3 bg-emerald-50 text-emerald-700 text-sm">
          Settings saved.
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white border border-neutral-200 divide-y divide-neutral-100">
        {/* Identity */}
        <div className="p-5 space-y-4">
          <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Identity</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Studio Name</label>
              <input type="text" name="studioName" value={settings.studioName} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Location</label>
              <input type="text" name="location" value={settings.location} onChange={handleChange} className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Tagline</label>
            <input type="text" name="tagline" value={settings.tagline} onChange={handleChange} className={inputClass} />
          </div>
          <ImageInput
            label="Logo URL"
            value={settings.logoUrl || ""}
            onChange={(url) => setSettings((prev) => ({ ...prev, logoUrl: url }))}
            helperText="Cloudinary or web URL for the studio logo."
          />
        </div>

        {/* Contact */}
        <div className="p-5 space-y-4">
          <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Contact</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" name="email" value={settings.email} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" name="phone" value={settings.phone} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>WhatsApp</label>
              <input type="tel" name="whatsapp" value={settings.whatsapp} onChange={handleChange} className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Business Hours</label>
            <input type="text" name="hours" value={settings.hours} onChange={handleChange} className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Instagram URL</label>
              <input type="url" name="instagram" value={settings.instagram} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Facebook URL</label>
              <input type="url" name="facebook" value={settings.facebook} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        {/* Announcement */}
        <div className="p-5 space-y-3">
          <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Announcement Bar</p>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={settings.announcementActive}
              onChange={(e) => setSettings((prev) => ({ ...prev, announcementActive: e.target.checked }))}
              className="accent-neutral-900"
            />
            <span className="text-sm text-neutral-700">Show announcement banner</span>
          </label>
          <input
            type="text"
            name="announcementBarText"
            value={settings.announcementBarText}
            onChange={handleChange}
            placeholder="Announcement text"
            className={inputClass}
          />
        </div>

        {/* Submit */}
        <div className="p-5">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
