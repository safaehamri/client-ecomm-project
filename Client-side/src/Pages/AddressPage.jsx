import React from "react";

export default function AddressPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Address</h2>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Billing Address</h3>
          <p>Sofia Havertz</p>
          <p>(+1) 234 567 890</p>
          <p>345 Long Island, New York, United States</p>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Shipping Address</h3>
          <p>Sofia Havertz</p>
          <p>(+1) 234 567 890</p>
          <p>345 Long Island, New York, United States</p>
        </div>
      </div>
    </div>
  );
}
