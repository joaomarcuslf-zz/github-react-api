/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher/dispatcher.es6';
import ProjectsHelper from '../Helpers/ProjectsHelper.es6';

class ProjectPageStore extends EventEmitter {
  constructor() {
    super();

    this.projects = [];
    this.project = {};
    this.helpers = {
      projectsHelper: new ProjectsHelper()
    };

    fetch('https://api.github.com/users/globocom/repos', {
      method: 'GET',
      mode: 'cors', // Same Origin
      type: 'all'
    })
      .then((response: object): object => {
        // Fetch API will give an response with promise
        return response.json();
      })
      .then((result: object) => {
        this.projects = this.helpers.projectsHelper.sortProjectBy('stars', result);

        this.emit('change');
      }, (error: object) => {
        // handle network error
        console.error(error);
      });
  }

  getProjects(): object {
    return this.projects;
  }

  detailProject(project: object) {
    this.project = project;

    this.getProjectCommits(project.name);

    this.emit('change');
  }

  getProjectDetails(): object {
    return this.project;
  }

  getProjectCommits(projectName: string) {
    fetch(`https://api.github.com/repos/globocom/${projectName}/commits`, {
      method: 'GET',
      mode: 'cors', // Same Origin
      type: 'all'
    })
      .then((response: object): object => {
        // Fetch API will give an response with promise
        return response.json();
      })
      .then((result: object) => {
        this.commits = result;

        this.emit('change');
      }, (error: object) => {
        // handle network error
        console.error(error);
      });
  }

  handleActions(action: object) {
    switch(action.type) {
      case 'DETAIL_PROJECT':
        this.detailProject(action.project);
        break;
      default:
        break;
    }
  }
}

const projectPageStore = new ProjectPageStore();
dispatcher.register(projectPageStore.handleActions.bind(projectPageStore));

export default projectPageStore;
