const readline = require("readline");
const fs = require("fs");
const engine = require("./engine");
const Robots = require("./Robots");

let fileStream;
process.argv.forEach((val, index, array) => {
  if (array.length > 3) {
    console.log("Too many arguments");
    process.exit();
  } else if (array.length === 2) {
    console.log("Need file input");
    process.exit();
  }

  fileStream = fs.createReadStream(array[2]);
});

// Read each line
const readInterface = readline.createInterface({
  input: fileStream,
  output: process.stdout,
  crlfDelay: Infinity,
  console: false,
  terminal: false,
});

const board = engine.generateBoard(5);
let robot;

readInterface.on("line", function (line) {
  // Parse Input
  const spaceIndex = line.indexOf(" ");
  let command = line;
  let directions = "";
  if (spaceIndex > 0) {
    command = line.substr(0, spaceIndex);
    directions = line.substr(spaceIndex + 1);
  }

  // Process command
  switch (command) {
    case "PLACE": {
      const directionsArr = directions.split(",");
      if (directionsArr.length < 3) {
        console.log("Place command is not right");
      }
      if (engine.isValid(board, directionsArr)) {
        robot = new Robots(
          directionsArr[0],
          directionsArr[1],
          directionsArr[2]
        );
      } else {
        console.log("Invalid coordinates");
      }
      break;
    }
    case "MOVE": {
      if (!robot) {
        console.log("Robot not initialised");
      } else {
        robot.move();
      }
      break;
    }
    case "LEFT":
      robot.turnLeft();
      break;
    case "RIGHT":
      robot.turnRight();
      break;
    case "REPORT":
      robot.printReport();
      break;
    default:
      console.log("Invalid move");
      break;
  }
});
