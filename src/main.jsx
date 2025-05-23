import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ReactQ from './Reactq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactQ />
  </StrictMode>,
)
