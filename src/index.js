import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Global } from './Global';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
