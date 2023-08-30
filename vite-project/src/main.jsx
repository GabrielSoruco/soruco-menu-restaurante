import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CustomNavbar from './components/CustomNavbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CustomNavbar/>
  </React.StrictMode>,
)
