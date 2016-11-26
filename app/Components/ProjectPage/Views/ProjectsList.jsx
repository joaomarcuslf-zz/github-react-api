/* @flow */
import React from 'react';

import Project from './Project.jsx';

export default class ProjectList extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    let projectsList = this.props.projects
      .map((project: objects): ?React$Element<div> => {
        return(
          <div key={project.id} className="container">
            <Project project={project} />
          </div>
        );
      });

    return(
      <div className="column is-6">
        <div className="container">
          {projectsList}
        </div>
      </div>
    );
  }
}
