import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    //review add section
    const { data: oldReview, isLoading, refetch } = useQuery(['get-review', user], () => fetch(`https://venom-computer-world.herokuapp.com/get-review/${user.email}`).then(res => res.json()));

    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }

    const onSubmit = data => {
        if (data.rating < 0 || data.rating > 5) {
            return alert("Give appropriate number.")
        }
        const review = {
            name: user.displayName,
            email: user.email,
            rating: data.rating,
            description: data.description,
        }
        axios.post('https://venom-computer-world.herokuapp.com/add-review', review)
            .then(res => {
                reset();
                refetch();
            })

    };
    console.log(errors);
    return (
        <div className='max-w-lg'>


            {
                oldReview ?

                    <div className="">
                        <h2 className='text-secondary text-3xl font-bold mb-5'>My Review</h2>
                        <p className="text-2xl text-gray-800">
                            Rating: {oldReview.rating} out of 5.
                        </p>

                        <p className="text-xl text-black py-4">
                            Review Description: {oldReview.description}
                        </p>
                    </div>
                    :
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-secondary text-3xl font-bold mb-5'>Please Add Your Review Here!</h2>
                            <input
                                {...register("rating", { required: true })}
                                type="number" placeholder="Enter Your Rating between 0 to 5." className="input input-bordered w-full mb-3" /><br />
                            <textarea
                                {...register("description", { required: true })}
                                type="text" placeholder="Review Description" className="textarea input-bordered w-full mb-3" /><br />

                            <button type='submit' className="btn btn-primary w-full">Add Review</button>
                        </form>
                    </div>
            }

        </div>
    );
};

export default AddReview;