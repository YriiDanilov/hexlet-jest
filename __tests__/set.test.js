import set from '../src/set.js';

let obj
let objectCopy

beforeEach(() => {
    obj =  { a: [{ b: { c: 3 } }] };
    objectCopy = {...obj};
})

test('change element', () => {
    set(obj, 'a', 'value');
    objectCopy.a = 'value';
    expect(obj).toEqual(objectCopy);
})

test('add element', () => {
    set(obj, ['b'], 'value')
    objectCopy.b ='value'
    expect(obj).toEqual(objectCopy);
})

test('nested element', () => {
    set(obj, 'a[0].b.c', 4);
    objectCopy.a[0].b.c = 4;
    expect(obj).toEqual(objectCopy);
})

