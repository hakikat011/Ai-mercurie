import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // import your App component from the same directory
import './index.css';

// Wait until the DOM has loaded before rendering the app
document.addEventListener('DOMContentLoaded', (event) => {
    // Render the App component into the 'root' div
    ReactDOM.render(<App />, document.getElementById('root'));
});
  