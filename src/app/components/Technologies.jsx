"use client"
import React, { useState } from 'react'
import { technologiesData } from '../data'
import Button from '@mui/material/Button'
const Technologies = () => {

    const [isActive, setIsActive] = useState(0);

    return (
        <section className='bg-[#111a2e] py-20'>
            <div className='container'>
                <div className='flex items-center justify-center'>
                    <span className='bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full 
                    text-[14px] text-primary'>Technologies</span>
                </div>

                <h2 className='text-[40px] font-bold text-white leading-[60px] text-center mt-2'>  <span className='text-gred'>Technologies</span> We Use</h2>

                <p className="text-gray-300 text-[20px] text-center">We leverage cutting-edge technologies and industry-leading tools to deliver exceptional solutions</p>

                <br />


                <div className='flex items-center justify-center flex-wrap gap-4 mt-4 technologies'>
                    {
                        technologiesData?.length !== 0 && technologiesData?.map((item, index) => {
                            return (
                                <Button key={index} className={`bg-[#192233] !text-gray-300 !rounded-full !px-5 !py-2 !font-[600] !capitalize hover:bg-[#222f47] ${isActive === index && '!bg-primary !text-white'}`} onClick={()=>setIsActive(index)}>{item?.name}</Button>
                            )
                        })
                    }
                </div>


            </div>

        </section>
    )
}

export default Technologies