import Button from '@mui/material/Button'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='w-full h-20  flex items-center justify-center fixed top-0 left-0 z-50'>
            <div className='container flex items-center justify-between'>
                <Link href={"#"} className='logo flex items-center gap-2'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white font-bold'>T</span>
                    <span className='text-white font-bold text-[20px]'>TechCultureAi</span>
                </Link>


                <nav className='flex items-center gap-10'>
                    <Link href={"#"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all'>Home</Link>
                    <Link href={"#"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all'>Services</Link>
                    <Link href={"#"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all'>Features</Link>
                    <Link href={"#"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all'> Price</Link>
                    <Link href={"#"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all'>Integrations</Link>
                    <Link href={"#"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all'>Blog</Link>    
                </nav>


                <Button className='bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-2 !capitalize !font-bold' size='large'>Let&apos;s Try</Button>


            </div>
        </header>
    )
}

export default Header