// CSS prefix: .strstate-
import "./style.css";

const LEVELS = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

function StrengthState() {
  const state = 2;

  return (
    <div className="strstate">
      <p className="strstate-label">STRENGTH</p>

      <p className="strstate-bars-label">{LEVELS[state]}</p>
      <div className="strstate-bars">
        {LEVELS.map((l) => {
          return (
            <span key={l} className="strstate-bar" data-level={state}></span>
          );
        })}
      </div>
    </div>
  );
}

export default StrengthState;
