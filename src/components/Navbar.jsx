import React from 'react';
import { NavLink } from 'react-router';
import loginImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-4'>
            <div></div>
            <nav className='flex gap-3 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </nav>
            <div className='flex gap-1'>
                <img src={loginImg} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;