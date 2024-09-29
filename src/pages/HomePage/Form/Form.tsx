import { useContext } from "react";

import StrengthState from "components/StrengthState/StrengthStates";
import Checkbox from "components/Checkbox/Checkbox";
import CharLength from "pages/HomePage/CharLength/CharLength";
import RangeSlider from "pages/HomePage/RangeSlider/RangeSlider";
import GenerateButton from "pages/HomePage/GenerateButton/GenerateButton";

import { AppContext } from "contexts/appContext";

// CSS prefix: .form-
import "./style.css";

function Form() {
  const {
    lowerCase,
    setLowerCase,
    upperCase,
    setUpperCase,
    incNumbers,
    setIncNumbers,
    incSymbols,
    setIncSymbols,
  } = useContext(AppContext);

  return (
    <form className="form">
      <div className="form-range">
        <CharLength />
        <RangeSlider />
      </div>

      <div className="form-checkbox">
        <Checkbox
          label="Include Uppercase Letters"
          checked={upperCase}
          onChange={() => setUpperCase(!upperCase)}
        />
        <Checkbox
          label="Include Lowercase Letters"
          checked={lowerCase}
          onChange={() => setLowerCase(!lowerCase)}
        />
        <Checkbox
          label="Include Numbers"
          checked={incNumbers}
          onChange={() => setIncNumbers(!incNumbers)}
        />
        <Checkbox
          label="Include Symbols"
          checked={incSymbols}
          onChange={() => setIncSymbols(!incSymbols)}
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
