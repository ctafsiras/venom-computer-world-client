import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ order, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        fetch("https://venom-computer-world.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    //checkout page for order something

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccess('');
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
        } else {
            setError('');
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: order.email,
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
        } else {
            setError('');
            setSuccess('Your Payment Is Complete');
            const updatedOrder = {
                paid: true,
                status: "Pending",
                transaction: paymentIntent.id
            }
            axios.patch(`https://venom-computer-world.herokuapp.com/update-order/${order._id}`, updatedOrder)
                .then(res => {
                })
            navigate('/dashboard/orders');
        }
    };
    return (
        <>
            <form className='max-w-lg' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-3 btn-outline mr-0' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {error && <p className='text-red-600'>{error}</p>}
            {success && <p className='text-red-600'>{success}</p>}
        </>
    );
};

export default CheckoutForm;