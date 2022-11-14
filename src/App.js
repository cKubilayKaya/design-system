import Badge from "components/shared/Badge";
import Button from "components/shared/Button";
import { ButtonPlusIcon, EmailIcon } from "components/icons";
import Input from "components/shared/Input";
import DangerModalTwoButtons from "components/shared/Modal/DangerModalTwoButtons";
import SuccessModal from "components/shared/Modal/SuccessModal";
import SuccessModalTwoButtons from "components/shared/Modal/SuccessModalTwoButtons";
import Tooltip from "components/shared/Tooltip";
import React, { useState } from "react";
import MainSelect from "components/shared/MainSelect";
import Toggle from "components/shared/Toggle";
import ErrorFlag from "components/shared/Flag/ErrorFlag";
import InfoFlag from "components/shared/Flag/InfoFlag";
import ReactHelmet from "components/ReactHelmet";
import { Accordion } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

export default function Components() {
  const [value, setValue] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [successModalTwoButtons, setSuccessModalTwoButtons] = useState(false);
  const [dangerModalTwoButtons, setDangerModalTwoButtons] = useState(false);
  const [dangerModalTwoButtons2, setDangerModalTwoButtons2] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorFlagLoading, setErrorFlagLoading] = useState(false);
  const [infoFlag, setInfoFlag] = useState(false);
  const [infoFlagLoading, setInfoFlagLoading] = useState(false);
  const investTypes = [
    {
      id: 1,
      value: "ist",
      label: "İstanbul",
    },
    {
      id: 2,
      value: "ank",
      label: "Ankara",
    },
    {
      id: 3,
      name: "izm",
      label: "İzmir",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(investTypes[0]);

  return (
    <>
      <ReactHelmet titleName="Elementler" />

      <div className="container components">
        <div className="components-section">
          <h3>Buttons</h3>
          <div className="components-section-container">
            <h4>Primary</h4>
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="primary" size="xs" />
                <Button text="Label" type="primary" size="xs" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="primary" size="xs" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="primary" size="xs" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="primary" size="sm" />
                <Button text="Label" type="primary" size="sm" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="primary" size="sm" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="primary" size="sm" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="primary" size="md" />
                <Button text="Label" type="primary" size="md" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="primary" size="md" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="primary" size="md" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="primary" size="lg" />
                <Button text="Label" type="primary" size="lg" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="primary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="primary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="primary" size="xl" />
                <Button text="Label" type="primary" size="xl" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="primary" size="xl" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="primary" size="xl" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="primary" size="lg" isDisabled />
                <Button text="Label" type="primary" size="lg" icon={<ButtonPlusIcon />} iconDirection="left" isDisabled />
                <Button text="Label" type="primary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" isDisabled />
                <Button text="" type="primary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" isDisabled />
              </div>
            </div>
          </div>
          <div className="components-section-container">
            <h4>Secondary</h4>
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="secondary" size="xs" />
                <Button text="Label" type="secondary" size="xs" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="secondary" size="xs" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="secondary" size="xs" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="secondary" size="sm" />
                <Button text="Label" type="secondary" size="sm" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="secondary" size="sm" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="secondary" size="sm" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="secondary" size="md" />
                <Button text="Label" type="secondary" size="md" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="secondary" size="md" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="secondary" size="md" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="secondary" size="lg" />
                <Button text="Label" type="secondary" size="lg" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="secondary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="secondary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="secondary" size="xl" />
                <Button text="Label" type="secondary" size="xl" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="secondary" size="xl" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="secondary" size="xl" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="secondary" size="lg" isDisabled />
                <Button text="Label" type="secondary" size="lg" icon={<ButtonPlusIcon />} iconDirection="left" isDisabled />
                <Button text="Label" type="secondary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" isDisabled />
                <Button text="" type="secondary" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" isDisabled />
              </div>
            </div>
          </div>
          <div className="components-section-container">
            <h4>Link Button</h4>
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="link" size="xs" />
                <Button text="Label" type="link" size="xs" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="link" size="xs" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="link" size="xs" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="link" size="sm" />
                <Button text="Label" type="link" size="sm" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="link" size="sm" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="link" size="sm" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="link" size="md" />
                <Button text="Label" type="link" size="md" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="link" size="md" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="link" size="md" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="link" size="lg" />
                <Button text="Label" type="link" size="lg" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="link" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="link" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="link" size="xl" />
                <Button text="Label" type="link" size="xl" icon={<ButtonPlusIcon />} iconDirection="left" />
                <Button text="Label" type="link" size="xl" icon={<ButtonPlusIcon />} iconDirection="right" />
                <Button text="" type="link" size="xl" icon={<ButtonPlusIcon />} iconDirection="right" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Button text="Label" type="link" size="lg" isDisabled />
                <Button text="Label" type="link" size="lg" icon={<ButtonPlusIcon />} iconDirection="left" isDisabled />
                <Button text="Label" type="link" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" isDisabled />
                <Button text="" type="link" size="lg" icon={<ButtonPlusIcon />} iconDirection="right" isDisabled />
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Checkbox</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <input type="checkbox" id="1" readOnly />
                <label htmlFor="1">Label</label>
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <input type="checkbox" id="2" checked readOnly />
                <label htmlFor="2">Label</label>
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <input type="checkbox" id="3" className="disabled" disabled checked readOnly />
                <label htmlFor="3">Label</label>
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Accordion</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Radio</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <input type="radio" id="11" readOnly />
                <label htmlFor="11">Label</label>
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <input type="radio" id="22" checked readOnly />
                <label htmlFor="22">Label</label>
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <input type="radio" id="33" className="disabled" disabled checked readOnly />
                <label htmlFor="33">Label</label>
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Badge</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <Badge color="light" text="Badge" />
                <Badge color="red" text="Badge" />
                <Badge color="yellow" text="Badge" />
                <Badge color="green" text="Badge" />
                <Badge color="blue" text="Badge" />
                <Badge color="blue" text="Badge" filter={true} />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Badge color="light" text="Badge" type="outline" />
                <Badge color="red" text="Badge" type="outline" />
                <Badge color="yellow" text="Badge" type="outline" />
                <Badge color="green" text="Badge" type="outline" />
                <Badge color="blue" text="Badge" type="outline" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Badge color="light" text="Badge" corner="circle" />
                <Badge color="red" text="Badge" corner="circle" />
                <Badge color="yellow" text="Badge" corner="circle" />
                <Badge color="green" text="Badge" corner="circle" />
                <Badge color="blue" text="Badge" corner="circle" />
                <Badge color="blue" text="Badge" corner="circle" filter={true} />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Badge color="light" text="Badge" size="md" />
                <Badge color="red" text="Badge" size="md" />
                <Badge color="yellow" text="Badge" size="md" />
                <Badge color="green" text="Badge" size="md" />
                <Badge color="blue" text="Badge" size="md" />
                <Badge color="blue" text="Badge" size="md" filter={true} />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Badge color="light" text="Badge" type="outline" size="md" />
                <Badge color="red" text="Badge" type="outline" size="md" />
                <Badge color="yellow" text="Badge" type="outline" size="md" />
                <Badge color="green" text="Badge" type="outline" size="md" />
                <Badge color="blue" text="Badge" type="outline" size="md" />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <Badge color="light" text="Badge" type="outline" size="md" corner="circle" />
                <Badge color="red" text="Badge" type="outline" size="md" corner="circle" />
                <Badge color="yellow" text="Badge" type="outline" size="md" corner="circle" />
                <Badge color="green" text="Badge" type="outline" size="md" corner="circle" />
                <Badge color="blue" text="Badge" type="outline" size="md" corner="circle" />
                <Badge color="blue" text="Badge" type="outline" size="md" corner="circle" filter={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Toggle</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <Toggle value={value} setValue={setValue} text="Kaydet" />
              </div>
              {/* <div className="d-flex align-items-center components-section-container-item">
              <input
                className="react-switch-checkbox disabled"
                id={`react-switch-new`}
                type="checkbox"
                checked={value}
                onChange={() => setValue(!value)}
                disabled
              />
              <label className="react-switch-label disabled" htmlFor={`react-switch-new`}>
                <span className={`react-switch-button`} />
              </label>
              <p onClick={() => setValue(!value)}>Label</p>
            </div> */}
            </div>
          </div>
        </div>

        <div className="components-section">
          <h3>Input</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="">
                <Input icon={<EmailIcon />} error />
                <br />
                <Input icon={<EmailIcon />} iconDirection="right" />
                <br />
                <Input optional={true} />
                <br />
                <Input optional={true} isDisabled />
                <br />
                <textarea cols="30" rows="6" placeholder="Something about myself."></textarea>
                <br />
                <div className="textarea-wrapper">
                  <label htmlFor="textarea">About</label>
                  <textarea cols="30" rows="6"></textarea>
                  <span>Write a few sentences about yourself.</span>
                </div>
                <br />
                <MainSelect options={investTypes} defaultValue={selectedOption} setSelectedOption={setSelectedOption} />
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Tooltip</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <Tooltip text="Text" tooltipText="Tooltip Text" />
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Modals</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="d-flex align-items-center components-section-container-item">
                <span className="reference-code-text" onClick={() => setSuccessModal(true)}>
                  Success Modal
                </span>
                <SuccessModal
                  show={successModal}
                  onHide={() => setSuccessModal(false)}
                  setsuccessmodal={setSuccessModal}
                  title="Lorem ipsum dolor sit amet."
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                  button="Button text"
                />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <span className="reference-code-text" onClick={() => setSuccessModalTwoButtons(true)}>
                  Success Modal Two Buttons
                </span>
                <SuccessModalTwoButtons
                  show={successModalTwoButtons}
                  onHide={() => setSuccessModalTwoButtons(false)}
                  setsuccessmodal={setSuccessModalTwoButtons}
                  title="Lorem ipsum dolor sit amet."
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                  button1="Button text"
                  button2="Button text"
                />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <span className="reference-code-text" onClick={() => setDangerModalTwoButtons(true)}>
                  Danger Modal Two Buttons
                </span>
                <DangerModalTwoButtons
                  show={dangerModalTwoButtons}
                  onHide={() => setDangerModalTwoButtons(false)}
                  setSuccessModal={setDangerModalTwoButtons}
                  title="Lorem ipsum dolor sit amet."
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                  button1="Button text"
                  button2="Button text"
                />
              </div>
              <div className="d-flex align-items-center components-section-container-item">
                <span className="reference-code-text" onClick={() => setDangerModalTwoButtons2(true)}>
                  Danger Modal Two Buttons Close Icon
                </span>
                <DangerModalTwoButtons
                  show={dangerModalTwoButtons2}
                  onHide={() => setDangerModalTwoButtons2(false)}
                  setSuccessModal={setDangerModalTwoButtons2}
                  title="Lorem ipsum dolor sit amet."
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                  button1="Button text"
                  button2="Button text"
                  closeActive
                />
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <h3>Flags</h3>
          <div className="components-section-container">
            <div className="components-section-container-items">
              <div className="components-section-container-item">
                <p className="error-flag-button-title" onClick={() => setErrorFlag(true)}>
                  Error Flag
                </p>
                <ErrorFlag
                  title={"Dosyaları silmek istiyor musunuz ?"}
                  active={errorFlag}
                  setActive={setErrorFlag}
                  confirmButtonText={"Sil"}
                  loading={errorFlagLoading}
                  confirmButtonAction={() => {
                    setErrorFlagLoading(true);
                    setTimeout(() => {
                      setErrorFlagLoading(false);
                      toast.success("Silindi");
                      setErrorFlag(false);
                    }, 2000);
                  }}
                />
                <p className="error-flag-button-title" onClick={() => setInfoFlag(true)}>
                  Info Flag
                </p>
                <InfoFlag
                  title={"İşlemi onaylıyor musunuz?"}
                  active={infoFlag}
                  setActive={setInfoFlag}
                  confirmButtonText={"Onayla"}
                  loading={infoFlagLoading}
                  confirmButtonAction={() => {
                    setInfoFlagLoading(true);
                    setTimeout(() => {
                      setInfoFlagLoading(false);
                      toast.success("İşlem başarılı.");
                      setInfoFlag(false);
                    }, 2000);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        hideprogressbar="false"
        newestontop="true"
        pauseonfocusloss="true"
        pauseonhover="true"
        type="error"
        progressclassname="toastProgress"
        bodyclassname="toastBody"
        closeonclick="false"
      />
    </>
  );
}
