import React, { useState } from "react";

export default function PriceFilterDropdown() {
  const [selectedOption, setSelectedOption] = useState("Price: High to Low");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Price: Low to High",
    "Price: High to Low",
    "New Arrivals",
    "Bestsellers",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="relative inline-block text-left bg-blue-gray-50 p-2 rounded-md  sm:w-48 m-10">
      {/* Button */}
      <button
        type="button"
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-grey border  rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <svg
          className="w-5 h-5 ml-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg"
          role="menu"
        >
          {options.map((option) => (
            <button
              key={option}
              className={`block w-full px-4 py-2 text-left text-sm ${
                selectedOption === option
                  ? "bg-gray-100 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
