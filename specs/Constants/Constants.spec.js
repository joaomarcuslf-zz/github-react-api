const expect = require('../test-helper').default.expect;

const Constants = require('../../app/Constants/Constants.es6').default;

describe('Constants', () => {
	describe('DETAIL_PROJECT', () => {
    it('should return the string format', () => {
      let result = Constants.DETAIL_PROJECT;
			let expectedResult = 'DETAIL_PROJECT';

			expect(result).to.be.equal(expectedResult);
		});
	});

  describe('DETAIL_PROJECT_FROM_NAME', () => {
    it('should return the string format', () => {
      let result = Constants.DETAIL_PROJECT_FROM_NAME;
			let expectedResult = 'DETAIL_PROJECT_FROM_NAME';

			expect(result).to.be.equal(expectedResult);
		});
	});

  describe('GET_MORE_20', () => {
    it('should return the string format', () => {
      let result = Constants.GET_MORE_20;
			let expectedResult = 'GET_MORE_20';

			expect(result).to.be.equal(expectedResult);
		});
	});
});
