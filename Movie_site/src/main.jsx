import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogContextProvider } from "./context/logContext";

createRoot(document.getElementById('root')).render(
  <LogContextProvider>
    <App />
  </LogContextProvider>
)
