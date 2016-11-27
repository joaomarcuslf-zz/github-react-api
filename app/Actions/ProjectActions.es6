/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';

function detailProject(project: object) {
  dispatcher.dispatch({
    type: 'DETAIL_PROJECT',
    project: project
  });
}

export default {
  detailProject: detailProject
};
