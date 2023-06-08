import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/slide1.jpg"
import slide2 from "../../../assets/slide2.jpg"

const Banner = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide className='relative'>
                    <img src={slide2} alt="" className='rounded-md' />
                    <div className='bg-[#302f81d1] absolute bottom-20 right-10 py-5 px-24 rounded-2xl'>
                        <h2 className=' text-[#B3D56B] font-serif text-4xl font-bold'>join our camp</h2>
                        <button className="btn btn-outline btn-success mt-5">Know More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide1} alt="" className='rounded-md' />
                    <div className='bg-[#302f81d1] absolute bottom-20 right-10 py-5 px-24 rounded-2xl'>
                        <h2 className=' text-[#B3D56B] font-serif text-4xl font-bold'>join our camp</h2>
                        <button className="btn btn-outline btn-success mt-5">Know More</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;