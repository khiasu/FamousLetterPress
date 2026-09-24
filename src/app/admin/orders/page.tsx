"use client";

import { useState } from "react";

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

const initialOrders: OrderItem[] = [
  {
    id: "ord-1",
    orderNumber: "FLP-2026-1044",
    kitName: "Wedding Sample Kit",
    customerName: "Temsu Jamir",
    customerEmail: "temsu@example.com",
    customerPhone: "+91 98628 11223",
    shippingAddress: "House 42, Circular Road, Dimapur, Nagaland - 797112",
    amount: 1500,
    paymentStatus: "PAID",
    fulfillmentStatus: "DISPATCHED",
    trackingNumber: "DTDC-NL-8492019",
    createdAt: "2026-09-24 10:14",
  },
  {
    id: "ord-2",
    orderNumber: "FLP-2026-1043",
    kitName: "Business Card Sample Kit",
    customerName: "Pooja Mehta",
    customerEmail: "pooja.mehta@studio.design",
    customerPhone: "+91 98201 44556",
    shippingAddress: "Flat 4B, Silver Arch, Bandra West, Mumbai, Maharashtra - 400050",
    amount: 1000,
    paymentStatus: "PAID",
    fulfillmentStatus: "AWAITING_PACKING",
    createdAt: "2026-09-23 18:22",
  },
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<OrderItem[]>(initialOrders);

  const updateFulfillment = (id: string, status: OrderItem["fulfillmentStatus"]) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, fulfillmentStatus: status } : o))
    );
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="border-b border-stone-200 pb-4">
        <h1 className="text-2xl font-serif text-stone-900 font-semibold">Sample Kit Orders</h1>
        <p className="text-xs text-stone-500 mt-1">
          Direct purchases processed via Razorpay for Wedding and Business Card sample kits.
        </p>
      </div>

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
                    onChange={(e) =>
                      updateFulfillment(ord.id, e.target.value as OrderItem["fulfillmentStatus"])
                    }
                    className="text-xs bg-stone-50 border border-stone-300 rounded-sm px-2 py-1 font-mono font-medium"
                  >
                    <option value="AWAITING_PACKING">AWAITING_PACKING</option>
                    <option value="DISPATCHED">DISPATCHED</option>
                    <option value="DELIVERED">DELIVERED</option>
                  </select>
                </td>

                <td className="p-4 align-top font-mono text-xs text-stone-700">
                  {ord.trackingNumber || (
                    <span className="text-stone-400 italic">Pending label</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
