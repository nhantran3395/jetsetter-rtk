import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { makeServer } from './api';

import Application from './components/application';
import { store } from './store';

import './index.css';

const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);
