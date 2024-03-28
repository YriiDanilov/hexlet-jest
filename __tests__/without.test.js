import without from '../src/without.js';

test('test without', () => {
    expect(without([1, 2, 4, 5, 9], 1, 9)).toEqual([2, 4, 5]);
    expect(without([])).toEqual([]);
    expect(without([], 1, 9)).toEqual([]);
    expect(without([1, 2, 3, 4], 5, 9)).toEqual([1, 2, 3, 4]);
})