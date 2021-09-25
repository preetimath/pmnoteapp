import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp({

  
  apiKey: "AIzaSyCUYQdLpHPzRwcpoS8MXT-ioag9Aosy4Sk",
  authDomain: "pmnoteapp.firebaseapp.com",
  projectId: "pmnoteapp",
  storageBucket: "pmnoteapp.appspot.com",
  messagingSenderId: "460697755494",
  appId: "1:460697755494:web:01bfa1815ce1def72172a7"


});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
