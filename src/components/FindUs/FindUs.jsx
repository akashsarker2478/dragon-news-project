import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us On</h2>
      <div className="join join-vertical w-full">
        <button className="btn join-item  justify-start bg-base-100 hover:bg-primary hover:text-white"><FaFacebook  size={24} />Facebook</button>
        <button className="btn join-item  justify-start bg-base-100 hover:bg-primary hover:text-white"><FaSquareXTwitter size={24}/>Twitter</button>
        <button className="btn join-item  justify-start bg-base-100 hover:bg-primary hover:text-white"><FaSquareInstagram size={24} /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
