import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-3 bg-base-200 items-center p-3 mt-5'>
            <p className='bg-secondary text-white p-1 px-2'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p className='font-bold mr-4'>রাজনৈতিক সংস্কার চুক্তি ও সহিংসতা |</p>
                <p className='font-bold mr-4'>গার্মেন্টস ফ্যাক্টরি অগ্নিকাণ্ডে ১৬ জনের মৃত্যু |</p>
                <p className='font-bold mr-4'>ভারতে বাংলাদেশি নাগরিকদের হত্যাকাণ্ড |</p>
                <p className='font-bold mr-4'>শাহরিয়ার কবিরের মুক্তির দাবিতে আন্তর্জাতিক প্রচারণা |</p>
                <p className='font-bold mr-4'>বাংলাদেশে টাইফয়েড ভ্যাকসিন ক্যাম্পেইন |</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;