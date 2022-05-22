import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const {id}=useParams();
    const { data : product, isLoading} = useQuery('product-id', () => fetch(`http://localhost:4000/get-id-product/${id}`).then(res => res.json()));
    if (isLoading) {
        return <progress class="progress w-56"></progress>
    }
    return (
       <div className='flex justify-center items-center'>
            <div className="lg:flex">
        <div className='w-full'>
            <img
                className='w-full rounded-lg'
                src={product.image} alt="" />
        </div>
        <div className='pl-4 mt-5'>
            <h2 className='text-xl font-bold text-primary'>Product: {product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: <span className='font-bold'>${product.price}</span></p>
            <p>Minimum Order: {product.min_order} pieces</p>
            <Link
                to={`/purchase/${product._id}`}
                className='btn btn-secondary'>Buy Now</Link>
        </div>

    </div>
       </div>
    );
};

export default Purchase;