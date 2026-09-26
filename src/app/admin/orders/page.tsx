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
  const [savingId, setSavingId] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/admin/orders");
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }
    } catch (err) {
      console.error("Failed to load orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateFulfillment = async (id: string, status: OrderItem["fulfillmentStatus"]) => {
    setSavingId(id);
    const updated = orders.map((o) => (o.id === id ? { ...o, fulfillmentStatus: status } : o));
    setOrders(updated);

    try {
      await fetch("/api/admin/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) {
      console.error("Failed to update order fulfillment:", err);
    } finally {
      setSavingId(null);
    }
  };

  const updateTracking = async (id: string, trackingNumber: string) => {
    const updated = orders.map((o) => (o.id === id ? { ...o, trackingNumber } : o));
    setOrders(updated);

    try {
      await fetch("/api/admin/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) {
      console.error("Failed to update tracking:", err);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-2xl font-serif text-stone-900 font-semibold">Sample Kit Orders</h1>
        <p className="text-xs text-stone-500 mt-1">
          Direct purchases processed via Razorpay for Wedding and Business Card sample kits.
        </p>
      </div>

      {loading ? (
        <div className="p-8 text-center text-xs text-stone-500 font-mono">Loading orders...</div>
      ) : (
        <div className="bg-white rounded-sm border border-stone-200 shadow-2xs overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase tracking-wider font-mono text-[10px]">
              <tr>
                <th className="p-4">Order No & Date</th>
                <th className="p-4">Customer & Phone</th>
                <th className="p-4">Product</th>
                <th className="p-4">Shipping Destination</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Fulfillment</th>
                <th className="p-4">Tracking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {orders.map((ord) => (
                <tr key={ord.id} className="hover:bg-stone-50/70">
                  <td className="p-4 align-top font-mono">
                    <div className="font-semibold text-stone-900">{ord.orderNumber}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{ord.createdAt}</div>
                  </td>

                  <td className="p-4 align-top">
                    <div className="font-semibold text-stone-900">{ord.customerName}</div>
                    <div className="text-stone-500 text-[11px]">{ord.customerEmail}</div>
                    <div className="text-stone-500 text-[11px]">{ord.customerPhone}</div>
                  </td>

                  <td className="p-4 align-top">
                    <span className="font-medium text-stone-900">{ord.kitName}</span>
                    <div className="text-stone-600 font-mono text-[11px]">₹{ord.amount} INR</div>
                  </td>

                  <td className="p-4 align-top max-w-xs text-stone-600 text-xs">
                    {ord.shippingAddress}
                  </td>

                  <td className="p-4 align-top">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs font-semibold bg-emerald-100 text-emerald-800">
                      {ord.paymentStatus}
                    </span>
                  </td>

                  <td className="p-4 align-top">
                    <select
                      value={ord.fulfillmentStatus}
                      disabled={savingId === ord.id}
                      onChange={(e) =>
                        updateFulfillment(ord.id, e.target.value as OrderItem["fulfillmentStatus"])
                      }
                      className="text-xs bg-stone-50 border border-stone-300 rounded-sm px-2 py-1 font-mono font-medium disabled:opacity-50"
                    >
                      <option value="AWAITING_PACKING">AWAITING_PACKING</option>
                      <option value="DISPATCHED">DISPATCHED</option>
                      <option value="DELIVERED">DELIVERED</option>
                    </select>
                  </td>

                  <td className="p-4 align-top font-mono text-xs text-stone-700">
                    <input
                      type="text"
                      placeholder="Add tracking ref"
                      defaultValue={ord.trackingNumber || ""}
                      onBlur={(e) => updateTracking(ord.id, e.target.value)}
                      className="bg-stone-50 border border-stone-300 rounded-xs px-2 py-1 text-xs w-36"
                    />
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-xs text-stone-400">
                    No sample kit orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
