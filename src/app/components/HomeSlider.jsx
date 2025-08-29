"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <section className='homeSlider'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="item bg-[url('/slide1.jpg')] h-screen w-full bg-cover bg-center relative">
                        <img src={"/slide1.jpg"} className='w-full h-screen object-cover' />
                        <div className='info absolute top-[20%] left-[3%] w-[70%] h-screen flex flex-col z-[60] gap-4'>
                            <h2 className='text-white text-[60px] font-bold leading-[80px]'>Scalable & resilient infrastructure with Cloud Solutions</h2>
                            <h4 className='text-primary text-[30px] font-[300]'>Empower Your Digital Transformation</h4>
                            <p className='text-gray-200 font-[400] text-[18px] w-[60%]'>Building modern, scalable cloud infrastructure and migrating legacy systems to the cloud for enhanced performance and security.</p>


                            <div className='flex items-center gap-3'>
                                
                            </div>


                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HomeSlider
