import axios from 'axios';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [updateProfile] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
        const newUser = {
            email: data.email,
            userName: data.name,
        }
        axios.put(`http://localhost:4000/add-user/${data.email}`, newUser)
            .then(res => {
                console.log("token ", res.data?.token);
                localStorage.setItem('token', res.data?.token);
            })
    };
    if (user) {
        return <Navigate to='/' />
    }
    return (

        <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto h-[90vh]">
            <div class="self-center font-bold mb-6 text-xl font-light text-gray-600 sm:text-2xl">
                Register To Your Account
            </div>
            <SocialLogin></SocialLogin>
            <div class="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Full Name"
                        class="input input-bordered input-primary w-full max-w-lg" />
                    {errors.name?.type === "required" && <p className='text-warning'>Please Enter Your Name</p>}
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        class="input input-bordered input-primary w-full max-w-lg mt-3" />
                    {errors.email?.type === "required" && <p className='text-warning'>Please Enter Your Email</p>}
                    <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        class="input input-bordered input-primary w-full max-w-lg my-3" />

                    {errors.password?.type === "required" && <p className='text-warning'>Please Enter Your Password</p>}
                    {error && <p className='text-warning'>{error.message}</p>}
                    <button
                        type="submit"
                        class={loading ? 'btn btn-primary w-full loading' : 'btn btn-primary w-full'}>
                        Register
                    </button>
                </form>
                <p>Already have account? <Link className='text-blue-500' to='/register'>Login now</Link></p>
            </div>
        </div>

    );
};

export default Register;