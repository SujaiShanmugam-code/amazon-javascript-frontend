import { formatCurrency } from "../utils/money.js";

console.log(`Test Suite : FormatCurrency`);

console.log(`Convert cents to decimals`);
if (formatCurrency(2095) === "20.95") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(`work with 0`);

if (formatCurrency(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(`work with 1000 cents`);

if (formatCurrency(1000) === "10.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(`work with rounded cost`);

if (formatCurrency(2000.5) === "20.01") {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(`edge cases`);

if (formatCurrency(2000.4) === "20.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}
