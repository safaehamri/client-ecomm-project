import React from "react";

export default function ShopPageHeader() {
  return (
    <div
      className="h-48 w-full rounded-md bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      {/* Breadcrumb */}
      <p className="text-sm mb-2">Home &gt; Shop</p>

      {/* Heading */}
      <h1 className="text-2xl font-bold">Shop Page</h1>

      {/* Subtext */}
      <p className="text-base">Let's design the place you always imagined.</p>
    </div>
  );
}
