import { fromRomanNumerals, toRomanNumerals } from "./converter";

describe("Converting Roman numerals", () => {
  it("should convert from Roman numeral to number", () => {
    expect(fromRomanNumerals("I")).toBe(1);
    expect(fromRomanNumerals("II")).toBe(2);
    expect(fromRomanNumerals("III")).toBe(3);
    expect(fromRomanNumerals("IV")).toBe(4);
    expect(fromRomanNumerals("V")).toBe(5);
    expect(fromRomanNumerals("VI")).toBe(6);
    expect(fromRomanNumerals("VII")).toBe(7);
    expect(fromRomanNumerals("VIII")).toBe(8);
    expect(fromRomanNumerals("IX")).toBe(9);

    expect(fromRomanNumerals("X")).toBe(10);
    expect(fromRomanNumerals("XI")).toBe(11);
    expect(fromRomanNumerals("XV")).toBe(15);
    expect(fromRomanNumerals("XIX")).toBe(19);
    expect(fromRomanNumerals("XXIII")).toBe(23);
    expect(fromRomanNumerals("L")).toBe(50);
    expect(fromRomanNumerals("LXV")).toBe(65);
    expect(fromRomanNumerals("LXXII")).toBe(72);
    expect(fromRomanNumerals("LXXXVIII")).toBe(88);
    expect(fromRomanNumerals("LXXXXIX")).toBe(99);

    expect(fromRomanNumerals("CLXXVII")).toBe(177);
    expect(fromRomanNumerals("CCCLXVI")).toBe(366);
    expect(fromRomanNumerals("DV")).toBe(505);
    expect(fromRomanNumerals("DCCCCLXXXXIX")).toBe(999);

    expect(fromRomanNumerals("MD")).toBe(1500);
    expect(fromRomanNumerals("MMMDCCLXXXV")).toBe(3785);
    expect(fromRomanNumerals("MMMM")).toBe(4000);
    expect(fromRomanNumerals("MMMMM")).toBe("Too big number");
  });

  it("should convert from Roman numeral to number", () => {
    expect(toRomanNumerals(1)).toBe("I");
    expect(toRomanNumerals(2)).toBe("II");
    expect(toRomanNumerals(3)).toBe("III");
    expect(toRomanNumerals(4)).toBe("IV");
    expect(toRomanNumerals(5)).toBe("V");
    expect(toRomanNumerals(6)).toBe("VI");
    expect(toRomanNumerals(7)).toBe("VII");
    expect(toRomanNumerals(8)).toBe("VIII");
    expect(toRomanNumerals(9)).toBe("IX");

    expect(toRomanNumerals(10)).toBe("X");
    expect(toRomanNumerals(12)).toBe("XII");
    expect(toRomanNumerals(15)).toBe("XV");
    expect(toRomanNumerals(18)).toBe("XVIII");
    expect(toRomanNumerals(33)).toBe("XXXIII");
    expect(toRomanNumerals(50)).toBe("L");
    expect(toRomanNumerals(77)).toBe("LXXVII");
    expect(toRomanNumerals(85)).toBe("LXXXV");
    expect(toRomanNumerals(92)).toBe("XCII");

    expect(toRomanNumerals(100)).toBe("C");
    expect(toRomanNumerals(143)).toBe("CXXXXIII");
    expect(toRomanNumerals(253)).toBe("CCLIII");
    expect(toRomanNumerals(499)).toBe("CCCCXCIX");
    expect(toRomanNumerals(500)).toBe("D");
    expect(toRomanNumerals(555)).toBe("DLV");
    expect(toRomanNumerals(687)).toBe("DCLXXXVII");
    expect(toRomanNumerals(888)).toBe("DCCCLXXXVIII");
    expect(toRomanNumerals(912)).toBe("CMXII");

    expect(toRomanNumerals(1000)).toBe("M");
    expect(toRomanNumerals(1111)).toBe("MCXI");
    expect(toRomanNumerals(1489)).toBe("MCCCCLXXXIX");
    expect(toRomanNumerals(3003)).toBe("MMMIII");
    expect(toRomanNumerals(5000)).toBe("Too big number");
  });
});
