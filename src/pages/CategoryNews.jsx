import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';

const CategoryNews = ({data: propData, defaultId }) => {
    const loaderData =  useLoaderData()
    const data = propData ||loaderData
    // console.log(data)
    const params = useParams() 
     const id = defaultId || params.id;
    const [categoryNews,setCategoryNews] = useState([])

    useEffect(()=>{
        if(id=='0'){
            setCategoryNews(data)
        }else if(id=='1'){
            const filterData = data.filter(news=>news.others.is_today_pick==true)
            setCategoryNews(filterData)
        }else{
             const filterData = data.filter(news=>news.category_id == id)
        // console.log(filterData)
        setCategoryNews(filterData)
        }
       
    },[id,data])
    
    return (
        <div>
            <h2 className='font-bold mb-3'>total ({categoryNews.length}) news found</h2>
            <div className='grid grid-cols-1 gap-3 mx-3'>
                {
                    categoryNews.map(news=><NewsCard news = {news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;