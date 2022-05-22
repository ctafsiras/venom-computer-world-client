import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:4000/get-order/${user.email}`).then(res => res.json()));
    if (isLoading) {
        return <progress class="progress w-56"></progress>
    }
    const handleCancel = id => {
        axios.delete(`http://localhost:4000/delete-order/${id}`)
            .then(res => {
                refetch();
                console.log(res)
            })
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Ordered Quantity</th>
                        <th>Status</th>
                        <th>Pay</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.productPrice}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.status}</td>
                                <td><button

                                    className='btn btn-outline btn-primary'>Pay</button></td>
                                <td><button
                                    onClick={() => handleCancel(order._id)}
                                    className='btn btn-outline btn-error'>Cancel</button></td>
                            </tr>
                        </>)
                    }

                </tbody>
            </table>
            {
                orders.length === 0 && <p className='text-xl p-4 text-warning'>Sorry! You DoNot Have Any Order Right Now, Please Order something</p>
            }
        </div>
    );
};

export default MyOrders;