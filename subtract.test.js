const subtract = require("./subtract.js");

test("properly subtract two numbers", () => {
  expect(subtract(2, 1)).toBe(1);
});
