import { Rating } from '@smastrom/react-rating';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import '@smastrom/react-rating/style.css'

const ChefCard = ({ recipe }) => {
    const { cooking_method, ingredients, rating, recipe_img, recipe_name } = recipe;

    console.log(recipe);

    return (
        <div>
            <section className="card lg:card-side grid md:grid-cols-3 bg-base-100 shadow-xl">
                <figure>
                    <LazyLoad className='lazy'>
                        <img src={recipe_img} alt="Album" className='w-full h-full' />
                    </LazyLoad>
                </figure>
                <div className="card-body md:col-span-2">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    {
                        ingredients.map((item, index) => <li key={index} className='pl-4'>{item}</li>)
                    }
                    <p className='my-3 font-semibold'>{cooking_method}</p>
                    <div className='flex gap-3 items-center'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                        <p className='text-3xl text-slate-500 font-bold'>{rating}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChefCard;