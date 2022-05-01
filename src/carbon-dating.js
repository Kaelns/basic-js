const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  const LN2 = 0.693;

  if (
    typeof str === "string" &&
    !!+str &&
    !(+str < 0 || +str > MODERN_ACTIVITY)
  ) {
    return calcAge(str);
  } else {
    return false;
  }

  function calcAge(num) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / parseFloat(num)) / (LN2 / HALF_LIFE_PERIOD)
    );
  }
}

module.exports = {
  dateSample,
};
