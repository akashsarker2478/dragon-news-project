import React, { use } from "react";
import { GiEvilTower } from "react-icons/gi";
import { Link } from "react-router";
import { AuthContext } from "../../Context & Provider/AuthContext";

const Register = () => {
const {createUser,setUser} = use(AuthContext)
    const handleRegister = (event)=>{
        event.preventDefault()
        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(firstName,email,password,lastName)
        createUser(email,password)
        .then(res=>{
            // console.log(res.user)
            setUser(res.user)
            alert('successfully register!')
        })
        .catch(error=>{
            alert(error.message)
        })
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='text-2xl font-bold text-center py-3'>Register your account</h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text" name='firstName' className="input" placeholder="First Name" />
            {/* photo url */}
            <label className="label">Photo url</label>
            <input type="text" name='lastName' className="input" placeholder="Last Name" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
            <button className="btn btn-neutral mt-4">Register</button>
            <p className='text-center text-accent font-semibold'>Already Have An Account ? <Link to={'/auth/login'} className='text-secondary underline'>Login</Link></p>
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
