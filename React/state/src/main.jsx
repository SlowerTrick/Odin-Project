import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import State from './state.jsx'
import BgColor from './bgColor.jsx'
import FeedbackForm from './feedback.jsx'
import SyncedInputs from './synced.jsx'
import FilterableList from './filter.jsx'
import Person from './person.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Person />
    </StrictMode>,
)
