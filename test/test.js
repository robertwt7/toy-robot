const { assert } = require("chai");
const chai = require("chai");
const sinon = require("sinon");
const { directionStr } = require("../engine");
const Robots = require("../Robots");
const engine = require("../engine");

describe("Check Robots", () => {
  const robot = new Robots(1, 1, "WEST");
  describe("Robot data", () => {
    it("Coordinates should be number", () => {
      assert.typeOf(robot.x, "number");
      assert.typeOf(robot.y, "number");
    });

    it("Direction should be assigned to number", () => {
      assert.typeOf(robot.direction, "number");
    });
  });

  describe("Robot functions", () => {
    it("Turning right on direction should return 0 when the value is more or equal than 3", () => {
      robot.turnRight();
      assert.equal(robot.direction, 0);
    });

    it("Turning left on direction should return 3 when the value is less or equal than 0", () => {
      robot.direction = 0;
      robot.turnLeft();
      assert.equal(robot.direction, 3);
    });

    it("Should print report", () => {
      const spy = sinon.spy(console, "log");
      robot.printReport();
      assert(spy.calledWith("1,1,WEST"));
    });
  });
});
