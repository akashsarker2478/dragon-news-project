import React, { use } from "react";
import { NavLink } from "react-router";
import loginImg from "../assets/user.png";
import { Link } from "react-router";
import { AuthContext } from "../Context & Provider/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const handleLogout = () => {
    console.log("user try to logout");
    logOutUser()
      .then(() => {
        alert('logout successful')
      })
      .catch((error) => {
        alert(error.massage)
      });
  };
  return (
    <div className=" flex flex-col gap-5 justify-center md:flex md:flex-row   md:justify-between items-center mt-4 underline">
      <div className="font font-semibold text-xl text-secondary">
        {user && (
    <>
      <span className="font-bold text-black"><i>Welcome</i></span> {user.displayName}
    </>
  )}

        

      </div>
      <nav className="flex gap:3 md:flex gap-3 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </nav>
      <div className="flex gap-1">
        <img className="w-12 rounded-full" src={user? user.photoURL : loginImg} alt="" />
        {user ? (
          <Link onClick={handleLogout} to={"/auth/login"} className="btn btn-primary px-10">
            Logout
          </Link>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
