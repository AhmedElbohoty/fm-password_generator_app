import { useId } from "react";

import CheckIcon from "assets/icons/check.svg";

// CSS prefix: .checkbox-
import "./style.css";

type CheckboxTypes = {
  checked: boolean;
  label: string;
  onChange: () => void;
};

function Checkbox({ label, checked, onChange }: CheckboxTypes) {
  const id = useId();

  return (
    <label htmlFor={id} className="checkbox-cont">
      <input
        id={id}
        className="checkbox-inp"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkbox-mark">
        <CheckIcon />
      </span>
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

export default Checkbox;
