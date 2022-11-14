import React, { useState } from "react";
import WarningIcon from "assets/icons/warning.svg";

export default function Input({
  icon,
  iconDirection = "left",
  optional,
  optionalText = "Opsiyonel",
  isDisabled = false,
  error = false,
  placeholder = "",
  labelText,
  value,
  setValue,
  changeInputType = false,
  inputType = "text",
  ...props
}) {
  const [type, setType] = useState(inputType);

  const changeType = () => {
    if (type === "email" || type === "text") {
      setType("password");
    }
    if (type === "password") {
      setType("text");
    }
  };

  return (
    <div className={`base-input ${isDisabled ? "disabled" : ""} ${error ? "error" : ""}`}>
      {labelText && (
        <div className="base-input-label d-flex align-items-center justify-content-between">
          <label htmlFor={labelText}>{labelText}</label>
          {optional && <span>{optionalText}</span>}
        </div>
      )}
      <div className={`base-input-wrapper ${icon && iconDirection}`}>
        <input
          type={type}
          id={labelText}
          disabled={isDisabled ? true : false}
          placeholder={placeholder}
          maxLength={15000}
          minLength={1}
          value={value}
          onChange={(e) => {
            let firstLetter = e.target.value.charAt(0);
            if (firstLetter === "0") {
              return "";
            } else {
              setValue(e.target.value);
            }
          }}
          {...props}
        />
        {!changeInputType && icon}
        {changeInputType && <div onClick={() => changeType()}>{icon}</div>}
      </div>
      <div className={`warning d-flex align-items-center ${!error ? "hidden" : ""}`}>
        <img src={WarningIcon} alt="" />
        <span>Lorem ipsum dolor sit amet, consectetur.</span>
      </div>
    </div>
  );
}
