/* @flow */
import React from 'react';

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
            {project.full_name}
          </div>
        );
      });

    return(
      <div className="column is-8">
        ProjectList
        <br />
        <div className="container">
          {projectsList}
        </div>
      </div>
    );
  }
}
