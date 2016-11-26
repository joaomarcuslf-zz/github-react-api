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

  render(): ?React$Element<div> {
    debugger;
    return(
      <div className="column is-4">
        ProjectDetail
        <br />
        {this.props.projectName}
      </div>
    );
  }
}
