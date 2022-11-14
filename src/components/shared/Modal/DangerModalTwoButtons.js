import { Modal } from "react-bootstrap";
import React from "react";
import ModalCheck from "assets/icons/danger-modal-warning-icon.svg";
import { CloseIcon } from "components/icons";

export default function DangerModalTwoButtons({ title, text, button1, button2, closeActive = false, ...props }) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" className="successModal successModalTwoButtons dangerModalTwoButtons" centered>
      <Modal.Body>
        <div className="modal-wrapper d-flex align-items-start justify-content-between">
          <div className="modal-header-image d-flex align-items-center justify-content-center">
            <img src={ModalCheck} alt="" />
          </div>
          <div className="modal-wrapper-desc">
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="buttons d-flex align-items-center justify-content-between">
              <button className="InvestorApplicationModal-button" onClick={() => props.setSuccessModal(false)}>
                {button1}
              </button>
              <button className="InvestorApplicationModal-button" onClick={() => props.setSuccessModal(false)}>
                {button2}
              </button>
            </div>
          </div>
          {closeActive && (
            <div className="close-icon" onClick={() => props.setSuccessModal(false)}>
              <CloseIcon />
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
