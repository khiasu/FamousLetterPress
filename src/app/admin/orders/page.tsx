"use client";

import { useState, useEffect } from "react";

interface OrderItem {
  id: string;
  orderNumber: string;
  kitName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  amount: number;
  paymentStatus: "PAID" | "PENDING";
  fulfillmentStatus: "AWAITING_PACKING" | "DISPATCHED" | "DELIVERED";
  trackingNumber?: string;
  createdAt: string;
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => { if (Array.isArray(data)) setOrders(data); })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const save = async (updated: OrderItem[]) => {
    try {
      await fetch("/api/admin/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) { console.error(err); }
  };

  const updateFulfillment = (id: string, status: OrderItem["fulfillmentStatus"]) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, fulfillmentStatus: status } : o));
    setOrders(updated);
    save(updated);
  };

  const updateTracking = (id: string, trackingNumber: string) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, trackingNumber } : o));
    setOrders(updated);
    save(updated);
  };

  const fulfillmentColors: Record<string, string> = {
    AWAITING_PACKING: "bg-amber-50 text-amber-700",
    DISPATCHED: "bg-blue-50 text-blue-700",
    DELIVERED: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-medium text-neutral-900">Sample Kit Orders</h1>
        <p className="text-sm text-neutral-500 mt-1">Orders processed via Razorpay.</p>
      </div>

      {loading ? (
        <p className="py-12 text-sm text-neutral-400 text-center">Loading...</p>
      ) : (
        <div className="space-y-3">
          {orders.map((ord) => (
            <div key={ord.id} className="bg-white border border-neutral-200 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-neutral-900">{ord.customerName}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{ord.orderNumber} · {ord.createdAt}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-medium text-neutral-900">₹{ord.amount}</p>
                  <span className={`text-[10px] px-2 py-0.5 font-medium ${ord.paymentStatus === "PAID" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                    {ord.paymentStatus}
                  </span>
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-neutral-600">{ord.kitName}</span>
                  <span className={`text-[10px] px-2 py-0.5 font-medium ${fulfillmentColors[ord.fulfillmentStatus] || ""}`}>
                    {ord.fulfillmentStatus?.replace(/_/g, " ")}
                  </span>
                </div>
                <p className="text-xs text-neutral-400">{ord.shippingAddress}</p>
                <p className="text-xs text-neutral-400">{ord.customerEmail} · {ord.customerPhone}</p>
              </div>

              <div className="flex items-center gap-3 mt-3 flex-wrap">
                <select
                  value={ord.fulfillmentStatus}
                  onChange={(e) => updateFulfillment(ord.id, e.target.value as OrderItem["fulfillmentStatus"])}
                  className="text-xs bg-neutral-50 border border-neutral-200 px-2 py-1.5 text-neutral-700"
                >
                  <option value="AWAITING_PACKING">Awaiting Packing</option>
                  <option value="DISPATCHED">Dispatched</option>
                  <option value="DELIVERED">Delivered</option>
                </select>
                <input
                  type="text"
                  placeholder="Tracking number"
                  defaultValue={ord.trackingNumber || ""}
                  onBlur={(e) => updateTracking(ord.id, e.target.value)}
                  className="text-xs bg-neutral-50 border border-neutral-200 px-2 py-1.5 w-40"
                />
              </div>
            </div>
          ))}
          {orders.length === 0 && (
            <p className="py-12 text-sm text-neutral-400 text-center">No orders yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
