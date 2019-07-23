import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import ReduxStore from 'state/store/ReduxStore';
import Routes from 'routing/Routes';
import { IntlProvider } from 'react-intl';
import localeEN from 'common/i18n/en.json'
import './index.scss';

export const history = createBrowserHistory({ //eslint-disable-line
  basename: '',
});

const locale = 'en';

const languages = {
  en: localeEN,
};

ReactDOM.render(
  <IntlProvider locale={locale} messages={languages[locale]}>
    <Provider store={ReduxStore.store}>
      <Router history={history}>
        <Route component={Routes} />
      </Router>
    </Provider>
  </IntlProvider>,
  document.getElementById('root'),
);
