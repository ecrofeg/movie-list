import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.scss';
import App from './App';
import { rootReducer } from './store/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(...[logger, thunk]));

ReactDOM.render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.getElementById('root'));

registerServiceWorker();
