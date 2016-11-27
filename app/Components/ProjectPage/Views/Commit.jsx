/* @flow */
import React from 'react';

export default class Commit extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    let imageTagUrl = (this.props.commit.committer) ?
      this.props.commit.committer.avatar_url :
      '';

      let login = (this.props.commit.committer) ?
        '@' + this.props.commit.committer.login :
        '';

    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={imageTagUrl} alt="User Gravatar Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p className="paragraph-break">
                <strong>{this.props.commit.commit.committer.name}</strong>
                <small>{login}</small>
                <br />
                {this.props.commit.commit.message}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
