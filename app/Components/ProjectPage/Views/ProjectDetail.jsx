/* @flow */
import React from 'react';

import ProjectPageStore from '../../../Stores/ProjectPageStore.es6';
import MainDetails from './MainDetails.jsx';
import CommitsList from './CommitsList.jsx';

export default class ProjectDetail extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.state = { project: ProjectPageStore.getProjectDetails(), commits: ProjectPageStore.getCommits() };
  }

  componentWillMount() {
    ProjectPageStore.on('change', () => {
      this.getProjectDetails();
      this.getCommits();
    });
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  componentWillUnmount() {
    ProjectPageStore.removeListener('change', this.getProjectDetails);
  }

  getProjectDetails() {
    this.setState({ project: ProjectPageStore.getProjectDetails() });
  }

  getCommits() {
    this.setState({ commits: ProjectPageStore.getCommits() });
  }

  render(): ?React$Element<div> {
    let componentClass = (this.state.project.hasOwnProperty('name')) ?
      'hero is-light' :
      'is-hidden';
    return(
      <div className='column is-6'>
        <section className={componentClass}>
          <div className='hero-body'>
            <MainDetails project={this.state.project} />
            <hr />
            <CommitsList commits={this.state.commits} />
          </div>
        </section>
      </div>
    );
  }
}
