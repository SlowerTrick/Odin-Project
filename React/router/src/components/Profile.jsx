import { useParams } from "react-router";
import Navbar from "./Navbar.jsx";

export default function Profile() {
    const { username } = useParams();

    return (
        <div>
            <Navbar />

            <h1 key={username} className="fade-in">
                {username}'s Profile
            </h1>
        </div>
    );
}
