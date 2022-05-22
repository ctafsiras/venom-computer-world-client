import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: currentUser, isLoading, refetch } = useQuery(['get-user-email', user], () => fetch(`http://localhost:4000/get-user/${user.email}`).then(res => res.json()));
    if (isLoading) {
        return <progress class="progress w-56"></progress>
    }
    console.log(currentUser);
    const handleEducation = e => {
        e.preventDefault();
        const education = e.target.education.value;
        const updatedUser = { education }
        axios.patch(`http://localhost:4000/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
                console.log(res)
            })
    }
    const handlePhone = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const updatedUser = { phone }
        axios.patch(`http://localhost:4000/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
                console.log(res)
            })
    }
    const handleLinkedin = e => {
        e.preventDefault();
        const linkedin = e.target.linkedin.value;
        const updatedUser = { linkedin }
        axios.patch(`http://localhost:4000/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
                console.log(res)
            })
    }
    const handleLocation = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const updatedUser = { location }
        axios.patch(`http://localhost:4000/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
                console.log(res)
            })
    }
    return (
        <div className='text-xl mt-5 ml-3'>
            <h2 className='text-2xl text-secondary'>My Profile</h2>
            <h3>Name: {currentUser.userName}</h3>
            <h3>Email: {currentUser.email}</h3>
            {
                currentUser.education ? <h3>Education: {currentUser.education}</h3> :
                    <form onSubmit={handleEducation}>
                        <input name='education' type="text" placeholder="Enter Your Educational Qualification" class="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            class="btn ml-2">Save</button>
                    </form>
            }
            {
                currentUser.phone ? <h3>Mobile Number: {currentUser.phone}</h3> :
                    <form onSubmit={handlePhone}>
                        <input name='phone' type="number" placeholder="Enter Your Mobile Number" class="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            class="btn ml-2">Save</button>
                    </form>
            }
            {
                currentUser.linkedin ? <h3>Linkedin Profile: {currentUser.linkedin}</h3> :
                    <form onSubmit={handleLinkedin}>
                        <input name='linkedin' type="text" placeholder="Enter Your Linkedin Profile URL" class="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            class="btn ml-2">Save</button>
                    </form>
            }
            {
                currentUser.location ? <h3>Location: {currentUser.location}</h3> :
                    <form onSubmit={handleLocation}>
                        <input name='location' type="text" placeholder="Enter Your Location" class="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            class="btn ml-2">Save</button>
                    </form>
            }
        </div>
    );
};

export default MyProfile;