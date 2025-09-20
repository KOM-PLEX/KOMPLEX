// Khmer numeral mapping
const khmerNumerals = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];

// Convert number to Khmer numeral
export function toKhmerNumber(num: number): string {
  return num
    .toString()
    .split("")
    .map((digit) => khmerNumerals[parseInt(digit)])
    .join("");
}

// Convert number to Khmer numbering with period
export function toKhmerNumbering(num: number): string {
  return `${toKhmerNumber(num)}.`;
}
