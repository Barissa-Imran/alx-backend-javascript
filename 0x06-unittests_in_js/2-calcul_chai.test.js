/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('whole positive numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
