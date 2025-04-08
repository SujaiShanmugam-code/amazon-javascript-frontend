import { formatCurrency } from "../utils/money.js";

describe("FormatCurrency in our Amazon", () => {
  it("convert cents to costs", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("work with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("work with 1000", () => {
    expect(formatCurrency(1000)).toEqual("10.00");
  });

  it("rounds number to nearest cents", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});
