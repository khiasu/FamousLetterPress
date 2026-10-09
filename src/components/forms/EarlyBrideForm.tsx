"use client";

import { useState } from "react";
import Link from "next/link";
import { CustomSelect } from "@/components/ui/CustomSelect";

const stationeryOptions = [
  "Main Invitation Suite (Invite, RSVP, Details)",
  "Save the Date Cards",
  "Reception Menus & Place Cards",
  "Ceremony Programs / Order of Service",
  "Custom Wax Seals & Envelope Liners",
  "Thank You Cards",
];

const designStatusOptions = [
  "We have completed print-ready artwork from our designer",
  "We have a concept / moodboard and need Famous Letterpress to design",
  "We would like to select from Famous Letterpress bespoke studio layouts",
  "We are in early planning and exploring possibilities",
];

export function EarlyBrideForm() {
  const [formData, setFormData] = useState({
    coupleNames: "",
    email: "",
    phone: "",
    weddingDate: "",
    weddingLocation: "",
    estimatedGuestCount: "",
    stationeryNeeds: [] as string[],
    designStatus: "",
    estimatedBudget: "",
    aestheticVision: "",
    preferredContact: "WhatsApp" as "WhatsApp" | "Email" | "Phone",
    hpField: "", // Anti-spam honeypot
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successData, setSuccessData] = useState<{ leadRef: string } | null>(null);

  const toggleStationeryNeed = (item: string) => {
    setFormData((prev) => {
      const exists = prev.stationeryNeeds.includes(item);
      return {
        ...prev,
        stationeryNeeds: exists
          ? prev.stationeryNeeds.filter((n) => n !== item)
          : [...prev.stationeryNeeds, item],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/forms/early-bride", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please check your fields.");
      }

      setSuccessData({ leadRef: data.leadRef });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred. Please contact us via WhatsApp.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white border border-[#E5E5E5] p-8 md:p-12 w-full text-center shadow-[0_12px_32px_-16px_rgba(0,0,0,0.08)]">
        <div className="w-12 h-12 bg-black text-white rounded-none flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="k mb-2">Consultation Received</p>
        <h2 className="text-2xl md:text-3xl text-black mb-3 font-serif">
          Congratulations on your celebration
        </h2>
        <p className="text-sm text-[#555] max-w-lg mx-auto mb-8 leading-relaxed font-light">
          We have received your Early Bride consultation details (Reference:{" "}
          <strong className="text-black font-mono">{successData.leadRef}</strong>).
          Our studio founder will review your aesthetic requirements and reach out via your preferred method{" "}
          <strong className="text-black font-medium">({formData.preferredContact})</strong> within 24 business hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/weddings/wedding-sample-kit"
            className="btn"
          >
            Order Wedding Sample Kit
          </Link>
          <Link
            href="/"
            className="btn-out btn"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E5E5E5] p-8 md:p-12 lg:p-14 w-full shadow-[0_12px_32px_-16px_rgba(0,0,0,0.08)]">
      {/* Honeypot hidden input */}
      <input
        type="text"
        name="hpField"
        value={formData.hpField}
        onChange={(e) => setFormData({ ...formData, hpField: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-[#E5E5E5] pb-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-black">Early Bride Consultation</h2>
        <p className="text-xs md:text-sm text-[#555] mt-2 font-light leading-relaxed">
          Please share the details of your wedding celebration so our studio can guide you on paper stocks, impression techniques, and tailored production timelines.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-black text-white text-xs font-mono">
          {errorMsg}
        </div>
      )}

      <div className="space-y-8">
        {/* Section 1: Couple & Celebration */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black mb-3 font-sans">01. The Celebration</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Couple Names *
              </label>
              <input
                type="text"
                required
                value={formData.coupleNames}
                onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                placeholder="e.g. Rongsen Jamir & Arenla Ao"
                className="w-full bg-[#FAF8F5] border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Wedding Date / Month *
              </label>
              <input
                type="text"
                required
                value={formData.weddingDate}
                onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                placeholder="e.g. November 2026 or 18/11/2026"
                className="w-full bg-[#FAF8F5] border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Wedding Location / Venue City
              </label>
              <input
                type="text"
                value={formData.weddingLocation}
                onChange={(e) => setFormData({ ...formData, weddingLocation: e.target.value })}
                placeholder="e.g. Dimapur / Kohima / Destination"
                className="w-full bg-[#FAF8F5] border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Stationery Scope */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black mb-2 font-sans">02. Anticipated Pieces</p>
          <p className="text-xs text-[#666] mb-4 font-sans">Select all that you may require:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {stationeryOptions.map((opt) => {
              const checked = formData.stationeryNeeds.includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleStationeryNeed(opt)}
                  className={`text-left p-3 text-xs border transition-all cursor-pointer ${
                    checked
                      ? "border-black bg-white text-black font-medium shadow-xs"
                      : "border-[#E5E5E5] bg-[#FAF8F5] text-[#555] hover:border-black/30"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-3.5 h-3.5 flex items-center justify-center border text-[9px] shrink-0 ${
                        checked ? "bg-black border-black text-white" : "border-[#E5E5E5] bg-white"
                      }`}
                    >
                      {checked && "✓"}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Design Status & Notes */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black mb-3 font-sans">03. Design &amp; Aesthetic Direction</p>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Design Status
              </label>
              <CustomSelect
                name="designStatus"
                value={formData.designStatus}
                onChange={(val) => setFormData((prev) => ({ ...prev, designStatus: val }))}
                options={designStatusOptions}
                placeholder="Please select design status..."
                bgMode="warm"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Aesthetic Vision / Notes (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.aestheticVision}
                onChange={(e) => setFormData({ ...formData, aestheticVision: e.target.value })}
                placeholder="Tell us about your colors, textures, preferred vibes (e.g. botanical, minimalist editorial, classic crest, deckled edges)..."
                className="w-full bg-[#FAF8F5] border border-[#E5E5E5] px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Contact Details */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black mb-3 font-sans">04. Your Contact Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full bg-[#FAF8F5] border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-[#FAF8F5] border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black focus:bg-white transition-colors"
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Preferred Contact Method
              </label>
              <div className="flex gap-6 mt-2.5">
                {(["WhatsApp", "Email", "Phone"] as const).map((method) => (
                  <label key={method} className="flex items-center gap-2 text-xs text-black cursor-pointer font-sans">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method}
                      checked={formData.preferredContact === method}
                      onChange={() => setFormData({ ...formData, preferredContact: method })}
                      className="accent-black"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="btn w-full sm:w-auto disabled:opacity-50"
        >
          {isLoading ? "SUBMITTING CONSULTATION..." : "SUBMIT EARLY BRIDE CONSULTATION"}
        </button>
        <p className="text-[11px] text-[#888] font-sans">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </form>
  );
}
