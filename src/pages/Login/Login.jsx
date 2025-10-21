import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context & Provider/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/Firebase.config';

const Login = () => {
  const [eye,setEye] = useState(false)
  const [error,setError] = useState('')
  const emailRef = useRef()
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
           if(!res.user?.emailVerified){
                alert('your email is not verified')
                return;
              }
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
        navigate("/"); 
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
    }
    const handleForgotPassword = ()=>{
      
      const email = emailRef.current.value
      console.log('forgot password',email)
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert('check your email')
      })
      .catch(error=>{
        console.log(error)
      })
      
    }
    return (
         
  <div className="flex justify-center items-center min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='text-2xl font-bold text-center py-3'>Login Your Account</h2>
      <div className="card-body">
        <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              {/* email */}
          <label className="label">Email</label>
          <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" required />
          {/* password */}
         <div className='relative'>
           <label className="label">Password</label>
          <input type={eye? "text":"password" }name='password' className="input" placeholder="Password"  required/>
          <span onClick={()=>setEye(!eye)} className='absolute top-[30px] right-6 cursor-pointer'>
            {eye?<FaEye /> : <FaEyeSlash/>}
          </span>
         </div>
          <div onClick={handleForgotPassword}><a className="link link-hover cursor-pointer">Forgot password?</a></div>
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