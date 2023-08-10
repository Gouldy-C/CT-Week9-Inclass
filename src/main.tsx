import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './contexts/UserProvider.tsx'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>

    <App />

    </AuthProvider>
  </React.StrictMode>,
)
