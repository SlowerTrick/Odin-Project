import App from "./components/App";
import Profile from "./components/Profile";
import About from "./components/About.jsx";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "profile/:username",
        element: <Profile />
    },
    {
        path: "about",
        element: <About />
    }
]

export default routes;
