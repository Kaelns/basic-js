const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  const DISCARD_NEXT = "--discard-next";
  const DISCARD_PREV = "--discard-prev";
  const DOUBLE_NEXT = "--double-next";
  const DOUBLE_PREV = "--double-prev";

  let res = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    const lastElemInResult = lastInResult(res);
    const prevInArr = prevInInitialArr(arr, i);
    const elem = arr[i];

    switch (elem) {
      case DISCARD_NEXT:
        i++;
        break;
      case DISCARD_PREV:
        if (lastElemInResult && lastElemInResult === prevInArr) {
          res.pop();
        }
        break;
      case DOUBLE_NEXT:
        const next = arr[i + 1];
        if (next) {
          res.push(next);
        }
        break;
      case DOUBLE_PREV:
        if (prevInArr && lastElemInResult === prevInArr) {
          res.push(prevInArr);
        }
        break;
      default:
        res.push(elem);
    }
  }

  return res;
}

function lastInResult(arr) {
  return arr[arr.length - 1];
}

function prevInInitialArr(arr, i) {
  return arr[i - 1];
}

module.exports = {
  transform,
};
