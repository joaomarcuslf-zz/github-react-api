const expect = require('../test-helper').default.expect;

const ProjectActions = require('../../app/Actions/ProjectActions.es6').default;

const dispatcher = require('../../app/Dispatcher/dispatcher.es6').default;

describe('ProjectActions', () => {
  describe('DETAIL_PROJECT', () => {
    it('It should send to dispatcher DETAIL_PROJECT action', () => {
      let tokenId = dispatcher.register((action) => {
        expect(action.type).to.be.equals('DETAIL_PROJECT');
      });

      ProjectActions.detailProject({});

      dispatcher.unregister(tokenId);
    });
  });

  describe('DETAIL_PROJECT_FROM_NAME', () => {
    it('It should send to dispatcher DETAIL_PROJECT_FROM_NAME action', () => {
      let tokenId = dispatcher.register((action) => {
        expect(action.type).to.be.equals('DETAIL_PROJECT_FROM_NAME');
      });

      ProjectActions.detailProjectFromName('');

      dispatcher.unregister(tokenId);
    });
  });

  describe('GET_MORE_20', () => {
    it('It should send to dispatcher GET_MORE_20 action', () => {
      let tokenId = dispatcher.register((action) => {
        expect(action.type).to.be.equals('GET_MORE_20');
      });

      ProjectActions.getMore20();

      dispatcher.unregister(tokenId);
    });
  });
});
