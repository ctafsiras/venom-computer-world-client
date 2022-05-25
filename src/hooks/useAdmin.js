import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const email = user?.email;
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {

        if (email) {
            fetch(`https://venom-computer-world.herokuapp.com/get-user/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.role === 'admin')
                    setAdminLoading(false)
                });
        }
    }, [email])
    // const { data: currentUser, isLoading } = useQuery(['get-user-email', user], () => fetch(`https://venom-computer-world.herokuapp.com/get-user/${user.email}`).then(res => res.json()));
    // if (isLoading) {
    //     return <progress className="progress w-full"></progress>
    // }
    // if (currentUser.role === 'admin') {
    //     setAdmin(true);
    // }
    return [admin, adminLoading];
}

export default useAdmin;