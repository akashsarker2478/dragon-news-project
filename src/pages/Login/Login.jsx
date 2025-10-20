import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context & Provider/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [error,setError] = useState('')
    const {loginUser,googleSignIn} = use(AuthContext)
    const location = useLocation()
    // console.log(location)
    const navigate =useNavigate()
    const handleLogIn=(event)=>{
         event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log(email,password)
        loginUser(email,password)
        .then(res=>{
            alert('login successfully')
            console.log(res.user)
            navigate(`${location.state? location.state : '/'}`)
        })
        .catch(error=>{
            setError(error.message) 
        })
    }

    const handleGoogleSignIn = ()=>{
      googleSignIn()
            .then((result) => {
        console.log(result.user);
        alert("Google sign-in successful!");
        navigate("/"); // লগইন হলে হোম পেজে পাঠিয়ে দিচ্ছি
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
    }
    return (
         
  <div className="flex justify-center items-center min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='text-2xl font-bold text-center py-3'>Login Your Account</h2>
      <div className="card-body">
        <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password"  required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          {error&& <p className='text-red-500 text-sm'>{error}</p>}
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center text-xl font-semibold'>or</p>
          <button onClick={handleGoogleSignIn} className='btn  btn-secondary   w-full'><FcGoogle size={24} /> Login With Google</button>
          <p className='text-center text-accent font-semibold'>Don’t Have An Account ? <Link to={'/auth/register'} className='text-secondary underline'>Register</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
  </div>

    );
};

export default Login;