import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import rootReducer from './lib/store/reducers/index';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AuthProvider } from './lib/context/AuthProvider';

const isProduction = process.env.NODE_ENV === 'production';
let store = null;

if (isProduction) {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  store = createStoreWithMiddleware(rootReducer, {
    authentication: { authenticated: localStorage.getItem('token_id') },
  });
} else {
  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
  store = createStoreWithMiddleware(rootReducer, {
    authentication: { authenticated: localStorage.getItem('token_id') },
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <div className="offset-xl-1 col-xl-10">
            <App />
          </div>
        </div>
      </div>
    </Provider>
  </AuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
