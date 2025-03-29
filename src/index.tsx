import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

import { BrowserRouter as Router } from 'react-router-dom';

// Ensure that the 'root' element exists and is correctly typed as HTMLElement
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Measure performance if needed
reportWebVitals();

