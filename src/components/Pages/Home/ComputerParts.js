import React from 'react';
import { useQuery } from 'react-query';
import ComputerPartCard from './ComputerPartCard';

const ComputerParts = () => {
    const { data: products, isLoading } = useQuery('product', () => fetch('http://localhost:4000/get-product').then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl text-center font-extrabold tracking-tight text-gray-900">Customers Top Bought.</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-3">
                    {products.map((product) => <ComputerPartCard
                        key={product._id}
                        product={product}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default ComputerParts;