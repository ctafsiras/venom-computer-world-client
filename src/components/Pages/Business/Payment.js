import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0xd2HpF8f5rMG2u6TRBWsF2uRtK3KjNhwWqdYIQUubrqUhz8rm0z5yVabfYCvKgxZpuvKH60ZF6QSOvHMWVwNJ00BdxxPlKV');
const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading, refetch } = useQuery('get-order-id', () => fetch(`http://localhost:4000/get-order-id/${id}`).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    const price=parseInt(order.productPrice) * parseInt(order.productQuantity);
    return (
        <div>
            <h2>Dear sir,</h2>
            <h2>Please Pay For: {order.productName}</h2>
            <h2>Your total payable amount is: {price}</h2>

            <div className='mt-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    order={order} 
                    price={price} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;