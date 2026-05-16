import { Link } from "react-router"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item1">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item2">
                    <Link to="/profile/Artur">Artur</Link>
                </li>
                <li className="navbar-item3">
                    <Link to="/profile/Slower">Slower</Link>
                </li>
                <li className="navbar-item4">
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </nav>
    )
}
