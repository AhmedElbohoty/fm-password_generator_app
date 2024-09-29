import {
  UPPERCASE_CHARS,
  LOWERCASE_CHARS,
  NUMBER_CHARS,
  SYMBOL_CHARS,
} from "utils/constants";

type GeneratePasswordArgs = {
  charLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

export function generatePassword({
  charLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
}: GeneratePasswordArgs) {
  let chars = "";
  const charsArray = [];
  const passArray = [];

  if (includeUppercase) charsArray.push(UPPERCASE_CHARS);
  if (includeLowercase) charsArray.push(LOWERCASE_CHARS);
  if (includeNumbers) charsArray.push(NUMBER_CHARS);
  if (includeSymbols) charsArray.push(SYMBOL_CHARS);

  charsArray.forEach((c) => {
    chars += c;
    passArray.push(c[Math.floor(Math.random() * c.length)]);
  });

  while (passArray.length < charLength) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    passArray.push(chars[randomIndex]);
  }

  for (let i = passArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passArray[i], passArray[j]] = [passArray[j], passArray[i]];
  }

  return passArray.join("");
}
