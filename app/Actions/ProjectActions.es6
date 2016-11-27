/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';

function detailProject(project: object) {
  dispatcher.dispatch({
    type: 'DETAIL_PROJECT',
    project: project
  });
}

function detailProjectFromName(projectName: string) {
  dispatcher.dispatch({
    type: 'DETAIL_PROJECT_FROM_NAME',
    projectName: projectName
  });
}

export default {
  detailProject: detailProject,
  detailProjectFromName: detailProjectFromName
};
