import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='bg-dark-200 pt-52 pb-10 '>
            <div className='max-w-screen-xl mx-auto px-8 lg:px-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 '>
                    <div className=' w-full sm:w-7/12 justify-self-start' >
                        <Image src={'/assets/Logo.png'} width={149} height={36.23} />
                        <p className='pt-5 text-dark-500 leading-8  '><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>
                        <div className='flex flex-row gap-5 mt-5'>
                            <div className='bg-white rounded-full h-10 w-10 p-3 shadow-md'>
                                <Image src={'/assets/facebook-f-brands.svg'} width={5} height={5} className=' w-full h-full ' />
                            </div>
                            <div className='bg-white rounded-full h-10 w-10 p-3 shadow-md'>
                                <Image src={'/assets/twitter-brands.svg'} width={5} height={5} className=' w-full h-full ' />
                            </div><div className='bg-white rounded-full h-10 w-10 p-3 shadow-md'>
                                <Image src={'/assets/instagram-brands.svg'} width={5} height={5} className=' w-full h-full ' />
                            </div>
                        </div>
                        <p className='text-dark-500 mt-10'>©2020<strong>LaslesVPN</strong></p>
                    </div>
                    <div className='grid grid-cols-3  mt-10 lg:mt-0'>
                        <div>
                            <h6 className='font-medium text-lg'>Product</h6>
                            <ul className='mt-5 text-dark-500 flex flex-col gap-5'>
                                <li>
                                    Pricing
                                </li>
                                <li>
                                    Locations
                                </li>
                                <li>
                                    Server
                                </li>
                                <li>
                                    Countries
                                </li>
                                <li>
                                    Blog
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-lg  sm:mt-0'>Engage</h6>
                            <ul className='mt-5 text-dark-500 flex flex-col gap-5'>
                                <li>
                                    LaslesVPN ?
                                </li>
                                <li>
                                    FAQ
                                </li>
                                <li>
                                    Tutorials
                                </li>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Privacy Policy
                                </li>
                                <li>
                                    Term of Service
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-lg  sm:mt-0'>Earn Money</h6>
                            <ul className='mt-5 text-dark-500 flex flex-col gap-3'>
                                <li>
                                    Affiliate
                                </li>
                                <li>
                                    Become Partner
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer