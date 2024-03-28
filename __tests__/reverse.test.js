import reverse from '../src/reverse.js';

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
    expect(reverse('h')).toEqual('h');
})