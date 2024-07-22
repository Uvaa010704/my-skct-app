//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/Reducer';
import MainComp from './Redux/MainComp';
import reportWebVitals from './reportWebVitals';
import Summa from './Summa/Summa';
import BasiCrud from './BasicCrud/BasiCrud';
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
 <BasiCrud/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();