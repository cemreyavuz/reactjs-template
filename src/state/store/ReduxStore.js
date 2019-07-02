import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line
import thunk from 'redux-thunk';
import rootReducer from 'state/store/rootReducer';

class ReduxStore {
  constructor() {
    this.store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk)),
    );
  }
}

export default new ReduxStore();
