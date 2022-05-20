const ArrayClone = require("./arrayclone");

test("Check if array is cloned", () => {
  let arr = [1, 2, 3];
  expect(ArrayClone(arr)).toEqual(arr);
});
