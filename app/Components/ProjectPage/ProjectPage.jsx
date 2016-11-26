/* @flow */
import React from 'react';

import ProjectsList from './Views/ProjectsList.jsx';
import ProjectDetail from './Views/ProjectDetail.jsx';

import ProjectPageStore from '../../Stores/ProjectPageStore.es6';

export default class ProjectPage extends React.Component {
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
    return(
      <section className="container is-fluid">
        <nav className="header notification">
          This will be the Header
        </nav>

        <div className="columns">
          <ProjectsList projects={this.state.projects} />
          <ProjectDetail projectName={this.props.params.projectName} />
        </div>

        <footer className="footer notification">
          This will be the Footer
        </footer>
      </section>
    );
  }
}
