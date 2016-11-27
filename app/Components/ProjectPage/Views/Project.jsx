/* @flow */
import React from 'react';
import { Link } from 'react-router';
import ProjectActions from '../../../Actions/ProjectActions.es6';

export default class Project extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleClick() {
    ProjectActions.detailProject(this.props.project);
  }

  render(): ?React$Element<div> {
    return(
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container is-fluid">
            <h1 className="title">
              <Link to={`/${this.props.project.name}`} onClick={this.handleClick}>
                {this.props.project.full_name}
              </Link>
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
