import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayoutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-gray-100 w-full md:w-1/4 p-4">
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-gray-200 text-left px-4 py-2 rounded"
          >
            {isMenuOpen ? "Close Menu" : "Open Menu"}
          </button>
          {isMenuOpen && (
            <nav className="mt-4 space-y-2">
              <NavLink
                to="Account"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded ${isActive ? "bg-gray-300" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </NavLink>
              <NavLink
                to="Address"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded ${isActive ? "bg-gray-300" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Address
              </NavLink>
              <NavLink
                to="myOrders"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded ${isActive ? "bg-gray-300" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Orders
              </NavLink>
              <NavLink
                to="wantList"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded ${isActive ? "bg-gray-300" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </NavLink>
            </nav>
          )}
        </div>

        {/* Desktop Sidebar */}
        <nav className="hidden md:block space-y-4">
          <NavLink
            to="Account"
            className={({ isActive }) =>
              `block p-2 rounded ${
                isActive ? "bg-gray-300 font-bold" : "hover:bg-gray-200"
              }`
            }
          >
            Account
          </NavLink>
          <NavLink
            to="Address"
            className={({ isActive }) =>
              `block p-2 rounded ${
                isActive ? "bg-gray-300 font-bold" : "hover:bg-gray-200"
              }`
            }
          >
            Address
          </NavLink>
          <NavLink
            to="myOrders"
            className={({ isActive }) =>
              `block p-2 rounded ${
                isActive ? "bg-gray-300 font-bold" : "hover:bg-gray-200"
              }`
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="wantList"
            className={({ isActive }) =>
              `block p-2 rounded ${
                isActive ? "bg-gray-300 font-bold" : "hover:bg-gray-200"
              }`
            }
          >
            Wishlist
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
