import more from '../src/more.js'

test('more', () => {
    expect(more(3, 2)).toBeTruthy(); 
    expect(more(3, 7)).not.toBeTruthy();
    expect(more(3, 3)).not.toBeTruthy();
})

