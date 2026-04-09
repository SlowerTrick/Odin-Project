import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Greeting, BestFoodText, BestFoodImg } from './Greeting.jsx'
import { Conversion, Bio, TodoList } from './Html-to-jsx.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* 
            <Greeting />
            <BestFoodText />
            <BestFoodImg />
        */}
        <Conversion />
        <Bio />
        <TodoList />
    </StrictMode>,
)
