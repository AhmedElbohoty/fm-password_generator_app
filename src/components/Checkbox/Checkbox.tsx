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
    <div className="checkbox-cont">
      <input
        id={id}
        className="checkbox-inp"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="checkbox-mark">
        <CheckIcon />
      </label>
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
