import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  // StrictMode makes sure that for the first time react render runs twice to make sure there is no bug.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
