import React, { useMemo } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import ScrolledAnimation from './ScrolledAnimation'
import getScrolledAnimation from '@/utils/getScrolledAnimation'

const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits."
]
const Features = () => {

    const scrollAnimation = useMemo(() => getScrolledAnimation(), [])
    console.log(features)
    return (
        <section id='features'>
            <div className='pt-10'>
                <div className='max-w-screen-xl px-8 lg:px-16 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 py-6 sm:py-10 gap-5 '>
                        <ScrolledAnimation>
                            <motion.div variants={scrollAnimation} className=' w-full flex justify-center  '>
                                <Image src={'/assets/Illustration 2.png'} width={508.12} height={414.71} className='w-full' />
                            </motion.div>

                        </ScrolledAnimation>
                        <ScrolledAnimation>
                            <motion.div className=' flex flex-col items-start justify-center  w-full lg:w-9/12 '>
                                <h1 className='text-4xl font-medium pt-12 mb-5'>We Provide Many Features You Can Use</h1>
                                <p className='text-dark-500 leading-8 mb-5'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                                <ul className='flex flex-col gap-5 items-start  text-dark-500'>
                                    {features.map((feature, index) => (
                                        <motion.li
                                            variants={scrollAnimation}
                                            className='flex flex-row gap-2 md:gap-3'
                                            custom={{ duration: 2 + index }}
                                            key={feature}
                                            whileHover={{
                                                scale: 1.1,
                                                transition: {
                                                    duration: .2
                                                }
                                            }}
                                        >
                                            <div className='h-6 w-6'>
                                                <Image src={'/assets/bx_bxs-check-circle.png'} width={24} height={24} className='w-full h-full' />

                                            </div>

                                            <p>{feature}</p>
                                        </motion.li>
                                    ))}


                                </ul>
                            </motion.div>

                        </ScrolledAnimation>


                    </div>




                </div>

            </div >

        </section>

    )
}

export default Features
