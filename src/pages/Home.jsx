import React from 'react';
import { useLoaderData } from 'react-router';
import CategoryNews from './CategoryNews';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <CategoryNews data = {data} defaultId="0"></CategoryNews>
        </div>
    );
};

export default Home;