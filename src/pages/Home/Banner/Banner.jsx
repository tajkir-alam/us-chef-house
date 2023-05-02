import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";

import img1 from '../../../assets/chef1.jpg'
import img2 from '../../../assets/chef2.png'
import img3 from '../../../assets/chef3.jpg'
import img4 from '../../../assets/chef4.png'
import img5 from '../../../assets/chef5.jpg'
import img6 from '../../../assets/chef6.png'


const Banner = () => {
    return (
        <div className='flex justify-between items-center py-20'>
            <div className="carousel md:w-2/4 mx-auto text-white">
                <div id="item1" className="carousel-item w-full mx-auto block text-center">
                    <h1 className='text-7xl mb-4'>Gordon Ramsay</h1>
                    <p className='text-sm font-semibold'>WE HAVE THE THE <br /> BEST CHEF'S FROM THE WORLD</p>
                </div>
                <div id="item2" className="carousel-item w-full  mx-auto block text-center">
                    <h1 className='text-7xl mb-4'>Bobby Flay</h1>
                    <p className='text-sm font-semibold'>WE HAVE THE THE <br /> BEST CHEF'S FROM THE WORLD</p>
                </div>
                <div id="item3" className="carousel-item w-full  mx-auto block text-center">
                    <h1 className='text-7xl mb-4'>Anthony Bourdain</h1>
                    <p className='text-sm font-semibold'>WE HAVE THE THE <br /> BEST CHEF'S FROM THE WORLD</p>
                </div>
                <div id="item4" className="carousel-item w-full  mx-auto block text-center">
                    <h1 className='text-7xl mb-4'>Julia Child</h1>
                    <p className='text-sm font-semibold'>WE HAVE THE THE <br /> BEST CHEF'S FROM THE WORLD</p>
                </div>
                <div id="item5" className="carousel-item w-full  mx-auto block text-center">
                    <h1 className='text-7xl mb-4'>Rachel Ray</h1>
                    <p className='text-sm font-semibold'>WE HAVE THE THE <br /> BEST CHEF'S FROM THE WORLD</p>
                </div>
                <div id="item6" className="carousel-item w-full  mx-auto block text-center">
                    <h1 className='text-7xl mb-4'>Giada Laurentis</h1>
                    <p className='text-sm font-semibold'>WE HAVE THE THE <br /> BEST CHEF'S FROM THE WORLD</p>
                </div>
            </div>

            <div className='w-2/5 hidden md:block'>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={0}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href="#item1">
                            <img src={img1} alt="" className='w-[180px] h-[250px] border-4 border-yellow-400' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#item2">
                            <img src={img2} alt="" className='w-[180px] h-[250px] border-4 border-yellow-400' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#item3">
                            <img src={img3} alt="" className='w-[180px] h-[250px] border-4 border-yellow-400' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#item4">
                            <img src={img4} alt="" className='w-[180px] h-[250px] border-4 border-yellow-400' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#item5">
                            <img src={img5} alt="" className='w-[180px] h-[250px] border-4 border-yellow-400' />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#item6">
                            <img src={img6} alt="" className='w-[180px] h-[250px] border-4 border-yellow-400' />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;