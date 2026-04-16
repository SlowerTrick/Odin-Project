import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bug from './Bug.jsx'
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
