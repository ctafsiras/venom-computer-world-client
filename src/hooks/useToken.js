import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    const userName = user?.user?.displayName;

    useEffect(() => {
        if (email) {
            const newUser = { email, userName };
            axios.put(`https://venom-computer-world.herokuapp.com/add-user/${email}`, newUser)
                .then(res => {
                    setToken(res.data?.token);
                    localStorage.setItem('token', res.data?.token);
                })
        };
    }, [email, userName])
    return [token];
};

export default useToken;