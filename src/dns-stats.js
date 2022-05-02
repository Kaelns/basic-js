const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const countDNSStats = {};

  domains.forEach((el) => {
    let reversed = `${el.split(".").reverse().join(".")}`;
    let reversedWithDot = `.${reversed}`;

    while (reversedWithDot) {
      let id = reversedWithDot.lastIndexOf(".");

      countDNSStats[reversedWithDot] =
        (countDNSStats[reversedWithDot] || 0) + 1;
      reversedWithDot = id !== -1 ? reversedWithDot.slice(0, id) : "";
    }
  });

  return countDNSStats;
}

module.exports = {
  getDNSStats,
};
