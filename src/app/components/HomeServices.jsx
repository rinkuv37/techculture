import Button from '@mui/material/Button'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const HomeServices = () => {
    return (
        <section className="py-20 bg-gray-800 serviceSection bg-[url('/herobanner__1.jpg')]">
            <div className='container'>
                <h2 className='text-white text-[20px]'>SERVICES</h2>
                <p className='text-white font-light text-[35px] py-3'>Transform your business with advanced technologies</p>


                <div className='grid grid-cols-4 gap-10 py-4 services'>
                    <Link href={"#"} className='box rounded-md overflow-hidden relative group'>
                        <img src={"https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/ai-insights-card-2.png/jcr:content/renditions/cq5dam.thumbnail.640.640.png"} className='full transition-all group-hover:scale-105 h-full object-cover' alt='image' />
                        <div className='info p-6 absolute top-0 left-0 z-50 w-full h-full '>
                           <div className='flex justify-between items-center !absolute bottom-5 pr-5 w-[96%]'>
                                <h2 className='text-gray-100 text-[25px] font-light'>AI and Data & Analytics</h2>


                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className='box rounded-md overflow-hidden relative group'>
                        <img src={"https://www.tcs.com/content/dam/global-tcs/ja/images/insights/trends/cloud-business-case-model-transformation/card.jpg/jcr:content/renditions/cq5dam.thumbnail.640.640.jpeg"} className='full transition-all group-hover:scale-105 h-full object-cover' alt='image' />
                        <div className='info p-6 absolute top-0 left-0 z-50 w-full h-full '>
                             <div className='flex justify-between items-center !absolute bottom-5 pr-5 w-[96%]'>
                                <h2 className='text-gray-100 text-[25px] font-light'>Cloud</h2>


                            </div>
                        </div>
                    </Link>


                    <Link href={"#"} className='box rounded-md overflow-hidden relative group'>
                        <img src={"https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/inverstor-relations-poster.png/jcr:content/renditions/cq5dam.thumbnail.640.640.png"} className='full transition-all group-hover:scale-105 h-full object-cover' alt='image' />
                        <div className='info p-6 absolute top-0 left-0 z-50 w-full h-full '>
                             <div className='flex justify-between items-center !absolute bottom-5 pr-5 w-[96%]'>
                                <h2 className='text-gray-100 text-[25px] font-light'>Cognitive Business Operations</h2>


                            </div>
                        </div>
                    </Link>


                    <Link href={"#"} className='box rounded-md overflow-hidden relative group'>
                        <img src={"https://www.tcs.com/content/dam/global-tcs/en/images/what-we-do/industries/travel/case-study/maersk-cloud-iot-platform-automate-reefer-monitoring-system-u-card.jpg/jcr:content/renditions/cq5dam.thumbnail.640.640.jpeg"} className='full transition-all group-hover:scale-105 h-full object-cover' alt='image' />
                        <div className='info p-6 absolute top-0 left-0 z-50 w-full h-full !pr-5'>
                            <div className='flex justify-between items-center !absolute bottom-5 pr-5 w-[96%]'>
                                <h2 className='text-gray-100 text-[25px] font-light'>Consulting</h2>


                            </div>
                        </div>
                    </Link>


                </div>


            </div>
        </section>
    )
}

export default HomeServices
