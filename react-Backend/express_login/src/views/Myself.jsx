import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Myself = () => {
    const [user, setUser] = useState(null);

    useEffect(async () => {
        try {
            const token = localStorage.getItem("token")

            const response = await axios.get("http://localhost:8000/users/myself", {
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            if (response.status === 200) {
                setUser(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }, []);

    if (!user) {
        return (
            <div>
                You don't have acces to this page, please log in
            </div>
        );
    } else {
        return (
            <div>
                <h3>You are: {user.firstName}</h3>
            </div>
        );
    }
}

export default Myself;
