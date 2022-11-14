import { Modal } from "react-bootstrap";
import React from "react";
import ModalCheck from "assets/icons/modal-success-check.svg";

export default function SuccessModalTwoButtons({ title, text, button1, button2, ...props }) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" className="successModal successModalTwoButtons" centered>
      <Modal.Body>
        <div className="modal-header-image d-flex align-items-center justify-content-center">
          <img src={ModalCheck} alt="" />
        </div>
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
      </Modal.Body>
    </Modal>
  );
}
