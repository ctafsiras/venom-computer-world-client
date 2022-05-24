import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageProducts = () => {
    const [openModal, setOpenModal] = useState(false);
    const [productId, setProductId] = useState('');
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch(`https://venom-computer-world.herokuapp.com/get-product`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));
    //manage product section
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    const handleCancel = id => {
        axios.delete(`https://venom-computer-world.herokuapp.com/delete-product/${id}`)
            .then(res => {
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
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Minimum Order</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.min_order}</td>
                            <td>



                                <label

                                    onClick={() => {
                                        setOpenModal(true)
                                        setProductId(product._id)
                                    }}
                                    htmlFor="my-modal-6"
                                    className='btn btn-outline btn-error'>Delete</label>

                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            {
                products.length === 0 && <p className='text-xl p-4 text-warning'>Sorry! You DoNot Have Any Order Right Now, Please Order something</p>
            }
            {openModal && <DeleteConfirmModal
                handleCancel={handleCancel}
                orderId={productId}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProducts;