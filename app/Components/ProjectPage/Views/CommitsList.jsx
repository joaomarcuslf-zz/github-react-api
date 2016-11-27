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

  handleScroll(event) {
    // debugger;
    let parentScrollHeight = event.target.parentNode.scrollHeight;
    let parentscrollTop = event.target.parentElement.scrollTop;
    let targetScrollHeight = event.target.scrollTop;

    let conditionToGetMore = (parentScrollHeight <= parentscrollTop + targetScrollHeight);

    if(conditionToGetMore) {
      ProjectActions.getMore20();
    }

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

    return(
      <div className='container is-fluid commit-list' onScroll={this.handleScroll}>
        {commitsList}
      </div>
    );
  }
}
