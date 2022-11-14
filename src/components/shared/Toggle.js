import React from "react";
import { CheckIcon, CloseIcon } from "components/icons";

export default function Toggle({ value, setValue, text }) {
  return (
    <div className="toggle-wrapper d-flex align-items-center">
      <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" checked={value} onChange={() => setValue(!value)} />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`}>
          <div className="switch-button-icon">
            {!value && <CloseIcon color="#505F79" />}
            {value && <CheckIcon color="#505F79" />}
          </div>
        </span>
      </label>
      <p onClick={() => setValue(!value)}>{text}</p>
    </div>
  );
}
