export const fromRomanNumerals = input => {
  let result = 0;

  let right = getNumberFromRoman(input[input.length - 1]);
  result = right;

  for (let i = input.length - 1 - 1; i >= 0; i--) {
    const left = getNumberFromRoman(input[i]);

    if (left >= right) {
      result = result + left;
    } else {
      result = result - left;
    }

    right = left;
  }

  return result > 4999 ? "Too big number" : result;
};

export const toRomanNumerals = input => {
  const text = input.toString();

  if (text.length === 1) return handleSingleNumber(input);
  else if (text.length === 2) return handleDualNumber(text);
  else if (text.length === 3) return handleTripleNumber(text);
  else if (text.length === 4) return handleQuadraNumber(text);

  return "Too big number";
};

const handleSingleNumber = number => {
  switch (number) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    default:
      return "";
  }
};

const handleDualNumber = input => {
  const value1Num = parseInt(input[0]);

  let value1 = "";
  if (value1Num == 9) value1 = "XC";
  else if (value1Num >= 5) value1 = "L" + getWholeNumber("X", value1Num - 5);
  else value1 = getWholeNumber("X", value1Num);

  const value2 = handleSingleNumber(parseInt(input[1]));

  if (value2 !== "") return value1 + value2;
  else return value1;
};

const handleTripleNumber = input => {
  const value1Num = parseInt(input[0]);

  let value1 = "";
  if (value1Num == 9) value1 = "CM";
  else if (value1Num >= 5) value1 = "D" + getWholeNumber("C", value1Num - 5);
  else value1 = getWholeNumber("C", value1Num);

  const value2 = handleDualNumber(input.substr(1, 2));

  if (value2 !== "") return value1 + value2;
  else return value1;
};

const handleQuadraNumber = input => {
  const value1Num = parseInt(input[0]);

  if (value1Num >= 5) return "Too big number";

  const value1 = getWholeNumber("M", value1Num);
  const value2 = handleTripleNumber(input.substr(1, 3));

  if (value2 !== "") return value1 + value2;
  else return value1;
};

const getWholeNumber = (from, to) => {
  let result = "";
  for (let i = 1; i <= to; i++) {
    result += from;
  }
  return result;
};

const getNumberFromRoman = value => {
  switch (value) {
    case "M":
      return 1000;
    case "D":
      return 500;
    case "C":
      return 100;
    case "L":
      return 50;
    case "X":
      return 10;
    case "V":
      return 5;
    case "I":
      return 1;
    default:
      return -1;
  }
};
