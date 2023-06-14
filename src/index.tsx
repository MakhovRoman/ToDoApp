import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';
import { createStore } from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

const store = createStore();
export type AppDispatch = typeof store.dispatch;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
