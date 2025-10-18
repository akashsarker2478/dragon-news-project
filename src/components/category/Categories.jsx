import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res =>res.json())
const Categories = () => {
    const categories = use(categoryPromise)
    // console.log(categories)
    return (
        <div>
            <h2 className='font-bold'>All Category ({categories.length})</h2>
            <div className='grid grid-cols-1 gap-3 mt-5'>
                {
                    categories.map(category=> 

                        <NavLink
                         key={category.id}
                         className={'btn text-accent bg-base-100 border-0 hover:bg-base-200'}
                         to={`/category/${category.id}`}
                         >{category.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;