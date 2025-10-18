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
    <div className="flex justify-between items-center mt-4">
      <div></div>
      <nav className="flex gap-3 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </nav>
      <div className="flex gap-1">
        <img src={loginImg} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
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
