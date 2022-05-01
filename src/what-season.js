const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const SEASONS = ["winter", "spring", "summer", "autumn"];

  if (!date) {
    return "Unable to determine the time of year!";
  } else if (
    Object.getOwnPropertyNames(date).length > 0 ||
    !(date instanceof Date)
  ) {
    throw new Error("Invalid date!");
  }

  return SEASONS[Math.floor(((date.getMonth() + 1) / 3) % 4)];
}

module.exports = {
  getSeason,
};
