import ArrowIcon from "assets/icons/arrow-right.svg";

// CSS prefix: .genbutton-
import "./style.css";

function GenerateButton() {
  return (
    <button className="genbutton">
      <span className="genbutton-label">GENERATE</span>
      <span className="genbutton-icon">
        <ArrowIcon />
      </span>
    </button>
  );
}

export default GenerateButton;
