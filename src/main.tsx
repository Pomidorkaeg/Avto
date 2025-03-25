import React from 'react'
import './index.css'

// Improved rendering that ensures all elements are loaded before display
const root = document.getElementById('root')!;

// Create and render the app
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

);
