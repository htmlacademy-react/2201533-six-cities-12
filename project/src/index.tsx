import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
//import {fillOffers} from './store/actions';
import {fetchOffers} from './store/api-actions';

//store.dispatch(fillOffers());
//console.log('index');
store.dispatch(fetchOffers());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);


