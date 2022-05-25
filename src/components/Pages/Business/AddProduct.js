import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    //product add function
    const onSubmit = data => {
        const product = {
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            min_order: data.min_order,
            image: data.image
        }
        axios.post('https://venom-computer-world.herokuapp.com/add-product', product, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                reset();
                console.log(res)
            })

    };
    return (
        <div className='max-w-lg'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    type="text" placeholder="Product Name" className="input input-bordered w-full mb-3" /><br />
                <textarea
                    {...register("description", { required: true })}
                    type="text" placeholder="Product Description" className="textarea input-bordered w-full mb-3" /><br />
                <input
                    {...register("quantity", { required: true })}
                    type="number" placeholder="Product Quantity" className="input input-bordered w-full mb-3" /><br />
                <input
                    {...register("price", { required: true })}
                    type="number" placeholder="Product Price" className="input input-bordered w-full mb-3" /><br />
                <input
                    {...register("min_order", { required: true })}
                    type="number" placeholder="Minimum Order" className="input input-bordered w-full mb-3" /><br />
                <input
                    {...register("image", { required: true })}
                    type="text" placeholder="Product Image" className="input input-bordered w-full mb-3" /><br />
                <button type='submit' className="btn btn-primary w-full">Add Product</button>
            </form>

        </div>
    );
};

export default AddProduct;