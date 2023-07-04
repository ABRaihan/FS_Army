/**
 * @description this function is separate symbol, chracter and number from a string and provide an object of these properties.
 * @param {string} str - a sentence for distinguish character, symbol and number
 * @returns {object} character, symbol & number
 */
function characterCounts(str) {
  /* @__Only str arguments accepts only string__@ */
  if (typeof str !== "string")
    return { error: true, msg: "str arugments only accepts string value" };

  let letters = 0,
    symbols = 0,
    numbers = 0;
  for (let i = 0; i < str.length; i++) {
    let uniCode = str.charCodeAt(i);
    /* @__Small and Big alphabet unicode__@ */
    if ((uniCode >= 65 && uniCode <= 90) || (uniCode >= 97 && uniCode <= 122)) {
      letters++;
    } else if (uniCode >= 48 && uniCode <= 57) { /* @__Numeric character unicode__@ */
      numbers++;
    } else {
      symbols++;
    }
  }

  return { letters, symbols, numbers };
}

module.exports = characterCounts;
