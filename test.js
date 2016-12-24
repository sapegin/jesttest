const fn = require('./index.js');

it('should console log', () => {
    console.log('I am test');
    const result = fn();
	expect(result).toBe(42);
});
