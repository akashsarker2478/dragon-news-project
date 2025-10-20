import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
      <div className="min-h-screen bg-base-200 flex justify-center items-center p-5 mt-5">
        <div className="card lg:card-side bg-base-100 shadow-xl w-full max-w-5xl">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold text-secondary">
              About Dragon News
            </h2>
            <p className="text-accent text-lg mt-2">
              Welcome to{" "}
              <span className="font-semibold text-black">Dragon News</span> –
              your ultimate source for the latest news from around the world!
              Our mission is to provide accurate, fast, and engaging news
              content that keeps you informed and ahead.
            </p>
            <p className="text-accent text-lg mt-2">
              At Dragon News, we cover a wide range of topics including
              politics, technology, sports, entertainment, and more. We are
              committed to delivering trustworthy journalism with a focus on
              quality and clarity.
            </p>
            <p className="text-accent text-lg mt-2">
              Thank you for visiting Dragon News. Stay connected and enjoy
              reading the latest stories curated just for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
