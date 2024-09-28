// CSS prefix: .checkbox-
import "./style.css";

type CheckboxTypes = {
  checked: boolean;
  label: string;
  onChange: () => void;
};

function Checkbox({ label, checked, onChange }: CheckboxTypes) {
  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}

export default Checkbox;
