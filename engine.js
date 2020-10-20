const directionConst = {
  NORTH: [0, 1],
  EAST: [1, 0],
  SOUTH: [0, -1],
  WEST: [-1, 0],
};

const directionStr = ["NORTH", "EAST", "SOUTH", "WEST"];

// Must be square size
function generateBoard(size) {
  const board = new Array(size);
  for (let index = 0; index < size + 1; index += 1) {
    const row = new Array(size);
    for (let col = 0; col < size; col += 1) {
      row[col] = 1;
    }
    board[index] = row;
  }
  return board;
}

function isValid(board, movement) {
  return Boolean(board[movement[0]][movement[1]]);
}

module.exports = {
  directionConst,
  directionStr,
  generateBoard,
  isValid,
};
