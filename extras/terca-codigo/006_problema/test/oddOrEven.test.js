const { typeNumber } = require("../src/oddOrEven");
const assert = require('node:assert')

describe('#typeNumber', () => {
    it('Should return "even" for array [0]', () => {
        assert.strictEqual(typeNumber([0]), 'even')
    })

    it('Should return "even" for array [-1023, 1, -2]', () => {
        assert.strictEqual(typeNumber([-1023, 1, -2]), 'even')
    })

    it('Should return "odd" for array [1023, 1, 3]', () => {
        assert.strictEqual(typeNumber([1023, 1, 3]), 'odd')
    })
});