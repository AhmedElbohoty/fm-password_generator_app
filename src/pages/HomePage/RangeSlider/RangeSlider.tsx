import { type ChangeEvent, useState } from "react";

// CSS prefix: .rangeslider-
import "./style.css";

const MIN = 1;
const MAX = 20;

function RangeSlider() {
  const [chars, setChars] = useState(0);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setChars(Number(e.target.value));
  }

  return (
    <div className="rangeslider-cont">
      <input
        type="range"
        className="rangeslider"
        value={chars}
        onChange={onChange}
        min={MIN}
        max={MAX}
      />
      <span
        style={{ width: `calc(${(chars * 100) / MAX}% - 25px)` }}
        className="rangeslider-active"
      ></span>
    </div>
  );
}

export default RangeSlider;
