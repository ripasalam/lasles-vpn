import React, { useState, useMemo } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import ScrolledAnimation from './ScrolledAnimation';
import getScrolledAnimation from '@/utils/getScrolledAnimation';
import { motion } from 'framer-motion';
const listTestimoni = [
    {
        name: "iezh Robert",
        image: "/assets/Ellipse-175.png",
        city: "Warsaw",
        country: "Poland",
        rating: "4.5",
        testimoni:
            "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    },
    {
        name: "Yessica Christy",
        image: "/assets/Ellipse-176.png",
        city: "Shanxi",
        country: "China",
        rating: "4.5",
        testimoni:
            "“I like it because I like to travel far and still can connect with high speed.”.",
    },
    {
        name: "Kim Young Jou",
        image: "/assets/Ellipse-177.png",
        city: "Seoul",
        country: "Korea",
        rating: "4.5",
        testimoni:
            "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
    },
    {
        name: "iezh Robert",
        image: "/assets/Ellipse-175.png",
        city: "Warsaw",
        country: "Poland",
        rating: "4.5",
        testimoni:
            "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    }
]

const Testimonial = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <span className='mx-2 bg-dark-400 rounded-l-full rounded-r-full h-4 w-4 flex cursor-pointer transition-all'></span>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots w-max absolute mt-12",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]

    };

    const [sliderRef, setSliderRef] = useState(null)
    const scrollAnimation = useMemo(() => getScrolledAnimation(), [])

    return (
        <section id='testimonial'>
            <div className='max-w-screen-xl mx-auto mt-12 px-8 lg:px-16 relative'>
                <ScrolledAnimation>
                    <motion.div className='w-10/12 sm:w-7/12 lg:w-6/12 mx-auto text-center' variants={scrollAnimation}>
                        <h3 className=' text-xl sm:text-3xl lg:text-4xl pt-4 sm:pt-10 text-center'>Trusted by Thousands of Happy Customer</h3>
                    </motion.div>
                    <motion.div variants={scrollAnimation} className='w-10/12 sm:w-7/12 lg:w-6/12 mx-auto text-center'>
                        <p className='text-dark-500 leading-8 px-3'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                    </motion.div>
                </ScrolledAnimation>
                <ScrolledAnimation>
                    <motion.div variants={scrollAnimation} className='w-full flex flex-col py-5 mt-10'>
                        <Slider {...settings}
                            ref={setSliderRef}
                        >
                            {listTestimoni.map((testimonial, index) =>
                            (
                                <div className='flex p-3 h-full ' key={index}>
                                    <div className='gap-5 h-96 md:h-80 flex flex-col p-5 rounded-lg border-2 border-dark-400 bg-white hover:border-brand-500'>
                                        <div className='flex gap-3 mb-3'>
                                            <div>
                                                <Image src={`${testimonial.image}`} width={55} height={55} />
                                            </div>
                                            <div className=''>
                                                <h6 className='font-medium'>
                                                    {testimonial.name}
                                                </h6>
                                                <p className='text-sm'>{testimonial.city}, {testimonial.country}</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <p className=''>4.5</p>
                                                <Image src={'/assets/star.png'} width={14} height={14} />
                                            </div>
                                        </div>
                                        <div className='flex leading-8'>
                                            <p>{testimonial.testimoni}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                            )

                            }

                        </Slider>
                        <div className='flex justify-end gap-5 mt-5 ml-10 sm:mr-10 '>
                            <button onClick={sliderRef?.slickPrev} className='p-4 rounded-full border bg-white border-brand-500'>
                                <Image src={'/assets/eva_arrow-back-fill.png'} width={30} height={30} />
                            </button>
                            <button onClick={sliderRef?.slickNext} className='p-4 rounded-full bg-brand-500'>
                                <Image src={'/assets/eva_arrow-next-fill.png'} width={30} height={30} />
                            </button>

                        </div>
                    </motion.div >
                </ScrolledAnimation>
                <ScrolledAnimation>
                    <motion.div variants={scrollAnimation} className='relative top-32'>
                        <div className='flex flex-col justify-center items-center sm:flex-row  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 bg-white rounded-lg shadow-2xl '>
                            <div className='flex flex-col mb-6 sm:mb-0 text-left w-10/12 sm:w-7/12 lg:w-5/12'>
                                <h1 className='sm:pr-14 font-medium  text-2xl sm:text-4xl text-dark-900'>Subscribe Now For Get Special Features</h1>
                                <p className='text-sm mt-3 text-dark-500'>Lets subcribe with us and find the fun</p>
                            </div>
                            <button className='text-lg px-12 lg:px-16 py-3 lg:py-4 hover:shadow-lg hover:shadow-brand-500 bg-brand-500 rounded-xl text-white font-bold'>Get Started</button>
                        </div>
                    </motion.div>
                </ScrolledAnimation>
            </div >

        </section>


    )
}

export default Testimonial
