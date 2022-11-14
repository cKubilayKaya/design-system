import React from "react";
import { LoadingIcon } from "components/icons";

export default function Button({
  text,
  type = "primary",
  size = "md",
  isDisabled = false,
  icon,
  iconDirection,
  exClass = "",
  textSize = "sm",
  action,
  loading = false,
}) {
  const buttonSize = () => {
    if (size === "xs") return "xs";
    if (size === "sm") return "sm";
    if (size === "md") return "md";
    if (size === "lg") return "lg";
    if (size === "xl") return "xl";
  };

  const buttonType = () => {
    if (type === "primary") return "primary";
    if (type === "secondary") return "secondary";
    if (type === "link") return "link";
  };

  const buttonDisabled = () => {
    if (isDisabled || loading) return "disabled";
    else return "";
  };

  const buttonIconDirection = () => {
    if (iconDirection === "left") return "icon-direction-left";
    if (iconDirection === "right") return "icon-direction-right";
  };

  const buttonTextSize = () => {
    if (textSize === "sm") return "text-size-sm";
    if (textSize === "md") return "text-size-md";
  };

  return (
    <button
      className={`base-button ${buttonType()} ${buttonSize()} ${buttonDisabled()} ${buttonIconDirection()} ${buttonTextSize()} ${exClass} ${
        text === "" ? "empty" : ""
      }`}
      onClick={action ? () => action() : () => ""}
    >
      {iconDirection === "left" && icon && icon}{" "}
      <span>
        {loading ? (
          <span>
            {text}
            <LoadingIcon />
          </span>
        ) : (
          text
        )}
      </span>{" "}
      {iconDirection === "right" && icon && icon}
    </button>
  );
}
