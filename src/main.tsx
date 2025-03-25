import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'

// Improved rendering that ensures all elements are loaded before display
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

// Create and render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
