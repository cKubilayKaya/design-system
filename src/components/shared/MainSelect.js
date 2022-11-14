import React from "react";
import Select from "react-select";

export default function MainSelect({
  options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
  defaultValue,
  setSelectedOption,
}) {
  return (
    <div className="select-wrapper">
      <Select defaultValue={defaultValue} onChange={(e) => setSelectedOption(e)} options={options} />
    </div>
  );
}
