/* @flow */
import React from 'react';

import Project from './Project.jsx';
import ProjectPageStore from '../../../Stores/ProjectPageStore.es6';

export default class ProjectList extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.state = { projects: ProjectPageStore.getProjects() };
  }

  componentWillMount() {
    ProjectPageStore.on('change', () => {
      this.getProjects();
    });
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  componentWillUnmount() {
    ProjectPageStore.removeListener('change', this.getProjects);
  }

  getProjects() {
    this.setState({ projects: ProjectPageStore.getProjects() });
  }

  render(): ?React$Element<div> {
    let projectsList = this.state.projects
      .map((project: objects): ?React$Element<div> => {
        return(
          <div key={project.id} className="container">
            <Project project={project} />
          </div>
        );
      });

    return(
      <div className="column is-6 is-overflown">
        <div className="container">
          {projectsList}
        </div>
      </div>
    );
  }
}
