const engine = require("./engine");

module.exports = class Robots {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;

    // Set direction as index
    const dirIndex = engine.directionStr.findIndex(
      (item) => item === direction
    );
    this.direction = dirIndex;
  }

  move = (board) => {
    const dirIndex = this.direction;
    if (
      engine.isValid(
        board,
        engine.directionConst[engine.directionStr[dirIndex]]
      )
    ) {
      const [x, y] = engine.directionConst[engine.directionStr[dirIndex]];
      this.x = x;
      this.y = y;
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
