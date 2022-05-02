const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  let additionRepeated = generateStr(
    String(addition),
    additionRepeatTimes,
    additionSeparator
  );

  let strToRepeat = String(str) + additionRepeated;

  return generateStr(strToRepeat, repeatTimes, separator);
}

function generateStr(strToRepeat, repeatTimes, separator) {
  return new Array(repeatTimes).fill(strToRepeat).join(separator);
}

module.exports = {
  repeater,
};
