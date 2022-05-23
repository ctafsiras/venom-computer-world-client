import React from 'react';
import { Link } from 'react-router-dom';

const ComputerPartCard = ({ product }) => {
    return (
        <div className="">
            <div>
                <img
                    className='w-full rounded-lg'
                    src={product.image} alt="" />
            </div>
            <div className='pl-4'>
                <h2 className='text-xl font-bold text-primary'>Product: {product.name}</h2>
                <p>Description: {product.description}</p>
                <p>Price: <span className='font-bold'>${product.price}</span></p>
                <p>Available: {product.quantity} pieces</p>
                <p>Minimum Order: {product.min_order} pieces</p>
                <Link
                    to={`/purchase/${product._id}`}
                    className='btn btn-secondary'>Buy Now</Link>
            </div>

        </div>
    );
};

export default ComputerPartCard;