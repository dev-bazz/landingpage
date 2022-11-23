import React from "react";
import "./styles.scss";

export default function Dot({ activeIndex, onClick, slider }) {
  return (
    <div className="dots__bazz">
      {slider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "active-dot dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
}
