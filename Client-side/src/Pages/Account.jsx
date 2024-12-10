import React from "react";

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-blue-gray-50 p-11 h-[30%] md:w-1/5 flex flex-col items-center md:items-start md:space-y-4">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src="/article1.jpeg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />

          <h2 className="mt-2 text-lg font-semibold">Sofia Havertz</h2>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-col w-full">
          <a
            href="#account"
            className="p-2 text-black text-xl underline hover:bg-gray-200 rounded"
          >
            Account
          </a>

          <a
            href="#address"
            className="p-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Address
          </a>
          <a
            href="#orders"
            className="p-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Orders
          </a>
          <a
            href="#wishlist"
            className="p-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Wishlist
          </a>
          <a
            href="#logout"
            className="p-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Log Out
          </a>
        </nav>

        {/* Mobile Dropdown */}
        <select className="md:hidden mt-4 p-4 border  border-gray-300 rounded">
          <option value="account">Account</option>
          <option value="address">Address</option>
          <option value="orders">Orders</option>
          <option value="wishlist">Wishlist</option>
          <option value="logout">Log Out</option>
        </select>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Account Details Section */}
        <section id="account">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="space-y-4">
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
              <label className="text-sm font-medium">Display Name *</label>
              <input
                type="text"
                placeholder="Display name"
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
          </div>
        </section>

        {/* Password Section */}
        <section id="password" className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Password</h2>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Old Password</label>
              <input
                type="password"
                placeholder="Old password"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">New Password</label>
              <input
                type="password"
                placeholder="New password"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Repeat New Password</label>
              <input
                type="password"
                placeholder="Repeat new password"
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="mt-6">
          <button className="bg-black text-white py-2 px-4 rounded">
            Save changes
          </button>
        </div>
      </main>
    </div>
  );
};

export default Account;
