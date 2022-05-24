import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: currentUser, isLoading, refetch } = useQuery(['get-user-email', user], () => fetch(`https://venom-computer-world.herokuapp.com/get-user/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }
    //user profile section
    const handleEducation = e => {
        e.preventDefault();
        const education = e.target.education.value;
        const updatedUser = { education }
        axios.patch(`https://venom-computer-world.herokuapp.com/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
            })
    }
    const handlePhone = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const updatedUser = { phone }
        axios.patch(`https://venom-computer-world.herokuapp.com/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
            })
    }
    const handleLinkedin = e => {
        e.preventDefault();
        const linkedin = e.target.linkedin.value;
        const updatedUser = { linkedin }
        axios.patch(`https://venom-computer-world.herokuapp.com/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
            })
    }
    const handleLocation = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const updatedUser = { location }
        axios.patch(`https://venom-computer-world.herokuapp.com/update-user/${currentUser._id}`, updatedUser)
            .then(res => {
                refetch();
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
                        <input name='education' type="text" placeholder="Enter Your Educational Qualification" className="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            className="btn ml-2">Save</button>
                    </form>
            }
            {
                currentUser.phone ? <h3>Mobile Number: {currentUser.phone}</h3> :
                    <form onSubmit={handlePhone}>
                        <input name='phone' type="number" placeholder="Enter Your Mobile Number" className="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            className="btn ml-2">Save</button>
                    </form>
            }
            {
                currentUser.linkedin ? <h3>Linkedin Profile: {currentUser.linkedin}</h3> :
                    <form onSubmit={handleLinkedin}>
                        <input name='linkedin' type="text" placeholder="Enter Your Linkedin Profile URL" className="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            className="btn ml-2">Save</button>
                    </form>
            }
            {
                currentUser.location ? <h3>Location: {currentUser.location}</h3> :
                    <form onSubmit={handleLocation}>
                        <input name='location' type="text" placeholder="Enter Your Location" className="input input-bordered w-full max-w-xs mt-2" />
                        <button type='submit'
                            className="btn ml-2">Save</button>
                    </form>
            }
        </div>
    );
};

export default MyProfile;