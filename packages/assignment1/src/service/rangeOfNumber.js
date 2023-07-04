const typeCheck = require("../utils/typeCheck");

/**
 * @description This function generate a random number between provided range.
 * @param {number} start - staring range
 * @param {number} end - ending range
 * @returns {number} random number between range
 */
function rangeOfNumber(start, end) {
  const checkType = typeCheck([start, end], "number");
  if (checkType.error) return checkType;
  return parseInt(Math.random() * (end - start + 1) + start);
}

module.exports = rangeOfNumber;
