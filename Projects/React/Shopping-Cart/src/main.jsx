import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";
import './styles/reset.css'
import './styles/globals.css'

const router = createBrowserRouter(routes, {
    basename: import.meta.env.BASE_URL,
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
