import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../Main section/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [news,setNews] = useState([])
    console.log(data,id)
    useEffect(()=>{
        const NewsDetails = data.find(singleNews=>singleNews.id == id)
        setNews(NewsDetails)
    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto py-3 grid grid-cols-12'>
                <section className='col-span-9'>
                    <h2 className='font-bold'>dragon details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;