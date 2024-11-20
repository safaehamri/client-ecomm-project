import { useState } from "react";
import { Close } from "./Icons";

export default function AnnouncementBar() {
  const [isBarVisible, setIsBarVisible] = useState(true);
  return (
    isBarVisible && (
      <div className="w-full realtive  bg-gray-200 p-2 flex justify-center items-center gap-2">
        <span className="text-sm text-black">
          30% off storewide — Limited time!
        </span>
        <a href="shop" className="underline text-blue-600">
          Shop Now →
        </a>

        <button
          className="absolute  top-4 right-8 "
          onClick={() => setIsBarVisible(false)}
        >
          <Close />
        </button>
      </div>
    )
  );
}
