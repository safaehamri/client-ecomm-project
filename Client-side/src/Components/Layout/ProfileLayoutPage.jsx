import React from "react";
import { Outlet } from "react-router-dom";

export default function ProfileLayoutPage() {
  return (
    <>
      <div className="min-h-screen  p-4 md:p-8">
        <div className="text-2xl font-bold text-center mb-6">My Account</div>
        <Outlet />
      </div>
    </>
  );
}
