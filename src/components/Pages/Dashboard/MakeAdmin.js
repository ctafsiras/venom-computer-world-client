import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const MakeAdmin = () => {
    //make admin function
    const { data: users, isLoading, refetch } = useQuery('get-user', () => fetch(`https://venom-computer-world.herokuapp.com/get-user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    const makeAdmin = id => {
        const newAdmin = { role: 'admin' }

        axios.patch(`https://venom-computer-world.herokuapp.com/update-user/${id}`, newAdmin, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                console.log(newAdmin);
                refetch();
                console.log(res)
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{(user.role !== 'admin') ? <button
                                    onClick={() => makeAdmin(user._id)}
                                    className='btn btn-outline btn-success'>Make Admin</button> : 'Already Admin'}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            {
                users.length === 0 && <p className='text-xl p-4 text-warning'>Sorry! You DoNot Have Any User  Right Now, Please add someone.</p>
            }
        </div>
    );
};

export default MakeAdmin;