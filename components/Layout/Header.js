import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'


const Header = () => {

    const [activeLink, setActiveLink] = useState('about')
    const [navbarScrolled, setNavbarScrolled] = useState('false')
    const [navbar, setNavbar] = useState(false)



    useEffect(() => {

        window.addEventListener('scroll', () => {
            setNavbarScrolled(window.scrollY > 20)
        })
    }, []);


    return (

        <header className={'w-full top-0 z-50 fixed bg-white transition-all ' + (navbarScrolled ? 'shadow-lg' : 'pt-4')}>
            <nav className=' max-w-screen-xl px-8 lg:px-16 py-3 sm:py-4 mx-auto grid grid-flow-col'>
                <div className=' col-start-1 col-end-2 items-center'>
                    <Image className='h-10' src={'/assets/Logo.png'} width={149} height={36.23} alt='logo' />
                </div>
                <div onClick={() => { setNavbar(!navbar) }} className='lg:hidden flex col-start-3 items-center justify-end cursor-pointer'>
                    {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </div>
                <div className={` transition-all duration-500 ease-in lg:block mt-10 lg:mt-0 col-start-1 col-end-4 lg:col-start-4 lg:col-end-8 ${navbar ? 'block' : 'hidden'}`}>
                    <ul className=' lg:flex   '>
                        <a href='#about' className='cursor-pointer' onClick={() => { setActiveLink("about") }}>
                            <li className={'lg:px-4 lg:mx-2 py-2 animation-hover relative hover:text-brand-300    ' + (activeLink === 'about' ? 'text-brand-300 animation-active' : ' text-dark-500')}>
                                About
                            </li>
                        </a>
                        <a href='#features' className=' cursor-pointer scroll-smooth' onClick={() => { setActiveLink("features") }}>
                            <li className={'lg:px-4 lg:mx-2 py-2 animation-hover relative hover:text-brand-300  ' + (activeLink === 'features' ? 'text-brand-300 animation-active' : ' text-dark-500')}>
                                Features
                            </li>
                        </a>
                        <a href='#pricing' className=' cursor-pointer' onClick={() => { setActiveLink("pricing") }}>
                            <li className={'lg:px-4 lg:mx-2 py-2 animation-hover relative hover:text-brand-300  ' + (activeLink === 'pricing' ? 'text-brand-300 animation-active' : ' text-dark-500')}>
                                Pricing
                            </li>
                        </a>
                        <a href='#testimonial' className=' cursor-pointer' onClick={() => { setActiveLink("testimonial") }}>
                            <li className={'lg:px-4 lg:mx-2 py-2 animation-hover relative hover:text-brand-300  ' + (activeLink === 'testimonial' ? 'text-brand-300 animation-active' : ' text-dark-500')}>
                                Testimonial
                            </li>
                        </a>
                    </ul>
                </div>
                <div className='hidden lg:block col-start-10 col-end-12 justify-self-end font-medium  items-center'>
                    <button className=' mx-2 sm:mx-4 capitalize '>Sign In</button>
                    <button className='  px-5 sm:px-8 py-2 rounded-full border border-brand-500'>Sign Up</button>
                </div>

            </nav>
        </header>
    )
}

export default Header
