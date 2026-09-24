"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ProjectFormProps {
  initialService?: string;
  initialType?: string;
}

export function ProjectForm({ initialService = "Wedding Stationery", initialType }: ProjectFormProps) {
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
      <div className="card-warm p-8 md:p-12 text-center bg-cream border-2 border-forest/30 max-w-xl mx-auto">
        <div className="w-12 h-12 bg-forest/10 text-forest rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="eyebrow text-forest">Enquiry Received</span>
        <h2 className="heading-lg text-charcoal mt-2 mb-3">Thank you for contacting us</h2>
        <p className="body-md text-warm-stone mb-6 font-light">
          Your project reference is <strong className="text-charcoal font-mono">{submittedRef}</strong>.
          We will review your specifications and contact you via{" "}
          <strong className="text-charcoal">{formData.preferredContact}</strong> within 24 business hours.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return to Home
          </Button>
          <Button href="/work" variant="outline" size="md">
            View More Work
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-warm p-8 md:p-12 bg-ivory max-w-3xl mx-auto">
      <input
        type="text"
        name="hpField"
        value={formData.hpField}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="border-b border-sand pb-6 mb-8">
        <h2 className="heading-lg text-charcoal">Project Details</h2>
        <p className="body-sm text-warm-stone mt-2 font-light">
          Tell us about what you would like to print. We review every brief individually to determine paper options, die requirements, and timing.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-terracotta/10 border border-terracotta/30 text-terracotta text-xs rounded-sm">
          {errorMsg}
        </div>
      )}

      <div className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">
              Your Name <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rongsen Jamir"
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">
              Email Address <span className="text-terracotta">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>
        </div>

        {/* Phone & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">Phone / WhatsApp</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">City / Location</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Dimapur, Mumbai, London"
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>
        </div>

        {/* Service & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">Service Needed</label>
            <select
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-xs text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            >
              <option value="Wedding Stationery">Wedding Stationery / Suites</option>
              <option value="Business Cards">Luxury Letterpress Business Cards</option>
              <option value="Personalised Stationery">Personalised / Monogram Stationery</option>
              <option value="Channel Partnership">Trade / Channel Partnership</option>
              <option value="Custom Project">Other Bespoke Print Project</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">Estimated Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 100 suites / 200 cards"
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>
        </div>

        {/* Timeline & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">Target Delivery Date / Month</label>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="e.g. November 2026"
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-charcoal mb-1">Estimated Budget (Optional)</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g. Flexible / approx range"
              className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-charcoal mb-1">
            Project Description / Message <span className="text-terracotta">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details on techniques (letterpress, foil, embossing), paper preferences, or design ideas..."
            className="w-full bg-cream border border-sand px-3.5 py-2.5 text-sm text-charcoal rounded-sm focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-xs font-medium text-charcoal mb-2">Preferred Contact Method</label>
          <div className="flex gap-6">
            {(["WhatsApp", "Email", "Phone"] as const).map((method) => (
              <label key={method} className="flex items-center gap-2 text-xs text-charcoal cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={formData.preferredContact === method}
                  onChange={handleChange}
                  className="text-terracotta focus:ring-terracotta"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-sand">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isLoading}
          className="w-full justify-center text-center"
        >
          {isLoading ? "Submitting Brief..." : "Submit Project Brief"}
        </Button>
        <p className="text-[11px] text-warm-stone text-center mt-3 font-light">
          We reply promptly within 24 hours. Your details are strictly confidential.
        </p>
      </div>
    </form>
  );
}
