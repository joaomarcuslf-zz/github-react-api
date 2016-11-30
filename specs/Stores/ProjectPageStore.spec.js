const expect = require('../test-helper').default.expect;
const fetch = require('fetch-mock');

const ProjectActions = require('../../app/Actions/ProjectActions.es6').default;

const projectFactory = function(name, stargazers_count) {
  return {
    name: name,
    stargazers_count: stargazers_count
  };
}

const commitFactory = function(name) {
  return {
    name: name
  };
}

const projects = [
  projectFactory('mock1', 20),
  projectFactory('mock2', 10),
  projectFactory('mock3', 150),
  projectFactory('mock4', 0),
  projectFactory('mock5', 15)
];

const commits = [];

for (let i = 0; i < 200; i++) {
  commits.push(commitFactory('mock'+i));
}

fetch.get('*', projects);

const ProjectPageStore = require('../../app/Stores/ProjectPageStore.es6').default;

describe('ProjectPageStore', () => {
  describe('projects', () => {
    it('should be equals 5', () => {
      expect(ProjectPageStore.projects.length)
      .to.be.equals(5);
    });

    it('first should be with more stars', () => {
      let expectedResult = projectFactory('mock3', 150);

      expect(ProjectPageStore.projects[0])
      .to.be.deep.equals(expectedResult);
    });

    it('last should be with less stars', () => {
      let expectedResult = projectFactory('mock4', 0);

      expect(ProjectPageStore.projects[4])
      .to.be.deep.equals(expectedResult);
    });
  });

  fetch.restore();
  fetch.get('*', commits);

  describe('detailProject', () => {
    it('store detailed project should be the choosen', () => {
      let choosenProject = projectFactory('mock2', 10);
      ProjectActions.detailProject(choosenProject);

      expect(ProjectPageStore.project)
      .to.be.deep.equals(choosenProject);
    });

    it('commits must have been requested', () => {
      expect(ProjectPageStore.commits.length)
      .to.be.equals(200);
    });
  });

  describe('getCommits', () => {
    it('commits to be shown must be grouped by 20', () => {
      expect(ProjectPageStore.getCommits().length)
      .to.be.equals(20);
    });
  });

  describe('getMore20', () => {
    it('shown commits must be 40 now', () => {
      ProjectActions.getMore20();

      expect(ProjectPageStore.getCommits().length)
      .to.be.equals(40);
    });
  });
});
