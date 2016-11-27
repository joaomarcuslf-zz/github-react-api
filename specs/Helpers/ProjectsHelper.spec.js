const chai = require('chai');

const expect = chai.expect;

const ProjectHelper = require('../../app/Helpers/ProjectsHelper.es6');

const HelperTest = new ProjectHelper.default();

const arrayTest = [
  {
    name: 'object1',
    stargazers_count: 5
  },
  {
    name: 'object2',
    stargazers_count: 10
  },
  {
    name: 'object3',
    stargazers_count: 1
  },
  {
    name: 'object4',
    stargazers_count: 0
  }
];

describe('ProjectHelper', () => {

	describe('getFromName', () => {
    it('should return the desired element if it exists', () => {
      let result = HelperTest.getFromName('object2', arrayTest);
			let expectedResult = {
        name: 'object2',
        stargazers_count: 10
      };

			expect(result).to.be.deep.equal(expectedResult);
		});

    it('should return an empty object if it doesn\'t exists', () => {
			let result = HelperTest.getFromName('object5', arrayTest);
			let expectedResult = {};

			expect(result).to.be.deep.equal(expectedResult);
		});
	});

  describe('getSliceOfArray', () => {
    it('should return the right slice of the array', () => {
      let result = HelperTest.getSliceOfArray(arrayTest, 0, 2);
			let expectedResult = [
        {
          name: 'object1',
          stargazers_count: 5
        },
        {
          name: 'object2',
          stargazers_count: 10
        }
      ];

			expect(result).to.be.deep.equal(expectedResult);
		});

    it('should return the full array if it pass the lenght', () => {
      let result = HelperTest.getSliceOfArray(arrayTest, 0, 50);

			expect(result).to.be.deep.equal(arrayTest);
		});
	});


  describe('sortProjectBy', () => {
    describe('stargazers_count', () => {
      it('should sort projects by the amount of stars', () => {
        let result = HelperTest.sortProjectBy('stars', arrayTest);
        let expectedResult = [
          {
            name: 'object2',
            stargazers_count: 10
          },
          {
            name: 'object1',
            stargazers_count: 5
          },
          {
            name: 'object3',
            stargazers_count: 1
          },
          {
            name: 'object4',
            stargazers_count: 0
          }
        ];

  			expect(result).to.be.deep.equal(expectedResult);
      });
    });

    describe('nothing', () => {
      it('should be the same array', () => {
        let result = HelperTest.sortProjectBy('nothing', arrayTest);

  			expect(result).to.be.deep.equal(arrayTest);
      });
    });

  });
});
