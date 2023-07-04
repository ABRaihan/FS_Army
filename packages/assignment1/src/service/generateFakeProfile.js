const fakeProfile = require("../_data/fakeProfile.json");

/**
 * @description this function make fake person object depends on provided propties of person
 * @param {array} keys - fake person properties names
 * @returns {object} fakePerson | errorObject
 */
function generateFakeProfile(keys) {
  /* @__Only Array Type Accepts__@ */
  if (!Array.isArray(keys))
    return { error: true, msg: "keys argument must be array" };
  const fakePerson = {};
  let min = 0,
    max = 0,
    random = 0;
  keys.forEach((key, index) => {
    //? @___Random number generate only one times for sync same data__@
    index === 0 && (max = fakeProfile[key].length);
    index === 0 && (random = parseInt(Math.random() * (max - min) + min));

    /* @__Get Fake Profile from local db__@ */
    fakePerson[key] = fakeProfile[key][random];
  });
  return fakePerson;
}

module.exports = generateFakeProfile;
