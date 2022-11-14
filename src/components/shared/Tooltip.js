import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Tooltip({ tooltipText, text }) {
  return (
    <Tippy content={tooltipText}>
      <button className="tooltip-text">{text}</button>
    </Tippy>
  );
}
