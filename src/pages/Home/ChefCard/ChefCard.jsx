import React, { useState } from 'react';
import { HiThumbUp } from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    const { id, name, picture, years_of_experience, num_of_recipes, likes } = chef;

    const [check, setCheck] = useState(likes)
    const [like, setLike] = useState(false);
    const [updateLike, setUpdateLike] = useState(likes);
    const handleLikeBtn = () => {
        if (like === false) {
            const newLike = parseInt(likes) + 1;
            setUpdateLike(newLike);
            setCheck(newLike);
        }
        else {
            const decreaseLike = updateLike - 1;
            setCheck(decreaseLike);
        }
    }

    return (
        <div className="card text-black bg-base-100 shadow-xl">
            <LazyLoad  offset={300}>
                <figure><img src={picture} alt="Shoes" className='w-full h-72 md:h-64 rounded-t-2xl' /></figure>
            </LazyLoad>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <li className='font-semibold text-slate-700'>{years_of_experience} years_of_experience</li>
                <li className='font-semibold text-slate-700'>{num_of_recipes} Recipe Created</li>
                <div className="card-actions mt-3 justify-between items-center">
                    <div className='flex items-center gap-2'>
                        <HiThumbUp onClick={() => {
                            setLike(!like)
                            handleLikeBtn()
                        }} className={like ? 'text-4xl text-blue-600' : "text-4xl text-black"}></HiThumbUp>
                        <p className='font-bold text-slate-500'>{check}</p>
                    </div>
                    <button className="btn btn-primary">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;