const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let columns = matrix[0].length;
  let flatMatrix = matrix.flat();
  return flatMatrix.reduce((acc, el, id) => {
    if (id - columns >= 0 && flatMatrix[id - columns] === 0) {
      return acc;
    }
    return acc + el;
  });
}

module.exports = {
  getMatrixElementsSum,
};
