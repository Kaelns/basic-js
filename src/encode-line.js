const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return str;
  }

  let counter = 1;
  let countTimesOfChars = [];
  let arrOfChars = str.split("");

  arrOfChars.forEach((el, id) => {
    if (id - 1 >= 0) {
      let prev = arrOfChars[id - 1];
      if (el === prev) {
        counter++;
      } else {
        pushCountTimesOfChar(countTimesOfChars, counter, prev);
        counter = 1;
      }

      if (id === arrOfChars.length - 1) {
        pushCountTimesOfChar(countTimesOfChars, counter, el);
      }
    }
  });

  return countTimesOfChars.join("");
}

function pushCountTimesOfChar(countTimesOfChars, counter, el) {
  counter !== 1
    ? countTimesOfChars.push(counter, el)
    : countTimesOfChars.push(el);
  return countTimesOfChars;
}

module.exports = {
  encodeLine,
};
