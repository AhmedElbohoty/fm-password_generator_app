import { type ChangeEvent, useContext } from "react";

import { AppContext } from "contexts/appContext";

// CSS prefix: .rangeslider-
import "./style.css";

const MIN = 1;
const MAX = 20;

function RangeSlider() {
  const { charLength, setCharLength } = useContext(AppContext);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setCharLength(Number(e.target.value));
  }

  const width = `calc(${(charLength * 100) / MAX}% - 25px)`;
  return (
    <div className="rangeslider-cont">
      <input
        type="range"
        className="rangeslider"
        value={charLength}
        onChange={onChange}
        min={MIN}
        max={MAX}
      />
      <span style={{ width }} className="rangeslider-active"></span>
    </div>
  );
}

export default RangeSlider;
