const Sum = require('./sum.js')

test("properly add two numbers", () => {
  expect(Sum(1,2)).toBe(3)
})