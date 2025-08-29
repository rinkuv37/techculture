"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, offset: 50 });
    }, []);

    return (
        <section className='py-20 aboutSection'>
            <div className='container'>
                <div className='flex items-center gap-20'>
                    <div className='img relative w-[50%]' data-aos="fade-right">
                        <img src="/about__2.png" alt='image' />
                        <span className='animateText'>About Us</span>
                        <img src="/about__small__img__2.png" className='aboutIconImg absolute top-16 right-40' alt='image' />
                    </div>

                    <div className='info w-[50%] flex flex-col gap-5'data-aos="fade-left">
                        <h2 className='text-[50px] font-bold text-gray-700 leading-[60px]'>Smarter E-commerce <br />
                            <span className='text-gred'>Powered by AI</span></h2>

                        <p className='text-gray-700 text-[20px]'>Our AI-powered chatbot is designed specifically for e-commerce owners, helping you manage inventory, boost sales, and provide exceptional customer support 24/7.</p>

                        <div className='flex items-center gap-5'>
                            <span className='flex items-center gap-2 text-gray-800 text-[18px]'>
                                <MdOutlineShowChart size={20} className='text-primary' />
                                Instant Responses
                            </span>

                            <span className='flex items-center gap-2 text-gray-800 text-[18px]'>
                                <FiUsers size={20} className='text-primary' />
                                24/7 Support
                            </span>

                            <span className='flex items-center gap-2 text-gray-800 text-[18px]'>
                                <IoChatbubbleOutline size={20} className='text-primary' />
                                Smart Automation
                            </span>

                        </div>

                        <div className='btn mt-3'>
                            <Button className='bg-gradient-to-r from-[#2b2929] via-[#090707] to-[#2d2d2d] !text-white !rounded-md !px-6 !py-3 !capitalize !font-bold gap-2' size='large'>
                                <IoPlayOutline size={25} /> Request a Demo
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
