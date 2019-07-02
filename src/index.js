import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import ReduxStore from 'state/store/ReduxStore';
import Routes from 'routing/Routes';
import './index.scss';

export const history = createBrowserHistory({ //eslint-disable-line
  basename: '',
});

ReactDOM.render(
  <Provider store={ReduxStore.store}>
    <Router history={history}>
      <Route component={Routes} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
