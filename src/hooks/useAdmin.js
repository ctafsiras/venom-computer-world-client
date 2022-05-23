import { useState } from "react"
import { useQuery } from "react-query";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);

    const { data: currentUser, isLoading } = useQuery(['get-user-email', user], () => fetch(`http://localhost:4000/get-user/${user.email}`).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    if (currentUser.role === 'admin') {
        setAdmin(true);
    }
    return [admin];
}

export default useAdmin;