import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/Main section/LeftAside';
import RightAside from '../components/Main section/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                    <Navbar></Navbar>
                </section>
            </header>
            <main className='w-11/12 mx-auto my-5 grid md:grid-cols-12'>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="middle col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;