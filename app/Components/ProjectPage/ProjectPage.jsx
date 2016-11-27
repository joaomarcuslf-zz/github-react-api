/* @flow */
import React from 'react';

import ProjectsList from './Views/ProjectsList.jsx';
import ProjectDetail from './Views/ProjectDetail.jsx';

export default class ProjectPage extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <section className="container is-fluid">
        <div className="columns">
          <ProjectsList />
          <ProjectDetail />
        </div>
      </section>
    );
  }
}
