import { useAppContext } from "contexts/appContext";

export function useMinValue() {
  const {
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols,
    charLength,
    setCharLength,
  } = useAppContext();

  let min = 0;
  if (includeUppercase) min++;
  if (includeLowercase) min++;
  if (includeNumbers) min++;
  if (includeSymbols) min++;

  if (charLength < min) {
    setCharLength(min);
  }

  return min;
}
