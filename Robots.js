const engine = require("./engine");

module.exports = class Robots {
  constructor(x, y, direction) {
    this.x = parseInt(x, 10);
    this.y = parseInt(y, 10);

    // Set direction as index
    const dirIndex = engine.directionStr.findIndex(
      (item) => item === direction
    );
    this.direction = dirIndex;
  }

  move = (board) => {
    const dirIndex = this.direction;
    const dirStr = engine.directionStr[dirIndex];
    const [x, y] = engine.directionConst[dirStr];
    const newDir = [this.x + x, this.y + y];
    if (engine.isValid(board, newDir)) {
      this.x = newDir[0];
      this.y = newDir[1];
    } else {
      console.log("Move Invalid");
    }
  };

  turnLeft = () => {
    if (this.direction <= 0) {
      this.direction = 3;
    } else {
      this.direction -= 1;
    }
  };

  turnRight = () => {
    if (this.direction >= 3) {
      this.direction = 0;
    } else {
      this.direction += 1;
    }
  };

  printReport = () => {
    console.log(`${this.x},${this.y},${engine.directionStr[this.direction]}`);
  };
};
