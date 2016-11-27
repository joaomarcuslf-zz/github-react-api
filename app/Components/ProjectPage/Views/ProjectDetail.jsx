/* @flow */
import React from 'react';

import ProjectPageStore from '../../../Stores/ProjectPageStore.es6';

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
    return(
      <div className='column is-6 is-not-overflown'>
        <section className={componentClass}>
          <div className='hero-body'>
            <div className='container is-fluid'>
              <h1 className='title'>
                Projet name:<br />
                <strong>{this.state.project.name}</strong>
              </h1>
              <h2 className='subtitle columns'>
                <div className='column'>
                  Stars: {this.state.project.stargazers_count}
                </div>
                <div className='column'>
                  Forks: {this.state.project.forks_count}
                </div>
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
