import { useMemo } from "react";

import { useAppContext } from "contexts/appContext";

// CSS prefix: .strstate-
import "./style.css";

const LEVELS = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

function StrengthState() {
  const { password } = useAppContext();
  const state = useMemo(() => {
    if (!password) return -1;
    if (password.length <= 4) return 1;

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score++;

    if (score <= 2) return 0;
    if (score <= 3) return 1;
    if (score <= 4) return 2;
    return 3;
  }, [password]);

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
