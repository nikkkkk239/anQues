import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BlockContextProvider } from './Helper/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlockContextProvider><App /></BlockContextProvider>
    
  </StrictMode>,
)
