"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { SampleKitItem } from "@/types";

interface SampleKitCheckoutProps {
  kit: SampleKitItem;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

export function SampleKitCheckout({ kit }: SampleKitCheckoutProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState<{
    orderNumber: string;
    customerEmail: string;
    amount: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/orders/sample-kit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kitSlug: kit.slug,
          ...formData,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to create order. Please try again.");
      }

      // Check if Razorpay JS SDK is loaded and valid key is available
      if (typeof window !== "undefined" && window.Razorpay && data.razorpayKeyId && !data.razorpayKeyId.includes("placeholder")) {
        const options = {
          key: data.razorpayKeyId,
          amount: data.amount * 100,
          currency: data.currency,
          name: "Famous Letterpress",
          description: data.kitName,
          order_id: data.razorpayOrderId,
          prefill: {
            name: data.customer.name,
            email: data.customer.email,
            contact: data.customer.phone,
          },
          theme: {
            color: "#111111", // Deep ink
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          handler: async function (response: any) {
            const verifyRes = await fetch("/api/orders/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderNumber: data.orderNumber,
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              setOrderConfirmed({
                orderNumber: data.orderNumber,
                customerEmail: data.customer.email,
                amount: data.amount,
              });
            } else {
              setErrorMsg(verifyData.error || "Payment verification failed. Please contact us.");
            }
          },
          modal: {
            ondismiss: function () {
              setIsLoading(false);
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // Fallback for demo or offline staging
        setOrderConfirmed({
          orderNumber: data.orderNumber,
          customerEmail: data.customer.email,
          amount: data.amount,
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (orderConfirmed) {
    return (
      <div className="bg-white border border-[#E5E5E5] p-8 md:p-12 text-center">
        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="eyebrow mb-2">Order Confirmed</p>
        <h2 className="text-2xl md:text-3xl text-black mb-3 font-serif">Thank you for your order</h2>
        <p className="text-sm text-[#555555] max-w-md mx-auto mb-8 leading-relaxed">
          Your sample kit order <strong className="text-black font-mono">{orderConfirmed.orderNumber}</strong> has been logged.
          A confirmation receipt has been sent to <span className="text-black font-medium">{orderConfirmed.customerEmail}</span>.
        </p>

        <div className="bg-white p-6 max-w-sm mx-auto text-left border border-[#E5E5E5] mb-8 text-xs text-[#555555] space-y-2.5 font-sans">
          <div className="flex justify-between">
            <span>Item:</span>
            <strong className="text-black">{kit.name}</strong>
          </div>
          <div className="flex justify-between">
            <span>Total Paid:</span>
            <strong className="text-black font-serif text-sm">₹{orderConfirmed.amount}</strong>
          </div>
          <div className="flex justify-between">
            <span>Dispatch Timeline:</span>
            <span className="text-black">Within 24–48 Hours</span>
          </div>
          <div className="flex justify-between">
            <span>Courier:</span>
            <span className="text-black">Express Tracked Courier</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/our-work/wedding-invites"
            className="btn"
          >
            EXPLORE WEDDING SERVICES
          </Link>
          <Link
            href="/"
            className="btn-out btn"
          >
            RETURN TO HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <form onSubmit={handleCheckout} className="bg-white border border-[#E5E5E5] p-6 md:p-8">
        <div className="border-b border-[#E5E5E5] pb-6 mb-6">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-xl font-serif text-black">{kit.name}</h3>
            <div className="text-2xl font-serif text-black">
              ₹{kit.price} <span className="text-xs font-sans text-[#888888]">INR</span>
            </div>
          </div>
          <p className="text-xs text-[#555555] leading-relaxed">
            All-inclusive price. Includes express courier shipping with real-time tracking across India.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-black text-white text-xs">
            {errorMsg}
          </div>
        )}

        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-black mb-2 font-sans">
            1. Recipient Details
          </p>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Full Name *
            </label>
            <input
              type="text"
              name="customerName"
              required
              value={formData.customerName}
              onChange={handleChange}
              placeholder="e.g. Rongsen Jamir"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
                Email Address *
              </label>
              <input
                type="email"
                name="customerEmail"
                required
                value={formData.customerEmail}
                onChange={handleChange}
                placeholder="you@domain.com"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                name="customerPhone"
                required
                value={formData.customerPhone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-black pt-3 mb-2 font-sans">
            2. Shipping Address (India)
          </p>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Address Line 1 *
            </label>
            <input
              type="text"
              name="addressLine1"
              required
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Apartment, house number, street"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Landmark, building name, suite"
              className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
                City *
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="Dimapur / Delhi"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
                State *
              </label>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                placeholder="Nagaland"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-black font-medium mb-1 font-sans">
                Postal Code *
              </label>
              <input
                type="text"
                name="postalCode"
                required
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="PIN Code"
                className="w-full bg-white border border-[#E5E5E5] px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
          <button
            type="submit"
            disabled={isLoading}
            className="btn w-full disabled:opacity-50"
          >
            {isLoading ? "PREPARING ORDER..." : `PROCEED TO SECURE PAYMENT · ₹${kit.price}`}
          </button>

          <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-[#888888] tracking-wide font-sans">
            <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Secure checkout via Razorpay (UPI, Cards, Net Banking)</span>
          </div>
        </div>
      </form>
    </>
  );
}
