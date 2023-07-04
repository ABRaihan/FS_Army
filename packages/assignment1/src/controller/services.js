const generateFakeProfile = require("../service/generateFakeProfile");
const characterCounts = require("../service/characterCount");
const rangeOfNumber = require("../service/rangeOfNumber");
const error = require("../utils/error");
class Services {
  /**
   * @description this controller function handle make range of numbers request of provided range
   * @param {object} req - client request data
   * @param {object} res - response provided data
   * @param {function} next - middleware function
   * @returns {undefined} Undefinded
   */
  getNumberRange(req, res, next) {
    try {
      const { start, end } = req.query;
      const range = rangeOfNumber(+start, +end);

      if (range.error) throw error(range.msg, 300);
      res.json({ msg: "Success", range });
    } catch (err) {
      next(err);
    }
  }

  /**
   * @description this controller function handle fakeProfile generate request
   * @param {object} req - client request data
   * @param {object} res - response provided data
   * @param {function} next - middleware function
   * @returns {undefined} Undefinded
   */
  getFakeProfile(req, res, next) {
    try {
      const { properties } = req.body;
      const profile = generateFakeProfile(properties);
      if (profile.error) throw error(profile.msg);
      res.json({ msg: "Success", profile });
    } catch (err) {
      next(err);
    }
  }

  /**
   * @description this controller function handle chracter count request from a string request
   * @param {object} req - client request data
   * @param {object} res - response provided data
   * @param {function} next - middleware function
   * @returns {undefined} Undefinded
   */
  getCharacterCounts(req, res, next) {
    try {
      const { str } = req.body;
      const chracters = characterCounts(str);
      if (chracters.error) throw error(chracters.msg);
      res.json({ msg: "Success", chracters });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new Services();
