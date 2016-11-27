/* @flow */
import React from 'react';

export default class Project extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div className='container is-fluid'>
        <h1 className='title'>
          Project name:<br />
        <strong>{this.props.project.name}</strong>
        </h1>
        <h2 className='subtitle columns is-mobile is-desktop'>
          <div className='column'>
            Stars: {this.props.project.stargazers_count}
          </div>
          <div className='column'>
            Forks: {this.props.project.forks_count}
          </div>
        </h2>
      </div>
    );
  }
}
