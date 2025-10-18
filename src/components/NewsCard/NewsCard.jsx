import React from 'react';
import { BsBookmark, BsShare, BsStarFill, BsEye } from 'react-icons/bs'; // Import necessary icons

// Helper function to format the date (simple YYYY-MM-DD)
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags
  } = news;

  const formattedDate = formatDate(author.published_date);


  // Function to truncate details for the snippet
  const getSnippet = (text) => {
    const maxLength = 200; // Character limit for the snippet
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength).trim() + '...';
  };

  const snippet = getSnippet(details);
  
  // Format the tags string for the snippet area, similar to the original image's "Tag Cloud Tags: ..."
  const tagsString = tags.join(', ');

  return (
    <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
      
      {/* Header Section: Author, Date, Icons */}
      <div className="flex items-center justify-between p-4 bg-base-300">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800">{author.name}</div>
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        </div>
        <div className="flex space-x-4 text-gray-600">
          <button className="hover:text-primary transition-colors tooltip tooltip-bottom" data-tip="Save">
            <BsBookmark className="w-5 h-5" />
          </button>
          <button className="hover:text-primary transition-colors tooltip tooltip-bottom" data-tip="Share">
            <BsShare className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Title Section */}
      <div className="px-4 pt-4">
        <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>
      </div>

      {/* Image Section */}
      <div className="p-4">
        <figure className="rounded-lg overflow-hidden">
          <img 
            src={image_url} 
            alt={title} 
            className="w-full h-auto object-cover max-h-80"
          />
        </figure>
      </div>

      {/* Details Snippet Section (Mimicking the structure of the original image) */}
      <div className="px-4 pb-4 text-sm">
        <p className="text-gray-700 mb-2">
          {/* Detailed Date (can be modified to include weekday/full month) */}
          <span className="font-medium text-gray-900">Tuesday, April 22, 2025</span> | Tag Cloud Tags: <span className="text-blue-600 font-medium">{tagsString}</span> 
          <span className="text-gray-500"> — </span>
          {/* Main Snippet Text */}
          {snippet}
        </p>
        <a href="#" className="text-red-500 font-bold hover:text-red-700 transition-colors">
          Read More
        </a>
      </div>

      {/* Footer Section: Rating and Views */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center space-x-2">
          {/* Rating Stars */}
          <div className="flex rating-sm">
            {[...Array(5)].map((_, i) => (
              <BsStarFill
                key={i}
                className={i < rating.number ? 'text-orange-400' : 'text-gray-300'}
              />
            ))}
          </div>
          {/* Rating Number */}
          <span className="text-sm font-semibold text-gray-700">{rating.number}.0</span>
        </div>
        
        {/* Total Views */}
        <div className="flex items-center space-x-1 text-gray-600">
          <BsEye className="w-4 h-4" />
          <span className="text-sm font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

// How to use this component:
// const data = { ... your data object ... };
// <NewsCard newsData={data} />