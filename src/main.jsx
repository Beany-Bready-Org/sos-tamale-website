import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Swiper.js
import { register } from 'swiper/element/bundle';
register();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
