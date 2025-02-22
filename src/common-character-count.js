const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let arrOfCharsS1 = Array.from(s1);
  let arrOfCharsS2 = Array.from(s2);

  arrOfCharsS1.forEach((el) => {
    let id = arrOfCharsS2.indexOf(el);

    if (id >= 0) {
      arrOfCharsS2.splice(id, 1);
      counter++;
    }
  });

  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
