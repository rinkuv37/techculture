import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const HomeServices = () => {
    return (
        <section className='py-20 bg-white'>
            <div className='container'>
                <div className='flex items-center justify-center'>
                    <span className='border border-[rgba(0,0,0,0.1)] rounded-full px-3 py-1 text-gred font-bold'>Our Service</span>
                </div>


                <h2 className='text-center text-[40px] font-bold'>Comprehensive <span className='text-gred'>Solutions</span></h2>

                <p className='text-gray-700 my-1 text-center text-[18px]'>Transform your business with our comprehensive technology solutions designed for sustainable growth</p>

                <br /><br />

                <div className='grid grid-cols-3 gap-10'>
                    <div className='box bg-gray-50 shadow-md rounded-md p-6 px-8 py-8 flex flex-col gap-4 group serviceBox'>
                        <div className='flex items-center justify-between mb-4 serviceImg'>
                            <div className='img relative'>
                                <img src={"/service__6.png"} alt='image' className='relative z-50' />
                                <div className="service__bg__img absolute -top-1 -left-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="150" viewBox="0 0 165 150" fill="none">
                                        <path d="M165 65C165 106.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 165 23.5786 165 65Z" fill="url(#paint0_linear_1212_422)"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_1212_422" x1="3.36937e-07" y1="87.931" x2="165" y2="87.931" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.479167" stop-color="#00229E"></stop>
                                                <stop offset="0.479167" stop-color="#6E1299"></stop>
                                                <stop offset="1" stop-color="#FE0094"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <button className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full -rotate-45'>
                                <IoIosArrowRoundForward size={30} className='text-white' />
                            </button>
                        </div>

                        <div className='serviceContent'>
                            <h2 className='text-[22px] font-bold text-gray-800'>AGENCY CONSULTING</h2>
                            <p className='text-[16px] text-gray-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since</p>
                        </div>
                    </div>


                     <div className='box bg-gray-50 shadow-md rounded-md p-6 px-8 py-8 flex flex-col gap-4 group serviceBox'>
                        <div className='flex items-center justify-between mb-4 serviceImg'>
                            <div className='img relative'>
                                <img src={"/service__7.png"} alt='image' className='relative z-50' />
                                <div className="service__bg__img absolute -top-1 -left-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="150" viewBox="0 0 165 150" fill="none">
                                        <path d="M165 65C165 106.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 165 23.5786 165 65Z" fill="url(#paint0_linear_1212_422)"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_1212_422" x1="3.36937e-07" y1="87.931" x2="165" y2="87.931" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.479167" stop-color="#00229E"></stop>
                                                <stop offset="0.479167" stop-color="#6E1299"></stop>
                                                <stop offset="1" stop-color="#FE0094"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <button className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full -rotate-45'>
                                <IoIosArrowRoundForward size={30} className='text-white' />
                            </button>
                        </div>

                        <div className='serviceContent'>
                            <h2 className='text-[22px] font-bold text-gray-800'>IT CONSULTING</h2>
                            <p className='text-[16px] text-gray-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since</p>
                        </div>
                    </div>


                     <div className='box bg-gray-50 shadow-md rounded-md p-6 px-8 py-8 flex flex-col gap-4 group serviceBox'>
                        <div className='flex items-center justify-between mb-4 serviceImg'>
                            <div className='img relative'>
                                <img src={"/service__6.png"} alt='image' className='relative z-50' />
                                <div className="service__bg__img absolute -top-1 -left-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="150" viewBox="0 0 165 150" fill="none">
                                        <path d="M165 65C165 106.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 165 23.5786 165 65Z" fill="url(#paint0_linear_1212_422)"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_1212_422" x1="3.36937e-07" y1="87.931" x2="165" y2="87.931" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.479167" stop-color="#00229E"></stop>
                                                <stop offset="0.479167" stop-color="#6E1299"></stop>
                                                <stop offset="1" stop-color="#FE0094"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <button className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full -rotate-45'>
                                <IoIosArrowRoundForward size={30} className='text-white' />
                            </button>
                        </div>

                        <div className='serviceContent'>
                            <h2 className='text-[22px] font-bold text-gray-800'>LEGAL CONSULTING</h2>
                            <p className='text-[16px] text-gray-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since</p>
                        </div>
                    </div>

<div className='box bg-gray-50 shadow-md rounded-md p-6 px-8 py-8 flex flex-col gap-4 group serviceBox'>
                        <div className='flex items-center justify-between mb-4 serviceImg'>
                            <div className='img relative'>
                                <img src={"/service__6.png"} alt='image' className='relative z-50' />
                                <div className="service__bg__img absolute -top-1 -left-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="150" viewBox="0 0 165 150" fill="none">
                                        <path d="M165 65C165 106.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 165 23.5786 165 65Z" fill="url(#paint0_linear_1212_422)"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_1212_422" x1="3.36937e-07" y1="87.931" x2="165" y2="87.931" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.479167" stop-color="#00229E"></stop>
                                                <stop offset="0.479167" stop-color="#6E1299"></stop>
                                                <stop offset="1" stop-color="#FE0094"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <button className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full -rotate-45'>
                                <IoIosArrowRoundForward size={30} className='text-white' />
                            </button>
                        </div>

                        <div className='serviceContent'>
                            <h2 className='text-[22px] font-bold text-gray-800'>AGENCY CONSULTING</h2>
                            <p className='text-[16px] text-gray-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since</p>
                        </div>
                    </div>


                     <div className='box bg-gray-50 shadow-md rounded-md p-6 px-8 py-8 flex flex-col gap-4 group serviceBox'>
                        <div className='flex items-center justify-between mb-4 serviceImg'>
                            <div className='img relative'>
                                <img src={"/service__7.png"} alt='image' className='relative z-50' />
                                <div className="service__bg__img absolute -top-1 -left-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="150" viewBox="0 0 165 150" fill="none">
                                        <path d="M165 65C165 106.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 165 23.5786 165 65Z" fill="url(#paint0_linear_1212_422)"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_1212_422" x1="3.36937e-07" y1="87.931" x2="165" y2="87.931" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.479167" stop-color="#00229E"></stop>
                                                <stop offset="0.479167" stop-color="#6E1299"></stop>
                                                <stop offset="1" stop-color="#FE0094"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <button className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full -rotate-45'>
                                <IoIosArrowRoundForward size={30} className='text-white' />
                            </button>
                        </div>

                        <div className='serviceContent'>
                            <h2 className='text-[22px] font-bold text-gray-800'>IT CONSULTING</h2>
                            <p className='text-[16px] text-gray-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since</p>
                        </div>
                    </div>


                     <div className='box bg-gray-50 shadow-md rounded-md p-6 px-8 py-8 flex flex-col gap-4 group serviceBox'>
                        <div className='flex items-center justify-between mb-4 serviceImg'>
                            <div className='img relative'>
                                <img src={"/service__6.png"} alt='image' className='relative z-50' />
                                <div className="service__bg__img absolute -top-1 -left-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="165" height="150" viewBox="0 0 165 150" fill="none">
                                        <path d="M165 65C165 106.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 165 23.5786 165 65Z" fill="url(#paint0_linear_1212_422)"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_1212_422" x1="3.36937e-07" y1="87.931" x2="165" y2="87.931" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.479167" stop-color="#00229E"></stop>
                                                <stop offset="0.479167" stop-color="#6E1299"></stop>
                                                <stop offset="1" stop-color="#FE0094"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <button className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full -rotate-45'>
                                <IoIosArrowRoundForward size={30} className='text-white' />
                            </button>
                        </div>

                        <div className='serviceContent'>
                            <h2 className='text-[22px] font-bold text-gray-800'>LEGAL CONSULTING</h2>
                            <p className='text-[16px] text-gray-600 leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since</p>
                        </div>
                    </div>

                    
                </div>


            </div>
        </section>
    )
}

export default HomeServices
