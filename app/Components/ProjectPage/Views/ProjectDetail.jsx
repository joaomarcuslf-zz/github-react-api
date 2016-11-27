/* @flow */
import React from 'react';

import ProjectPageStore from '../../../Stores/ProjectPageStore.es6';
import MainDetails from './MainDetails.jsx';

export default class ProjectDetail extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.state = { project: ProjectPageStore.getProjectDetails() };
  }

  componentWillMount() {
    ProjectPageStore.on('change', () => {
      this.getProjectDetails();
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

  render(): ?React$Element<div> {
    let componentClass = (this.state.project.hasOwnProperty('name')) ?
      'hero is-light' :
      'is-hidden';
    debugger;
    return(
      <div className='column is-6 is-not-overflown'>
        <section className={componentClass}>
          <div className='hero-body'>
            <MainDetails project={this.state.project} />
          </div>
        </section>
      </div>
    );
  }
}
