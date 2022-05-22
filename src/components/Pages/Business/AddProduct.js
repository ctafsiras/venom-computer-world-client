import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const product = {
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            min_order: data.min_order,
            image: data.image
        }
        axios.post('http://localhost:4000/add-product', product)
        .then(res=>console.log(res))
    };
    return (
        <div className='max-w-lg'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    type="text" placeholder="Product Name" class="input input-bordered w-full mb-3" /><br />
                <textarea
                    {...register("description", { required: true })}
                    type="text" placeholder="Product Description" class="textarea input-bordered w-full mb-3" /><br />
                <input
                    {...register("quantity", { required: true })}
                    type="number" placeholder="Product Quantity" class="input input-bordered w-full mb-3" /><br />
                <input
                    {...register("price", { required: true })}
                    type="number" placeholder="Product Price" class="input input-bordered w-full mb-3" /><br />
                <input
                    {...register("min_order", { required: true })}
                    type="number" placeholder="Minimum Order" class="input input-bordered w-full mb-3" /><br />
                <input
                    {...register("image", { required: true })}
                    type="text" placeholder="Product Image" class="input input-bordered w-full mb-3" /><br />
                <button type='submit' class="btn btn-primary w-full">Add Product</button>
            </form>

        </div>
    );
};

export default AddProduct;