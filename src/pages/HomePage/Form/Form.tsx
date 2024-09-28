import GenerateButton from "pages/HomePage/GenerateButton/GenerateButton";
import Checkbox from "components/Checkbox/Checkbox";

// CSS prefix: .form-
import "./style.css";

function Form() {
  return (
    <form className="form">
      <div className="form-checkbox">
        <Checkbox
          label="Include Uppercase Letters"
          checked
          onChange={() => {}}
        />
        <Checkbox
          label="Include Lowercase Letters"
          checked
          onChange={() => {}}
        />
        <Checkbox label="Include Numbers" checked onChange={() => {}} />
        <Checkbox label="Include Symbols" checked={false} onChange={() => {}} />
      </div>
      <GenerateButton />
    </form>
  );
}

export default Form;
