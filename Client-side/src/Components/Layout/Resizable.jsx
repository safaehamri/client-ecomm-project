/* eslint-disable no-unused-vars */
import { useState } from "react";
import NewArrival from "../Sections/NewArrival";

function Resizable() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  return (
    <div
      className={`slider-container ${
        display ? "block" : "hidden"
      } transition-all`}
      style={{ width: `${width}px` }}
    >
      <NewArrival />
    </div>
  );
}

export default Resizable;
