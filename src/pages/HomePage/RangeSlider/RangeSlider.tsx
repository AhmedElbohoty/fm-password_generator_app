import { type ChangeEvent } from "react";

import { useAppContext } from "contexts/appContext";
import { MAX_CHARS_LENGTH } from "utils/constants";
import { useMinValue } from "pages/HomePage/RangeSlider/hooks";

// CSS prefix: .rangeslider-
import "./style.css";

function RangeSlider() {
  const { charLength, setCharLength } = useAppContext();
  const min = useMinValue();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setCharLength(Number(e.target.value));
  }

  const width = `calc(${(charLength * 100) / MAX_CHARS_LENGTH}% - 25px)`;
  return (
    <div className="rangeslider-cont">
      <input
        type="range"
        className="rangeslider"
        value={charLength}
        onChange={onChange}
        min={min}
        max={MAX_CHARS_LENGTH}
        aria-label="Input range for characters length"
      />
      <span style={{ width }} className="rangeslider-active"></span>
    </div>
  );
}

export default RangeSlider;
