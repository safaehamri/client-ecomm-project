import React from "react";

const PriceFilter = ({ onChange }) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="150"
        onChange={(e) => onChange([0, Number(e.target.value)])}
      />
      <span>Up to ${150}</span>
    </div>
  );
};

export default PriceFilter;
