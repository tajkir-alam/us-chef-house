import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import '@smastrom/react-rating/style.css'
import { HiHeart } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';

const ChefCard = ({ recipe }) => {
    const { cooking_method, ingredients, rating, recipe_img, recipe_name } = recipe;

    const [favorite, setFavorite] = useState(false);

    const notifyy = () => {
        toast("This recipe is added on your favorite")
        setFavorite(true);
    };

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

                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                            <p className='text-3xl text-slate-500 font-bold'>{rating}</p>
                        </div>

                        <div onClick={notifyy}>
                            <HiHeart className={favorite ? 'text-4xl text-rose-600' : 'disabled cursor-pointer text-4xl text-slate-400' }></HiHeart>
                        </div>
                    </div>
                </div>
            </section>



            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default ChefCard;