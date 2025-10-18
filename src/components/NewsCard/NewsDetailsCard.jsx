import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router";



const NewsDetailsCard = ({ news }) => {

  return (
    <div>
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden p-3">
        {/* 1. Image Section (ছবির অংশ) */}
        <div className="rounded-t-lg overflow-hidden">
          <figure>
            <img
              src={news.image_url}
              alt="News Thumbnail"
              // ইমেজ যাতে কন্টেইনারের পুরো জায়গা নেয়
              className="w-full h-auto object-cover"
            />
          </figure>
        </div>

        {/* 2. Content Area (শিরোনাম, বিবরণ) */}
        <div className="p-6">
          {/* Title (শিরোনাম) */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-4">
            {news.title}
          </h1>

          {/*  Description (বিবরণের অংশ) */}
          <p className="text-sm text-gray-700 leading-relaxed font-semibold">
            {news.details}
          </p>

          {/* 3. Button Section (বাটন অংশ) */}
          <div className="mt-6">
            <Link to={`/category/${news.category_id}`}
              className="flex items-center justify-start space-x-2 w-[250px]
                              py-3 px-4 
                             bg-secondary text-white font-semibold 
                             rounded-lg shadow-md 
                             hover:bg-red-700 transition duration-300"
            >
              {/* React Icon: HiArrowLeft (বাটনে থাকা Arrow-এর জন্য) */}
              <HiArrowLeft className="w-5 h-5 mr-2" />All news in this category
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
