import React from 'react';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ recipe }) => {
    const { cooking_method, ingredients, rating, recipe_img, recipe_name } = recipe;

    console.log(recipe);

    return (
        <div>
            <section className="card lg:card-side grid grid-cols-3 bg-base-100 shadow-xl">
                <figure>
                    <LazyLoad>
                        <img src={recipe_img} alt="Album" className='w-full h-full'/>
                    </LazyLoad>
                </figure>
                <div className="card-body col-span-2">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    {
                        ingredients.map((item, index) => <li key={index} className='pl-4'>{item}</li>)
                    }
                    <p className='mt-3 font-semibold'>{cooking_method}</p>
                </div>
            </section>
        </div>
    );
};

export default ChefCard;