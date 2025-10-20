import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';


const LatestNews = () => {
        const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
        
                const breakingNews = data.filter(news=>news.others.is_today_pick==true)
                setNews(breakingNews);
            })
            .catch(err => console.error(err));
    }, []);
    return (
<div className='flex gap-3 bg-base-200 items-center p-3 mt-5'>
            <p className='bg-secondary text-white p-1 px-2'>Latest</p>
            <Marquee pauseOnHover={true}>
                {news.map(item => (
                    <p key={item.id} className='font-bold mr-4'>{item.title} |</p>
                ))}
            </Marquee>
        </div>
    );
};

export default LatestNews;