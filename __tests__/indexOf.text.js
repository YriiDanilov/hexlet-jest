import {indexOf} from "../src/indexOf.js";

describe("indexOf", () => {
  let coll;

  beforeAll(() => {
    coll = ["one", "three", "two", "three", "thour", "five"];
  });

  test("get index element", () => {
    expect(indexOf(coll, "three")).toEqual(1);
  });

  test("get index element from second index", () => {
    expect(indexOf(coll, "three", 2)).toEqual(3);
  });

  test("element not finding", () => {
    expect(indexOf(coll, "six")).toEqual(-1);
  });

  test("fromIndex is negative", () => {
    expect(indexOf(coll, "three", -3)).toEqual(3);
  });
});
