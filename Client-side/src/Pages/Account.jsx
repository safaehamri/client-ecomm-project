import React from "react";

export default function Account() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Account Details</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium">First Name *</label>
          <input
            type="text"
            placeholder="First name"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Last Name *</label>
          <input
            type="text"
            placeholder="Last name"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Email *</label>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button className="bg-black text-white py-2 px-4 rounded">
          Save changes
        </button>
      </form>
    </div>
  );
}
