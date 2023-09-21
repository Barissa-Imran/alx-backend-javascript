/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it("rounding down b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it("rounding a and b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });
});
