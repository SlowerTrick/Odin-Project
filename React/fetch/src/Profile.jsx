import { useEffect, useState } from 'react';
import Bio from './Bio.jsx';

const Profile = ({ delay }) => {
    const [imageURL, setImageURL] = useState(null);
    const [bioText, setBioText] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://randomuser.me/api/')
                .then((response) => response.json())
                .then((data) => {
                    const user = data.results[0];

                    setImageURL(user.picture.large);

                    setUsername(
                        `${user.name.first} ${user.name.last}`
                    );

                    setBioText(
                        `${user.location.city}, ${user.location.country}`
                    );
                })
                .catch((error) => console.error(error));
        }, delay);
    }, [delay]);

    return (
        <>
            {imageURL ? (
                <div>
                    <h3>{username}</h3>

                    <img
                        src={imageURL}
                        alt="profile"
                        width="200"
                    />

                    <Bio bioText={bioText} />
                </div>
            ) : (
                    <h1>Loading...</h1>
                )}
        </>
    );
};

export default Profile;
