"use client";

import { useState } from "react";
import Link from "next/link";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

const partnerCategoryOptions = [
  "Wedding Planner & Event Designer",
  "Graphic Designer / Typographer / Calligrapher",
  "Branding & Creative Agency",
  "Luxury Stationery Atelier / Print Broker",
  "Corporate Event Producer / Luxury Gifting",
  "Interior Designer / Architect",
  "Other Creative Professional",
];

const volumeOptions = [
  "Immediate High-Profile Project in Hand",
  "1 – 2 Bespoke Commissions / Year",
  "3 – 5 Projects / Year",
  "6 – 12 Projects / Year",
  "12+ Regular Monthly Commissions",
];

const artworkOptions = [
  "We supply print-ready vector artwork (.AI / .EPS / .PDF)",
  "We provide layouts; need pre-press file auditing & dieline support",
  "We collaborate with Famous Letterpress for complete design & production",
];

const serviceOptions = [
  "Letterpress Wedding Suites",
  "European Foil Stamping",
  "Ultra-Thick Business Cards (600–900gsm)",
  "Blind Debossing & Relief",
  "Edge Gilding & Beveled Edges",
  "Custom Wax Seals & Liners",
  "Trade Swatch Archive Kit",
  "White-Label Client Fulfillment",
];

export function ChannelPartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    roleTitle: "",
    companyName: "",
    email: "",
    phone: "",
    cityCountry: "",
    websiteOrPortfolio: "",
    partnerCategory: "Wedding Planner & Event Designer",
    estimatedAnnualVolume: "Immediate High-Profile Project in Hand",
    artworkReadiness: "We supply print-ready vector artwork (.AI / .EPS / .PDF)",
    servicesNeeded: ["Letterpress Wedding Suites", "European Foil Stamping"] as string[],
    requestSampleKit: true,
    message: "",
    preferredContact: "WhatsApp" as "WhatsApp" | "Email" | "Phone",
    hpField: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== service)
          : [...prev.servicesNeeded, service],
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/forms/channel-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission error. Please verify the form fields.");
      }

      setSubmittedRef(data.leadRef);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to submit trade application. Please connect directly via WhatsApp.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (submittedRef) {
    return (
      <div className="bg-white border border-[#E5E5E5] p-8 md:p-14 w-full text-center shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)]">
        <div className="w-14 h-14 bg-black text-white flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <p className="k mb-2 text-[#7b7566]">Application Received</p>
        <h2 className="d text-3xl md:text-4xl text-black mb-3 font-serif">
          Welcome to our <i>Trade Network</i>
        </h2>

        <p className="text-sm md:text-base text-[#555] max-w-xl mx-auto mb-6 font-light leading-relaxed">
          Thank you, <strong className="text-black font-normal">{formData.fullName}</strong>. Your trade application for{" "}
          <strong className="text-black font-normal">{formData.companyName}</strong> has been logged under reference{" "}
          <span className="font-mono text-black font-semibold tracking-wider bg-[#F5F2EB] px-2 py-0.5 border border-[#E2DDD3]">
            {submittedRef}
          </span>.
        </p>

        <div className="bg-[#FAF8F5] border border-[#EBE6DC] p-6 max-w-xl mx-auto text-left mb-8 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#7b7566] font-medium font-sans">
            Next Steps in Onboarding:
          </p>
          <ul className="text-xs md:text-sm text-[#444] space-y-2 font-light">
            <li className="flex items-start gap-2">
              <span className="text-black font-medium">01.</span>
              <span>Our studio founder will review your portfolio within 24 business hours.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-medium">02.</span>
              <span>You will receive our confidential Trade Discount Rate Card and dieline guidelines via email.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-black font-medium">03.</span>
              <span>
                {formData.requestSampleKit
                  ? "Your Trade Material Archive swatch kit will be prepared for dispatch from our Nagaland pressroom."
                  : "Direct access to our pre-press team for vector file auditing."}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/918416099340?text=Hello%20Famous%20Letterpress%2C%20I%20just%20submitted%20a%20Trade%20Partner%20application%20with%20reference%20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>CONNECT WITH PRE-PRESS ON WHATSAPP</span>
          </a>
          <Link href="/our-work" className="btn-out btn">
            EXPLORE SELECTED WORK
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      id="partner-application-form"
      onSubmit={handleSubmit}
      className="bg-white border border-[#E5E5E5] p-6 sm:p-10 md:p-14 w-full shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)]"
    >
      {/* Honeypot for spam bots */}
      <input
        type="text"
        name="hpField"
        value={formData.hpField}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Form Header */}
      <div className="border-b border-[#E5E5E5] pb-6 mb-8">
        <p className="k mb-2 text-[#7b7566]">Artisanal Trade Network</p>
        <h2 className="d text-2xl sm:text-3xl md:text-4xl text-black font-serif">
          Trade Partner <i>Application</i>
        </h2>
        <p className="text-xs sm:text-sm text-[#555] mt-2 font-light leading-relaxed max-w-2xl">
          Register your studio, agency, or planning practice. Approved trade partners receive wholesale rates,
          confidential white-label client packaging, priority press queuing, and pre-press vector plate guidance.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-8 p-4 bg-black text-white text-xs sm:text-sm font-sans flex items-center justify-between">
          <span>{errorMsg}</span>
          <button
            type="button"
            onClick={() => setErrorMsg("")}
            className="text-[#999] hover:text-white ml-4 font-mono text-xs uppercase"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="space-y-8">
        {/* ── Section 1: Contact & Studio Info ── */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#7b7566] font-medium font-sans mb-4 pb-2 border-b border-[#F0F0F0]">
            01. Contact & Studio Identity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Maya Chen"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Professional Role / Title
              </label>
              <input
                type="text"
                name="roleTitle"
                value={formData.roleTitle}
                onChange={handleChange}
                placeholder="e.g. Creative Director, Lead Planner, Founder"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Studio / Agency / Business Name *
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Atelier Vellore Weddings"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Work Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="studio@ateliervellore.com"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Studio Location (City, Country)
              </label>
              <input
                type="text"
                name="cityCountry"
                value={formData.cityCountry}
                onChange={handleChange}
                placeholder="e.g. Mumbai, India / London, UK"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
        </div>

        {/* ── Section 2: Trade Profile & Discipline ── */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#7b7566] font-medium font-sans mb-4 pb-2 border-b border-[#F0F0F0]">
            02. Trade Profile & Discipline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Website or Instagram Portfolio *
              </label>
              <input
                type="text"
                name="websiteOrPortfolio"
                required
                value={formData.websiteOrPortfolio}
                onChange={handleChange}
                placeholder="e.g. instagram.com/ateliervellore or www.ateliervellore.com"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
              <span className="block text-[10px] text-[#777] mt-1 font-sans">
                Required for trade verification and credential vetting.
              </span>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Creative Trade Category *
              </label>
              <CustomSelect
                name="partnerCategory"
                value={formData.partnerCategory}
                onChange={(val) => setFormData((prev) => ({ ...prev, partnerCategory: val }))}
                options={partnerCategoryOptions}
                bgMode="white"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Expected Commission Frequency
              </label>
              <CustomSelect
                name="estimatedAnnualVolume"
                value={formData.estimatedAnnualVolume}
                onChange={(val) => setFormData((prev) => ({ ...prev, estimatedAnnualVolume: val }))}
                options={volumeOptions}
                bgMode="white"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Artwork & Pre-Press Status
              </label>
              <CustomSelect
                name="artworkReadiness"
                value={formData.artworkReadiness}
                onChange={(val) => setFormData((prev) => ({ ...prev, artworkReadiness: val }))}
                options={artworkOptions}
                bgMode="white"
              />
            </div>
          </div>
        </div>

        {/* ── Section 3: Services & Capabilities of Interest ── */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#7b7566] font-medium font-sans mb-3 pb-2 border-b border-[#F0F0F0]">
            03. Print Capabilities of Interest
          </h3>
          <p className="text-xs text-[#666] mb-4 font-light">
            Select the specialized artisanal processes you plan to commission for your clientele:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {serviceOptions.map((service) => {
              const isSelected = formData.servicesNeeded.includes(service);
              return (
                <button
                  type="button"
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`text-left p-3 border text-xs transition-all duration-200 cursor-pointer select-none flex items-center justify-between ${
                    isSelected
                      ? "bg-black text-white border-black font-medium"
                      : "bg-[#FAFAFA] text-[#444] border-[#E5E5E5] hover:border-black/50 hover:bg-white"
                  }`}
                >
                  <span className="leading-snug">{service}</span>
                  {isSelected && (
                    <span className="text-[10px] font-mono ml-2 shrink-0 opacity-80">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Section 4: Project Message & Preferences ── */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#7b7566] font-medium font-sans mb-4 pb-2 border-b border-[#F0F0F0]">
            04. Studio Needs & Communication
          </h3>

          <div className="space-y-5">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1.5 font-sans">
                Tell Us About Your Studio / Upcoming Project *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Give us a brief overview of your design aesthetic, specific timelines, custom paper weight preferences (e.g. 600gsm cotton), or an immediate client brief you need letterpressed..."
                className="w-full bg-white border border-[#E5E5E5] p-3 text-sm text-black focus:outline-none focus:border-black transition-colors font-sans"
              />
            </div>

            {/* Swatch Kit Request Checkbox */}
            <div className="p-4 bg-[#FAF8F5] border border-[#EBE6DC] flex items-start gap-3">
              <input
                type="checkbox"
                id="requestSampleKit"
                name="requestSampleKit"
                checked={formData.requestSampleKit}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-black rounded-none cursor-pointer"
              />
              <label htmlFor="requestSampleKit" className="text-xs sm:text-[13px] text-[#333] cursor-pointer leading-relaxed">
                <strong className="text-black font-medium">Request Trade Material Archive:</strong> Send our studio a
                comprehensive paper swatch box featuring 300–900gsm cotton papers, foil stamping charts, and letterpress depth specimens.
              </label>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-2 font-sans">
                Preferred Mode of Communication
              </label>
              <div className="flex flex-wrap gap-4 text-xs font-sans">
                {(["WhatsApp", "Email", "Phone"] as const).map((mode) => (
                  <label key={mode} className="inline-flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={mode}
                      checked={formData.preferredContact === mode}
                      onChange={() => setFormData((prev) => ({ ...prev, preferredContact: mode }))}
                      className="accent-black"
                    />
                    <span className="text-[#333]">{mode}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button Area */}
      <div className="mt-10 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-[#777] font-light font-sans max-w-sm">
          By submitting, you apply for confidential trade pricing. We do not share your client details or artwork files.
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className="btn w-full sm:w-auto relative cursor-pointer"
        >
          {isLoading ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>SUBMITTING APPLICATION...</span>
            </span>
          ) : (
            <span>SUBMIT TRADE APPLICATION</span>
          )}
        </button>
      </div>
    </form>
  );
}
