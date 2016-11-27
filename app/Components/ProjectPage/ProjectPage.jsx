/* @flow */
import React from 'react';

import ProjectsList from './Views/ProjectsList.jsx';
import ProjectDetail from './Views/ProjectDetail.jsx';

import ProjectActions from '../../Actions/ProjectActions.es6';

export default class ProjectPage extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  componentWillMount() {
    // Have an projectName on URL
    let projectName = this.props.params.projectName;

    if(projectName) {
      ProjectActions.detailProjectFromName(projectName);
    }
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <section className="application-container">
        <div className="columns is-gapless is-mobile is-desktop">
          <ProjectsList />
          <ProjectDetail />
        </div>
      </section>
    );
  }
}
