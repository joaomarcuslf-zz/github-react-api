/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './Components/App.jsx';
import ProjectPage from './Components/ProjectPage/ProjectPage.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProjectPage} />
      <Route path = ":projectName" component={ProjectPage} />
    </Route>
  </Router>,
  document.getElementById('appContainer')
);
