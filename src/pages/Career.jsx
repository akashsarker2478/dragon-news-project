import React from "react";
import careerImg from "../assets/career.jpg"; // চাইলে ছবি add করতে পারো
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Career = () => {
  return (
    <div className="mt-5 w-11/12 mx-auto">
        <Header></Header>
        <Navbar></Navbar>
        <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
      <div className="card lg:card-side bg-base-100 shadow-xl w-full max-w-5xl">
        <figure>
          <img
            src={careerImg}
            alt="Dragon News Career"
            className="w-full lg:w-96 object-cover rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold text-secondary">Join Dragon News</h2>
          <p className="text-accent text-lg mt-2">
            At <span className="font-semibold text-black">Dragon News</span>, we are always 
            looking for passionate individuals who want to make a difference in the world of journalism.
          </p>
          <p className="text-accent text-lg mt-2">
            Whether you are a reporter, editor, developer, or designer, there’s a place for you 
            in our growing team. We value creativity, integrity, and a commitment to excellence.
          </p>
          <p className="text-accent text-lg mt-2">
            Interested? Send your CV and portfolio to 
            <span className="text-secondary font-semibold"> careers@dragonnews.com</span> and become part of our journey!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Career;
