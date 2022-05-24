import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageAllOrders = () => {
    //manage all user page
    const [openModal, setOpenModal] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { data: orders, isLoading, refetch } = useQuery('get-order', () => fetch(`https://venom-computer-world.herokuapp.com/get-order`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    const handleCancel = id => {
        axios.delete(`https://venom-computer-world.herokuapp.com/delete-order/${id}`)
            .then(res => {
                refetch();
                console.log(res)
            })
    }
    const handleShip = (id) => {
        const updatedOrder = {
            status: "Shipped",
        }
        axios.patch(`https://venom-computer-world.herokuapp.com/update-order/${id}`, updatedOrder)
            .then(res => {
                refetch();
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Ordered Quantity</th>
                        <th>Status</th>
                        {/* <th>Pay</th> */}
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) =>
                            <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.productPrice}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.status === "Pending" ?
                                    <button
                                        onClick={() => handleShip(order._id)}
                                        className='btn btn-outline btn-primary'>Ship</button> : order.status
                                }</td>
                                {/* <td>{order.paid ? <small>Transaction ID<br />{order.transaction}</small> : <Link to={`/dashboard/payment/${order._id}`}><button

                                    className='btn btn-outline btn-primary'>Pay</button></Link>}</td> */}
                                <td>
                                    <label

                                        onClick={() => {
                                            setOpenModal(true)
                                            setOrderId(order._id)
                                        }}
                                        htmlFor="my-modal-6"
                                        className={order.paid ? `btn btn-disabled` : 'btn btn-outline btn-error'}>Cancel</label></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            {
                orders.length === 0 && <p className='text-xl p-4 text-warning'>Sorry! You DoNot Have Any Order Right Now, Please Order something</p>
            }
            {openModal && <DeleteConfirmModal
                handleCancel={handleCancel}
                orderId={orderId}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageAllOrders;