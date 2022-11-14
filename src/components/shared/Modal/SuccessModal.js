import { Modal } from "react-bootstrap";
import React from "react";
import ModalCheck from "assets/icons/modal-success-check.svg";

export default function SuccessModal({ title, text, button, setsuccessmodal, exitAction = false, ...props }) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" className="successModal" centered>
      <Modal.Body>
        <div className="modal-header-image d-flex align-items-center justify-content-center">
          <img src={ModalCheck} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="InvestorApplicationModal-button" onClick={() => setsuccessmodal(false)}>
          {button}
        </button>
      </Modal.Body>
    </Modal>
  );
}
