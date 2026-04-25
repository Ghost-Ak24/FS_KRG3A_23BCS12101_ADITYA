    import React, { useContext } from "react";
    import { UserContext } from "../context/UserContext";

    function Profile() {
    const { username, isLoggedIn } = useContext(UserContext);

    return (
        <div className="card nested">
        <h3>Profile</h3>
        {isLoggedIn ? (
            <p>Welcome, <span>{username}</span>!</p>
        ) : (
            <p>Please log in.</p>
        )}
        </div>
    );
    }

    export default Profile;