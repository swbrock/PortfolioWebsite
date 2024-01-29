import React from 'react'
import './testimonials.css' // This is the CSS file for this component
import AVTR1 from '../../assets/jazz.jpg'
import AVTR2 from '../../assets/ME.jpg'
import AVTR3 from '../../assets/temple.jpg'
import AVTR4 from '../../assets/temple1.jpg'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
    {
        id: 1,
        name: 'Dad',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        avatar: AVTR1
    },
    {
        id: 2,
        name: 'Mom',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        avatar: AVTR2
    },
    {
        id: 3,
        name: 'Little Brother',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        avatar: AVTR3
    },
    {
        id: 4,
        name: 'Little Sister',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        avatar: AVTR4
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials' className='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials