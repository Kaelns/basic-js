const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrOfNum = [];
  let nToStr = String(n);

  for (let i = 0; i < nToStr.length; i++) {
    let newNum = nToStr.slice(0, i) + nToStr.slice(i + 1);
    arrOfNum.push(+newNum);
  }

  return Math.max(...arrOfNum);
}

module.exports = {
  deleteDigit,
};
