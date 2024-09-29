import { useAppContext } from "contexts/appContext";

// CSS prefix: .charlength-
import "./style.css";

function CharLength() {
  const { charLength } = useAppContext();

  return (
    <div className="charlength-cont">
      <p className="charlength-label">Character Length</p>
      <p className="charlength-value">{charLength}</p>
    </div>
  );
}

export default CharLength;
