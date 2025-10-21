import React, { use, useState } from "react";
import { GiEvilTower } from "react-icons/gi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context & Provider/AuthContext";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, SetNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name.length < 5) {
      SetNameError("Name should be at lest five character");
    } else {
      SetNameError("");
    }
    const photo = event.target.photo.value;
    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;

    if (!urlPattern.test(photo)) {
      setPhotoError(
        "Please enter a valid image URL (must end with .jpg, .png, etc.)"
      );
      return;
    } else {
      setPhotoError("");
    }
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long, include 1 uppercase letter and 1 number"
      );
      return;
    } else {
      setPasswordError("");
    }

    // console.log(name, email, password, photo);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            sendEmailVerification(user) .then(()=>{
              alert('A verification email has been sent. Please check your inbox.')
              
            })
            .catch((error) => {
            console.error("Error sending email verification:", error);
          });
            alert("successfully register!");
            
          })
          .catch((error) => {
            console.log(error);
            setUser(user)
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-bold text-center py-3">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                required
              />
              {nameError && <p className="text-red-500">{nameError}</p>}
              {/* photo url */}
              <label className="label">Photo url</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo url"
                required
              />
              {photoError && <p className="text-red-500">{photoError}</p>}
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
              <button className="btn btn-neutral mt-4">Register</button>
              <p className="text-center text-accent font-semibold">
                Already Have An Account ?{" "}
                <Link to={"/auth/login"} className="text-secondary underline">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
