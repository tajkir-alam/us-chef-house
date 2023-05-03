import React, { useEffect, useState } from 'react';
import { HiThumbUp } from 'react-icons/hi';
import LazyLoad from 'react-lazy-load';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const ChefPage = () => {
    const chefDetails = useLoaderData();
    const { recipes } = chefDetails

    const [chefInfo, setChefinfo] = useState([]);

    const { id } = chefDetails;
    const { name, picture, years_of_experience, num_of_recipes, likes } = chefInfo;

    useEffect(() => {
        fetch(`https://server-data-tajkir-alam.vercel.app/chefinfo/${id}`)
            .then(res => res.json())
            .then(data => setChefinfo(data))
    }, [])


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
        <>
            <section>
                <div className="px-4 md:custom-container flex flex-col-reverse items-center md:grid md:grid-cols-2 gap-5 bg-[#b4b9e9] py-24">
                    <div className='md:w-4/5'>
                        <LazyLoad>
                            <img src={picture} alt="" className='w-full h-96' />
                        </LazyLoad>

                        <div className='md:hidden mt-8'>
                            <div className='flex items-center gap-2 justify-center animate-pulse delay-700'>
                                <HiThumbUp onClick={() => {
                                    setLike(!like)
                                    handleLikeBtn()
                                }} className={like ? 'text-5xl text-blue-600 cursor-pointer' : "text-5xl text-[#fffff3ec] cursor-pointer"}></HiThumbUp>
                                <p className='font-bold text-3xl text-blue-700'>
                                    {
                                        check ? check : likes
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-4/5 text-white'>
                        <h2 className='text-6xl text-center font-bold tracking-wider underline'>
                            {name}
                        </h2>
                        <p className='md:font-semibold text-md tracking-wider text-center mt-8 text-[#fffffff3] shadow-lg shadow-[#ffffffaf] px-4 py-5 rounded-2xl'>
                            I am an accomplished chef with over 15 years of experience in the culinary industry. Born and raised in New York, John developed a passion for cooking at a young age and honed his skills at top culinary schools in the United States and Europe.
                        </p>
                        <div className='mt-8 flex justify-between'>
                            <p className='text-xl font-semibold text-yellow-200 px-1 py-4 text-center'>Numbers of recipe: <span className='font-bold'>{num_of_recipes}</span></p>
                            <p className='text-xl font-semibold text-yellow-200 px-1 py-4 text-center'>Years of experience: <span className='font-bold'>{years_of_experience}</span></p>
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex items-center gap-2 justify-center animate-pulse delay-700'>
                                <HiThumbUp onClick={() => {
                                    setLike(!like)
                                    handleLikeBtn()
                                }} className={like ? 'text-5xl text-blue-600 cursor-pointer' : "text-5xl text-[#fffff3ec] cursor-pointer"}></HiThumbUp>
                                <p className='font-bold text-3xl text-blue-700'>
                                    {
                                        check ? check : likes
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='px-4 md:custom-container grid gap-6 my-6'>
                {
                    recipes.map((recipe, index) => <ChefCard key={index} recipe={recipe}></ChefCard>)
                }
            </div>
        </>
    );
};

export default ChefPage;