import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// (Step 4) Create the Root component
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// (Step 5) Render Root instead of App
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
