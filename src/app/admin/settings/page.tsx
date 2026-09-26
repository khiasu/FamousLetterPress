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
      .then((data) => {
        if (data && data.studioName) {
          setSettings(data);
        }
      })
      .catch((err) => console.error("Error loading settings:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
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
        setTimeout(() => setSaved(false), 3500);
      }
    } catch (err) {
      console.error("Failed to save settings:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-xs text-stone-500 font-mono">
        Loading studio settings...
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-2xl font-serif text-stone-900 font-semibold">Studio & Site Settings</h1>
        <p className="text-xs text-stone-500 mt-1">
          Maintain consistent contact information, Cloudinary studio branding, and site-wide notifications.
        </p>
      </div>

      {saved && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-sm">
          Studio settings updated and saved successfully.
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white p-8 rounded-sm border border-stone-200 shadow-2xs space-y-8">
        {/* Identity & Branding */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3">
            01. Studio Identity & Logo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Studio Name</label>
              <input
                type="text"
                name="studioName"
                value={settings.studioName}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={settings.location}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1">Tagline</label>
              <input
                type="text"
                name="tagline"
                value={settings.tagline}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div className="sm:col-span-2">
              <ImageInput
                label="Studio Logo / Emblem URL (Cloudinary or Web)"
                value={settings.logoUrl || ""}
                onChange={(url) => setSettings((prev) => ({ ...prev, logoUrl: url }))}
                helperText="Cloudinary or web URL for the studio crest / emblem shown in the header."
              />
            </div>
          </div>
        </div>

        {/* Contact & Hours */}
        <div className="pt-4 border-t border-stone-200">
          <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3">
            02. Contact & Operating Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                value={settings.whatsapp}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div className="sm:col-span-3">
              <label className="block text-xs font-medium text-stone-700 mb-1">Business Hours</label>
              <input
                type="text"
                name="hours"
                value={settings.hours}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Instagram URL</label>
              <input
                type="url"
                name="instagram"
                value={settings.instagram}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1">Facebook URL</label>
              <input
                type="url"
                name="facebook"
                value={settings.facebook}
                onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
              />
            </div>
          </div>
        </div>

        {/* Announcement Bar */}
        <div className="pt-4 border-t border-stone-200">
          <h2 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold mb-3">
            03. Site-Wide Announcement Bar
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="announcementActive"
                checked={settings.announcementActive}
                onChange={handleToggle}
                className="rounded-xs text-stone-900"
              />
              <span className="text-xs font-medium text-stone-800">
                Display top announcement banner on public website
              </span>
            </label>
            <input
              type="text"
              name="announcementBarText"
              value={settings.announcementBarText}
              onChange={handleChange}
              placeholder="e.g. New Season Wedding Sample Kits Now Dispatching Across India"
              className="w-full bg-stone-50 border border-stone-300 rounded-sm px-3 py-2 text-xs text-stone-900"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 bg-stone-900 text-white text-xs font-medium rounded-sm hover:bg-stone-800 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving Changes..." : "Save Site Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
