import slice from "../src/slice.js";

describe("slice", () => {
  let coll;

  beforeEach(() => {
    coll = ["one", "two", "three", "thour", "five"];
  });

  test("without range", () => {
    expect(slice(coll)).toEqual(["one", "two", "three", "thour", "five"]);
  });

  test("slice from...to. Normaly job", () => {
    expect(slice(coll, 1, 4)).toEqual(["two", "three", "thour"]);
  });

  test("slice from...to. Normaly job", () => {
    expect(slice(coll, 3)).toEqual(["thour", "five"]);
  });

  test("slice from negative to positive", () => {
    expect(slice(coll, -4, -2)).toEqual(["two", "three"]);
  });

  test("slice from negative to positive", () => {
    expect(slice(coll, -8, 8)).toEqual([
      "one",
      "two",
      "three",
      "thour",
      "five",
    ]);
  });
});
