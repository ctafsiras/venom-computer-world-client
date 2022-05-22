import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [orderAmount, setOrderAmount] = useState(1);

    const { data: product, isLoading, refetch } = useQuery('product-id', () => fetch(`http://localhost:4000/get-id-product/${id}`).then(res => res.json()));
    if (isLoading) {
        return <progress class="progress w-56"></progress>
    }


    const handleOrder = () => {
        const order = {
            productId: product._id,
            email: user.email,
            productName: product.name,
            productPrice: product.price,
            productQuantity: orderAmount,
            paid: false,
            status: 'Not Paid',

        }
        axios.post('http://localhost:4000/add-order', order)
            .then(res => {

                if (res.status === 200) {
                    const newQuantity = product.quantity - orderAmount;
                    const p = {
                        quantity: newQuantity
                    }
                    axios.patch(`http://localhost:4000/update-product/${product._id}`, p)
                        .then(res => {
                            refetch();
                            setOrderAmount(product.min_order);
                            console.log(res)
                        })
                }
            })
    }
    return (
        <div className='flex justify-center items-center w-full'>
            <div className="lg:flex">
                <div className='w-full'>
                    <img
                        className='w-full rounded-lg'
                        src={product.image} alt="" />
                </div>
                <div className='pl-4 w-full'>
                    <h2 className='text-xl font-bold text-primary'>Product: {product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: <span className='font-bold'>${product.price}</span></p>
                    <p>Stock Available: {product.quantity} pieces</p>
                    <p>Minimum Order: {product.min_order} pieces</p>
                    <input
                        value={orderAmount}
                        onChange={(e) => setOrderAmount(parseInt(e.target.value) || 0)}
                        type="text" placeholder="Enter Order Quantity" class="input input-bordered w-full max-w-xs mt-3" />
                    {orderAmount < product.min_order && <p className='text-error'>Your Order is too Low!</p>}
                    {orderAmount > product.quantity && <p className='text-error'>Your Order is too High!</p>}
                    <button
                        disabled={(orderAmount < product.min_order) || (orderAmount > product.quantity)}
                        onClick={handleOrder}
                        className='btn btn-primary mt-2'
                    >Order</button>
                </div>

            </div>
        </div>
    );
};

export default Purchase;