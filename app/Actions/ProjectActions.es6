/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

function detailProject(project: object) {
  dispatcher.dispatch({
    type: Constants.DETAIL_PROJECT,
    project: project
  });
}

function detailProjectFromName(projectName: string) {
  dispatcher.dispatch({
    type: Constants.DETAIL_PROJECT_FROM_NAME,
    projectName: projectName
  });
}

function getMore20() {
  dispatcher.dispatch({
    type: Constants.GET_MORE_20
  });
}

export default {
  detailProject: detailProject,
  detailProjectFromName: detailProjectFromName,
  getMore20: getMore20
};
