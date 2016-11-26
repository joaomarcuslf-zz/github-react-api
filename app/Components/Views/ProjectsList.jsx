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
    return(
      <div className="column is-8">
        ProjectList
      </div>
    );
  }
}
