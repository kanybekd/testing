import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './todoSecondPart/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from './reduxx/store'
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter'
import FolderUI from './FolderUI'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <FolderUI />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
