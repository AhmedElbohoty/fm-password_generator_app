import { type FormEvent } from "react";

import StrengthState from "pages/HomePage/StrengthState/StrengthStates";
import Checkbox from "components/Checkbox/Checkbox";
import CharLength from "pages/HomePage/CharLength/CharLength";
import RangeSlider from "pages/HomePage/RangeSlider/RangeSlider";
import GenerateButton from "pages/HomePage/GenerateButton/GenerateButton";

import { useAppContext } from "contexts/appContext";
import { generatePassword } from "utils/helpers";

// CSS prefix: .form-
import "./style.css";

function Form() {
  const {
    charLength,
    includeLowercase,
    setIncludeLowercase,
    includeUppercase,
    setIncludeUppercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    setPassword,
  } = useAppContext();

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const password = generatePassword({
      charLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(password);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-range">
        <CharLength />
        <RangeSlider />
      </div>

      <div className="form-checkbox">
        <Checkbox
          label="Include Uppercase Letters"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        <Checkbox
          label="Include Lowercase Letters"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
        <Checkbox
          label="Include Numbers"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        <Checkbox
          label="Include Symbols"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </div>

      <div className="form-strength">
        <StrengthState />
      </div>

      <GenerateButton />
    </form>
  );
}

export default Form;
