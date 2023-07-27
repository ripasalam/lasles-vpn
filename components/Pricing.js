import React, { useMemo } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import ScrolledAnimation from './ScrolledAnimation'
import getScrolledAnimation from '@/utils/getScrolledAnimation'
import freeImg from '../public/assets/Free.png'
import standardImg from '../public/assets/Standard.png'
import premiumImg from '../public/assets/Premium.png'

const Pricing = () => {
    const scrollAnimation = useMemo(() => getScrolledAnimation(), [])
    return (
        <section id='pricing'>
            <div className='mt-10 bg-gradient-to-b from-dark-100 to-white'>
                <div className='max-w-screen-xl px-8 lg:px-16 mx-auto py-10'>
                    <ScrolledAnimation>
                        <motion.h1 variants={scrollAnimation} className='text-4xl font-bold text-center mb-5'>Choose Your Plan</motion.h1>
                        <motion.div variants={scrollAnimation} className='w-full flex justify-center mb-14'>
                            <p className='w-full sm:w-1/2 text-dark-500 text-center leading-8'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                        </motion.div>
                    </ScrolledAnimation>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12  '>
                        <ScrolledAnimation className='flex justify-center h-full'>
                            <motion.div
                                variants={scrollAnimation}
                                className='flex flex-col items-center justify-center bg-white pt-20 pb-10 px-10 lg:px-16 xl:px-20 rounded-lg border-2'
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }

                                }}
                            >
                                <div className='w-full flex justify-center'>
                                    <Image src={freeImg} width={144.9} height={165.37} className='object-center' />
                                </div>
                                <h6 className='mt-7 font-medium text-lg text-center'>Free plan</h6>
                                <div className='flex-grow'>
                                    <ul className='flex flex-col gap-5  text-dark-500 mt-7'>
                                        <li className='flex flex-row gap-3  items-center '>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Unlimited Bandwitch</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Encrypted Connection</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'> No Traffic Logs</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Works on All Devices</p>
                                        </li>
                                    </ul>

                                </div>

                                <div className='mt-20 flex flex-col justify-center w-full'>
                                    <p className='text-xl font-medium text-center'>Free</p>
                                    <button className='px-3 py-2 font-medium border-2 text-dark-900 rounded-full border-brand-500'>Select</button>
                                </div>
                            </motion.div>

                        </ScrolledAnimation>
                        <ScrolledAnimation className='flex justify-center h-full'>
                            <motion.div
                                variants={scrollAnimation}
                                className='flex flex-col justify-center bg-white pt-20 pb-10 px-10 lg:px-16 xl:px-20 rounded-lg border-2'
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }

                                }}
                            >
                                <div className='w-full flex justify-center'>
                                    <Image src={'/assets/Premium.png'} width={144.9} height={165.37} className='object-center' />
                                </div>
                                <h6 className='mt-7 font-medium text-lg text-center'>Premium plan</h6>
                                <div className='grow'>
                                    <ul className='flex flex-col gap-5  text-dark-500 mt-7 '>
                                        <li className='flex flex-row gap-3  items-center '>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Unlimited Bandwitch</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Encrypted Connection</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'> No Traffic Logs</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Works on All Devices</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Connect Anywhere</p>
                                        </li>
                                    </ul>

                                </div>
                                <div className='mt-20 flex flex-col justify-center'>
                                    <p className='text-xl font-medium text-center'>Free</p>
                                    <button className='px-3 py-2 font-medium border-2 text-dark-900 rounded-full border-brand-500'>Select</button>
                                </div>
                            </motion.div>
                        </ScrolledAnimation>

                        <ScrolledAnimation className='flex justify-center h-full'>
                            <motion.div
                                variants={scrollAnimation}
                                className='flex flex-col justify-center bg-white pt-20 pb-10 px-10 lg:px-16 xl:px-20 rounded-lg border-2'
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }

                                }}
                            >
                                <div className='w-full flex justify-center'>
                                    <Image src={'/assets/Premium.png'} width={144.9} height={165.37} className='object-center' />
                                </div>
                                <h6 className='mt-7 font-medium text-lg text-center'>Premium plan</h6>
                                <div className='grow'>
                                    <ul className='flex flex-col gap-5  text-dark-500 mt-7 '>
                                        <li className='flex flex-row gap-3  items-center '>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Unlimited Bandwitch</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Encrypted Connection</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'> No Traffic Logs</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Works on All Devices</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Connect Anywhere</p>
                                        </li>
                                        <li className='flex flex-row gap-3  items-center'>
                                            <Image src={'/assets/cheklist.png'} width={24} height={24} />
                                            <p className='text-sm'>Get New Features</p>
                                        </li>
                                    </ul>

                                </div>
                                <div className='mt-20 flex flex-col justify-center'>
                                    <p className='text-xl font-medium text-center'>Free</p>
                                    <button className='px-3 py-2 font-medium border-2 text-dark-900 rounded-full border-brand-500'>Select</button>
                                </div>
                            </motion.div>
                        </ScrolledAnimation>
                    </div>
                    <div className='w-full pt-4 sm:pt-16'>
                        <ScrolledAnimation>
                            <motion.div variants={scrollAnimation} className='pt-4 sm:pt-16 font-medium w-9/12 sm:w-6/12 lg:w-4/12 mx-auto mb-5 '>
                                <h3 className=' text-xl sm:text-3xl lg:text-4xl pt-4 sm:pt-10 text-center px-2'>Huge Global Network of Fast VPN</h3>
                            </motion.div>
                            <motion.div variants={scrollAnimation} className='w-10/12 sm:w-7/12 lg:w-6/12 mx-auto text-center pb-16'>
                                <p className='text-dark-500 leading-8 px-5 pb-16'>See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.</p>
                            </motion.div>
                        </ScrolledAnimation>
                        <scrolledAnimation>

                        </scrolledAnimation>
                        <scrolledAnimation>
                            <motion.div variants={scrollAnimation} className='w-full px-8 lg:px-16'>
                                <Image src={'/assets/Huge-Global.png'} width={1060} height={537.77} className='mx-auto mb-9' />
                                <Image src={'/assets/Sponsored.png'} width={1135.64} height={208.32} className='mx-auto' />
                            </motion.div>
                        </scrolledAnimation>

                    </div>

                </div>

            </div >

        </section>

    )
}

export default Pricing
