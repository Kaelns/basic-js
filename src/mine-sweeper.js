const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const board = [...Array(height)].map((el) => (el = Array(width).fill(0)));

  const surroundingСells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  board.forEach((row, y) =>
    row.forEach((_, x) =>
      surroundingСells.forEach(([dx, dy]) => {
        const state = !!(matrix[y + dy] && matrix[y + dy][x + dx]);
        return (board[y][x] += state);
      })
    )
  );

  return board;
}

module.exports = {
  minesweeper,
};
