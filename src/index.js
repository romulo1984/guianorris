import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GuiaNorris from './components/GuiaNorris';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import store from './store';

// Provider is a top-level component that wrapps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
	    <Route path="*" component={GuiaNorris} />
	  </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();


