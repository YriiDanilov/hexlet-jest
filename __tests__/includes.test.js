
import _ from 'lodash';

let coll

beforeEach(() => {
    coll = ['One', true, 3, 10, 'cat', {}, '', 10, false]; 
})

test('includes', () => {
    expect(_.includes(coll, 3)).toBe(true);
    expect(_.includes(coll, 9)).toBe(false);
})

test('find', () => {
    expect(_.find(coll, (item) => item === 10)).toBe(10);
    expect(_.find(coll, (item) => item === true)).toBe(true);
})