/* @flow */
import React from 'react';
import Commit from './Commit.jsx';

import ProjectActions from '../../../Actions/ProjectActions.es6';

export default class CommitsList extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleClick() {
    ProjectActions.getMore20();
  }

  render(): ?React$Element<div> {
    let commitsList = this.props.commits
      .map((commit: objects, index: integer): ?React$Element<div> => {
        return(
          <div key={index}>
            <Commit commit={commit} />
          </div>
        );
      });

      let buttonClass = 'button is-info get-more-button ' + ((commitsList.length > 0) ? 'is-outlined' : 'is-disabled');

    return(
      <div className='container is-fluid'>
        <div className='commit-list'>
          {commitsList}
        </div>
        <button className={buttonClass} onClick={this.handleClick}>Get More</button>
      </div>
    );
  }
}
