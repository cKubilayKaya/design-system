import React from "react";
import InfoImage from "assets/icons/modal-info-check.svg";
import { CloseIcon } from "components/icons";
import Button from "../Button";

export default function InfoFlag({ title, text, cancelButtonText = "Vazgeç", confirmButtonText, active, setActive, confirmButtonAction, loading = false }) {
  return (
    <div className={`flag-container info-flag ${!active ? "hidden" : ""}`}>
      <div className="flag-overlay"></div>
      <div className={`flag info-flag d-flex align-items-start justify-content-between ${!active ? "hidden" : ""}`}>
        <div className="flag-success-left d-flex align-items-start">
          <img src={InfoImage} className="left-image" alt="" />
          <div className="success-flag-desc">
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="buttons d-flex align-items-center">
              <button className="flag-outline" onClick={() => setActive(false)}>
                {cancelButtonText}
              </button>
              <Button text={confirmButtonText} action={() => confirmButtonAction()} loading={loading} />
              {/* <button className="flag-primary" onClick={confirmButtonAction && confirmButtonAction}>
                {confirmButtonText}
              </button> */}
            </div>
          </div>
        </div>
        <div className="close-icon" onClick={() => setActive(false)}>
          <CloseIcon color="#42526E" />
        </div>
      </div>
    </div>
  );
}
