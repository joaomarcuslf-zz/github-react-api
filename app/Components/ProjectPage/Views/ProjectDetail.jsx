/* @flow */
import React from 'react';

export default class ProjectDetail extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  componentWillUpdate() {
  }

  render(): ?React$Element<div> {
    return(
      <div className="column is-6">
        {this.props.projectName}
      </div>
    );
  }
}
