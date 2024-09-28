import { useState } from "react";

import CopyIcon from "assets/icons/copy.svg";

// CSS prefix: .password-
import "./style.css";

type PasswordType = {
  value: string;
};

function Password({ value }: PasswordType) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!value || copied) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="password-field" onClick={handleCopy} data-copied={copied}>
      <input
        type="text"
        className="password-value-inp"
        value={value}
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
