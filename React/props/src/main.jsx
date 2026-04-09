import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './props'
// import App from './list'
//import App from './ternary.jsx'
import App from './conditional.jsx'

createRoot (document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
