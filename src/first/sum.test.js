const sum = require('./sum');

test('足し算ができること', () => {
    expect(sum(1, 2)).toBe(3);
});