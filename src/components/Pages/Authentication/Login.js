import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        signInWithEmailAndPassword(data.email, data.password);
    };
    if (user) {
        return <Navigate to='/'/>
    }
    return (

        <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto h-[90vh]">
            <div class="self-center font-bold mb-6 text-xl font-light text-gray-600 sm:text-2xl">
                Login To Your Account
            </div>
            <SocialLogin></SocialLogin>
            <div class="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        class="input input-bordered input-primary w-full max-w-lg" />
                    {errors.email?.type === "required" && <p className='text-warning'>Please Enter Your Email</p>}
                    <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        class="input input-bordered input-primary w-full max-w-lg mt-3" />
                        <p className='text-blue-700 mb-3 cursor-pointer'>Reset Password</p>
                    {errors.password?.type === "required" && <p className='text-warning'>Please Enter Your Password</p>}
                    {error && <p className='text-warning'>{ error.message}</p>}
                    <button
                        type="submit"
                        class={loading ? 'btn btn-primary w-full loading' : 'btn btn-primary w-full'}>
                        Login
                    </button>
                </form>
                <p>Don't have account? <Link className='text-blue-500' to='/register'>Register now</Link></p>
            </div>
        </div>

    );
};

export default Login;