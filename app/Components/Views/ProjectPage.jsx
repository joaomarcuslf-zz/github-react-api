/* @flow */
import React from 'react';

import ProjectsList from './ProjectsList.jsx';
import ProjectDetail from './ProjectDetail.jsx';

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
        <nav className="header notification">
          This will be the Header
        </nav>

        <span className="hero notification">
          ProjectPage
        </span>

        <div className="columns">
          <ProjectsList />
          <ProjectDetail />
        </div>

        <footer className="footer notification">
          This will be the Footer
        </footer>
      </section>
    );
  }
}
