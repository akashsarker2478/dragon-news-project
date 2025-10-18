import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <button className='btn btn-outline btn-secondary   w-full'><FcGoogle size={24} /> Login With Google</button>
            <button className='btn btn-outline btn-primary  w-full mt-3'><FaGithub size={24}/> Login With Github</button>
            <div>
                
            </div>
        </div>
    );
};

export default SocialLogin;