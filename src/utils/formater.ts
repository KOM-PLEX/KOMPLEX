const months = {
  January: "មករា",
  February: "កុម្ភៈ",
  March: "មីនា",
  April: "មេសា",
  May: "ឧសភា",
  June: "មិថុនា",
  July: "កក្កដា",
  August: "សីហា",
  September: "កញ្ញា",
  October: "តុលា",
  November: "វិច្ឆិកា",
  December: "ធ្នូ",
};

const khmerNumbers = {
  "0": "០",
  "1": "១",
  "2": "២",
  "3": "៣",
  "4": "៤",
  "5": "៥",
  "6": "៦",
  "7": "៧",
  "8": "៨",
  "9": "៩",
};

export const formatToKhmerDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Get date components
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  // Convert day and year to Khmer numerals
  const khmerDay = day
    .toString()
    .split("")
    .map((d) => khmerNumbers[d as keyof typeof khmerNumbers])
    .join("");
  const khmerYear = year
    .toString()
    .split("")
    .map((d) => khmerNumbers[d as keyof typeof khmerNumbers])
    .join("");

  // Get Khmer month name
  const khmerMonth = months[month as keyof typeof months];

  return `ថ្ងៃទី ${khmerDay} ខែ${khmerMonth} ឆ្នាំ ${khmerYear}`;
};
