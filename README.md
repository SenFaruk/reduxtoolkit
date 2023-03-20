# reduxtoolkit

````
npx create-react-app .
````

````
yarn add @reduxjs/toolkit react-redux
````
# src/redux/store.js
````
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
````
# index.js
````
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);



````