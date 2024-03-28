
import { fill } from "../src/fill.js";

describe("test fill", () => {

  let arr

  beforeEach(() => {
    arr = [1, 2, 3, 4];
  });

  test('normally job', () => {
    expect(fill(arr, '*', 1, 3)).toEqual([1, '*', '*', 4])
  })

  test('without range', () => {
    expect(fill(arr, '*')).toEqual(['*', '*', '*', '*'])
  })

  test('last element of range', () => {
    expect(fill(arr, '*', 4)).toEqual([1, 2, 3, 4])
  })

  test('over range elements', () => {
    expect(fill(arr, '*', 0, 10)).toEqual(['*', '*', '*', '*'])
  })
});
