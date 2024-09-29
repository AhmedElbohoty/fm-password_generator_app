import { useState } from "react";

import CopyIcon from "assets/icons/copy.svg";

import { useAppContext } from "contexts/appContext";

// CSS prefix: .password-
import "./style.css";

function Password() {
  const { password } = useAppContext();
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!password || copied) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="password-field" onClick={handleCopy} data-copied={copied}>
      <input
        type="text"
        className="password-value-inp"
        value={password}
        placeholder="P4$5W0rD!"
        readOnly
        onChange={() => {}}
      />
      <div className="password-copy-cont">
        <span className="password-copy-label">COPIED</span>
        <span className="password-copy-icon">
          <CopyIcon />
        </span>
      </div>
    </div>
  );
}

export default Password;
