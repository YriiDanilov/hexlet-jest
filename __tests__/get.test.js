import { get } from '../src/get.js';


describe('get', () => {

    let coll

    beforeEach( ()=> {
        coll = [1, 2, 3, 4, 5];
    })

    test('Get element by index', () => {
        expect(get(coll, 0)).toEqual(1);
    })

    test('Finding an element by a non-existent index', () => {
        expect(get(coll, 5, 'nothing')).toEqual('nothing');
    })

    test('Finding an element by negative index', () => {
        expect(get(coll, 5)).toEqual(null);
    })
})