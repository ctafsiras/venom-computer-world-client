import axios from 'axios';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        // const newUser = {
        //     email: user?.user?.email,
        //     userName: user?.user?.displayName,
        // }

        // console.log('objectNew', newUser);
        // axios.put(`http://localhost:4000/add-user/${user.email}`, newUser)
        //     .then(res => {
        //         console.log("token ", res.data?.token);
        //         localStorage.setItem('token', res.data?.token);
        //     })

    };
    if (user) {
        navigate(from, { replace: true });
    }
    return (

        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto h-[90vh]">
            <div className="self-center font-bold mb-6 text-xl font-light text-gray-600 sm:text-2xl">
                Login To Your Account
            </div>
            <SocialLogin></SocialLogin>
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        className="input input-bordered input-primary w-full max-w-lg" />
                    {errors.email?.type === "required" && <p className='text-red-500'>Please Enter Your Email</p>}
                    <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-primary w-full max-w-lg mt-3" />
                    <p
                        onClick={() => {
                            sendPasswordResetEmail(email)
                            alert("Email Sent");
                        }}
                        className='text-blue-700 mb-3 cursor-pointer'>Reset Password</p>
                    {errors.password?.type === "required" && <p className='text-red-500'>Please Enter Your Password</p>}
                    {error && <p className='text-red-500'>{error.message}</p>}
                    <button
                        type="submit"
                        className={loading ? 'btn btn-primary w-full loading' : 'btn btn-primary w-full'}>
                        Login
                    </button>
                </form>
                <p>Don't have account? <Link className='text-blue-500' to='/register'>Register now</Link></p>
            </div>
        </div>

    );
};

export default Login;