import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context & Provider/AuthContext';

const Login = () => {
    const {loginUser} = use(AuthContext)
    const handleLogIn=(event)=>{
         event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email,password)
        loginUser(email,password)
        .then(res=>{
            alert('login successfully')
            console.log(res.user)
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
         
  <div className="flex justify-center items-center min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='text-2xl font-bold text-center py-3'>Login Your Account</h2>
      <div className="card-body">
        <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center text-accent font-semibold'>Don’t Have An Account ? <Link to={'/auth/register'} className='text-secondary underline'>Register</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
  </div>

    );
};

export default Login;