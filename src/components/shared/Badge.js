import React from "react";
import { CloseIcon } from "components/icons";

export default function Badge({ color = "light", text, size = "sm", corner = "default", type = "primary", filter = false }) {
  function badgeColor() {
    if (color === "light") return "light";
    if (color === "red") return "red";
    if (color === "yellow") return "yellow";
    if (color === "blue") return "blue";
    if (color === "green") return "green";
  }

  function badgeSize() {
    if (size === "sm") return "small";
    if (size === "md") return "medium";
  }

  function badgeCorner() {
    if (corner === "default") return "default";
    if (corner === "circle") return "circle";
  }

  function badgeType() {
    if (type === "primary") return "primary";
    if (type === "outline") return "outline";
  }

  return (
    <p className={`base-badge ${filter ? "filter" : ""} ${badgeColor()} ${badgeSize()} ${badgeCorner()} ${badgeType()}`}>
      <span>{text}</span> {filter ? <CloseIcon /> : ""}
    </p>
  );
}
