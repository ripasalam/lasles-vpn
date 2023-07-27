import React, { useMemo } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import ScrolledAnimation from './ScrolledAnimation'
import getScrolledAnimation from '@/utils/getScrolledAnimation'
import heroImages from '../public/assets/Illustration-1.png'


const Hero = () => {

    const scrollAnimation = useMemo(() => getScrolledAnimation(), [])
    return (
        <section id='about'>
            <div className='mt-20 max-w-screen-xl px-8 lg:px-16 py-3 sm:py-4 mx-auto'>
                <ScrolledAnimation>
                    <motion.div className='grid  grid-cols-1 lg:grid-cols-2  py-6 sm:py-16 gap-4 ' variants={scrollAnimation}>
                        <div className='row-start-2 lg:row-start-1'>
                            <h1 className='lg:font-medium w-10/12 sm:w-6/12 lg:w-full text-dark-900 text-2xl sm:text-4xl lg:leading-hero'>Want anything to be easy with <strong>LaslesVPN.</strong></h1>
                            <p className='pt-5 text-dark-500 leading-8 mb-12 '>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                            <button className='w-full lg:w-7/12 px-20 py-4 hover:shadow-lg hover:shadow-brand-500 bg-brand-500 rounded-xl text-white font-bold'>Get Started</button>
                        </div>
                        <motion.div className='row-start-1' variants={scrollAnimation}>
                            <Image src={heroImages} width={611.24} height={382.44} alt='hero' className='w-full' />
                        </motion.div>
                    </motion.div>

                </ScrolledAnimation>
                <ScrolledAnimation>
                    <motion.div custom={{ duration: 2 }} className='grid grid-cols-1 lg:grid-cols-3 rounded-xl bg-white shadow-md py-9 sm:divide-x-2 divide-dark-300' variants={scrollAnimation}>
                        <motion.div variants={scrollAnimation} className='flex px-5  justify-between  items-center lg:justify-center py-4 gap-5'>
                            <Image src={'/assets/user.png'} width={55} height={55} alt='user' />
                            <div className=''>
                                <p className=' text-dark-900 font-bold text-2xl'>90+</p>
                                <p className='text-dark-500 text-xl'>Users</p>
                            </div>
                        </motion.div>
                        <motion.div variants={scrollAnimation} className='flex px-5  justify-between  items-center lg:justify-center gap-5 py-4  '>
                            <Image src={'/assets/location.png'} width={55} height={55} alt='user' />
                            <div>
                                <p className=' text-dark-900 text-right lg:text-left font-bold text-2xl'>30+</p>
                                <p className='text-dark-500 text-xl'>Locations</p>
                            </div>
                        </motion.div>
                        <motion.div variants={scrollAnimation} className='flex px-5  justify-between  items-center lg:justify-center gap-5 py-4  '>
                            <Image src={'/assets/Server.png'} width={55} height={55} alt='user' />
                            <div>
                                <p className=' text-dark-900 font-bold text-2xl'>50+</p>
                                <p className='text-dark-500 text-xl'>Server</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </ScrolledAnimation>

            </div>

        </section>

    )
}

export default Hero
