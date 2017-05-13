var expect = require('expect');


describe('App', () => {
    it('should be a number', () => {
        expect(1).toBe(1);
    });

    it('should be a string', () => {
        expect('anton').toBeA('string');
    });
});

describe('Components', () => {
    it('should be a number', () => {
        expect(1).toBe(1);
    });

    it('should be a string', () => {
        expect('anton').toBeA('string');
    });
});