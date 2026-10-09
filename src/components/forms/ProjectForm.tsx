"use client";

import { useState } from "react";
import Link from "next/link";
import { CustomSelect } from "@/components/ui/CustomSelect";

interface ProjectFormProps {
  initialService?: string;
  initialType?: string;
}

export function ProjectForm({ initialService = "Wedding Invites", initialType }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    serviceNeeded: initialService,
    projectType: initialType || "New Commission",
    quantity: "",
    timeline: "",
    budget: "",
    message: "",
    preferredContact: "WhatsApp" as "WhatsApp" | "Email" | "Phone",
    hpField: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/forms/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission error. Please check your form.");
      }

      setSubmittedRef(data.leadRef);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to send your request. Please message us directly on WhatsApp.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (submittedRef) {
    return (
      <div className="bg-white border border-[#E5E5E5] p-8 md:p-12 w-full text-center">
        <div className="w-12 h-12 bg-black text-white rounded-none flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="eyebrow mb-2">Enquiry Received</p>
        <h2 className="text-2xl md:text-3xl text-black mb-3 font-serif">Thank you for contacting us</h2>
        <p className="text-sm text-[#555555] max-w-lg mx-auto mb-8 font-light leading-relaxed">
          Your project reference is <strong className="text-black font-mono">{submittedRef}</strong>.
          We will review your specifications and contact you via{" "}
          <strong className="text-black">({formData.preferredContact})</strong> within 24 business hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn"
          >
            Return to Home
          </Link>
          <Link
            href="/our-work/wedding-invites"
            className="btn-out btn"
          >
            View More Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#E5E5E5] p-8 md:p-12 lg:p-14 w-full">
      <input
        type="text"
        name="hpField"
        value={formData.hpField}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-[#E5E5E5] pb-6 mb-8">
        <p className="eyebrow mb-2">Project Brief</p>
        <h2 className="text-2xl md:text-3xl font-serif text-black">Project Details</h2>
        <p className="text-xs md:text-sm text-[#555555] mt-2 font-light leading-relaxed">
          Tell us about what you would like to print. We review every brief individually to determine paper options, die requirements, and timing.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-black text-white text-xs">
          {errorMsg}
        </div>
      )}

      <div className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rongsen Jamir"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        {/* Phone & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              City / Location
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Dimapur, Mumbai, London"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        {/* Service & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Service Needed
            </label>
            <CustomSelect
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={(val) => setFormData((prev) => ({ ...prev, serviceNeeded: val }))}
              options={[
                "Wedding Invites",
                "Business Cards",
                "Seal Stickers",
                "Envelopes",
                "Certificates",
                "Design & Illustration",
                "Custom Works",
              ]}
              bgMode="white"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Estimated Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 100 suites / 200 cards"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        {/* Timeline & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Target Delivery Date / Month
            </label>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="e.g. November 2026"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Estimated Budget (Optional)
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. Flexible / approx range"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
            Project Description / Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details on techniques (letterpress, foil, embossing), paper preferences, or design ideas..."
            className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-2 font-sans">
            Preferred Contact Method
          </label>
          <div className="flex gap-6">
            {(["WhatsApp", "Email", "Phone"] as const).map((method) => (
              <label key={method} className="flex items-center gap-2 text-xs text-black cursor-pointer font-sans">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={formData.preferredContact === method}
                  onChange={handleChange}
                  className="accent-ink-deep"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="btn w-full sm:w-auto disabled:opacity-50"
        >
          {isLoading ? "SUBMITTING BRIEF..." : "SUBMIT PROJECT BRIEF"}
        </button>
        <p className="text-[11px] text-[#888888] font-sans">
          We reply promptly within 24 hours. Your details are strictly confidential.
        </p>
      </div>
    </form>
  );
}
