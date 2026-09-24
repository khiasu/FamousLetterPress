"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

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
      <div className="card-warm p-8 md:p-12 text-center bg-cream border-2 border-forest/30 max-w-2xl mx-auto">
        <div className="w-12 h-12 bg-forest/10 text-forest rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="eyebrow text-forest">Consultation Received</span>
        <h2 className="heading-lg text-charcoal mt-2 mb-3">Congratulations on your upcoming celebration!</h2>
        <p className="body-md text-warm-stone max-w-lg mx-auto mb-6">
          We have received your Early Bride consultation details (Reference:{" "}
          <strong className="text-charcoal font-mono">{successData.leadRef}</strong>).
          Our studio founder will review your aesthetic requirements and reach out via your preferred method{" "}
          <strong className="text-charcoal">({formData.preferredContact})</strong> within 24 business hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/weddings/wedding-sample-kit" variant="primary" size="md">
            Order Wedding Sample Kit in Meanwhile
          </Button>
          <Button href="/" variant="outline" size="md">
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-warm p-8 md:p-12 bg-ivory max-w-3xl mx-auto">
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

      <div className="border-b border-sand pb-6 mb-8">
        <h2 className="heading-lg text-charcoal">Early Bride Consultation</h2>
        <p className="body-sm text-warm-stone mt-2 font-light">
          Please share the details of your wedding celebration so our studio can guide you on paper stock, impression techniques, and tailored production timelines.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-terracotta/10 border border-terracotta/30 text-terracotta text-xs rounded-sm">
          {errorMsg}
        </div>
      )}

      <div className="space-y-8">
        {/* Section 1: Couple & Celebration */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold mb-4">
            01. The Celebration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-charcoal mb-1">
                Couple Names <span className="text-terracotta">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.coupleNames}
                onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
                placeholder="e.g. Rongsen Jamir & Arenla Ao"
                className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">
                Wedding Date / Month <span className="text-terracotta">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.weddingDate}
                onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                placeholder="e.g. November 2026 or 18/11/2026"
                className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">
                Wedding Location / Venue City
              </label>
              <input
                type="text"
                value={formData.weddingLocation}
                onChange={(e) => setFormData({ ...formData, weddingLocation: e.target.value })}
                placeholder="e.g. Dimapur / Kohima / Destination"
                className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Stationery Scope */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold mb-3">
            02. What Pieces Do You Anticipate?
          </h3>
          <p className="text-xs text-warm-stone mb-4">Select all that you may require:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {stationeryOptions.map((opt) => {
              const checked = formData.stationeryNeeds.includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleStationeryNeed(opt)}
                  className={`text-left p-3 text-xs rounded-sm border transition-all ${
                    checked
                      ? "border-terracotta bg-cream text-charcoal font-medium shadow-xs"
                      : "border-sand bg-cream/50 text-warm-stone hover:border-terracotta/40"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-xs flex items-center justify-center border text-[9px] ${
                        checked ? "bg-terracotta border-terracotta text-white" : "border-sand bg-white"
                      }`}
                    >
                      {checked && "✓"}
                    </span>
                    <span>{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Design Status & Notes */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold mb-4">
            03. Design & Aesthetic Direction
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">Design Status</label>
              <select
                value={formData.designStatus}
                onChange={(e) => setFormData({ ...formData, designStatus: e.target.value })}
                className="w-full bg-cream border border-sand px-3.5 py-2.5 text-xs text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
              >
                <option value="">Please select design status...</option>
                {designStatusOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">
                Aesthetic Vision / Notes (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.aestheticVision}
                onChange={(e) => setFormData({ ...formData, aestheticVision: e.target.value })}
                placeholder="Tell us about your colors, textures, preferred vibes (e.g. botanical, minimalist editorial, classic crest, deckled edges)..."
                className="w-full bg-cream border border-sand px-3.5 py-2.5 text-xs text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Contact Details */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-mono text-terracotta font-semibold mb-4">
            04. Your Contact Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">
                Email Address <span className="text-terracotta">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1">
                Phone / WhatsApp Number <span className="text-terracotta">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-charcoal mb-1">Preferred Contact Method</label>
              <div className="flex gap-4 mt-1">
                {(["WhatsApp", "Email", "Phone"] as const).map((method) => (
                  <label key={method} className="flex items-center gap-2 text-xs text-charcoal cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method}
                      checked={formData.preferredContact === method}
                      onChange={() => setFormData({ ...formData, preferredContact: method })}
                      className="text-terracotta focus:ring-terracotta"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-sand">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isLoading}
          className="w-full justify-center text-center"
        >
          {isLoading ? "Submitting Consultation..." : "Submit Early Bride Consultation"}
        </Button>
        <p className="text-[11px] text-warm-stone text-center mt-3">
          We respect your privacy. No spam, ever. We strictly use your details to review and discuss your stationery.
        </p>
      </div>
    </form>
  );
}
