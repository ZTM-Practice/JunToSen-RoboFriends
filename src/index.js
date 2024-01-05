import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import searchRobotsSlice from './redux/searchSlice';
import requestRobotsSlice from './redux/requestSlice';
import 'tachyons';
import { register } from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const store = configureStore({
  reducer: {
    searchRobots: searchRobotsSlice,
    requestRobots: requestRobotsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
register();
