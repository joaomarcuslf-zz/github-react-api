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
      <section className="hero">
        <div className="hero-body">
          <div className="container is-fluid">
            <h1 className="title">
              {this.props.project.full_name}
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
