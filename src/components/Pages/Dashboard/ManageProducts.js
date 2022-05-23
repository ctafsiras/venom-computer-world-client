import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:4000/get-product`).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    const handleCancel = id => {
        axios.delete(`http://localhost:4000/delete-product/${id}`)
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
                        products.map((product, index) =>  <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.min_order}</td>
                                <td><button
                                    onClick={() => handleCancel(product._id)}
                                    className='btn btn-outline btn-error'>Delete</button></td>
                            </tr>)
                    }

                </tbody>
            </table>
            {
                products.length === 0 && <p className='text-xl p-4 text-warning'>Sorry! You DoNot Have Any Order Right Now, Please Order something</p>
            }
        </div>
    );
};

export default ManageProducts;