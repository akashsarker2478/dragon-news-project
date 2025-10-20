import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us On</h2>
      <div className="join join-vertical w-full">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn join-item justify-start bg-base-100 hover:bg-secondary hover:text-white"
        >
          <FaFacebook size={24} className="mr-2" /> Facebook
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn join-item justify-start bg-base-100 hover:bg-secondary hover:text-white"
        >
          <FaTwitter size={24} className="mr-2" /> Twitter
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn join-item justify-start bg-base-100 hover:bg-secondary hover:text-white"
        >
          <FaInstagram size={24} className="mr-2" /> Instagram
        </a>
      </div>
    </div>
  );
};

export default FindUs;



