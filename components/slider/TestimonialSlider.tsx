'use client'
import Slider from 'react-slick'
import TestimonialCard from '../testmonialCard/TestimonialCard'
import { useMemo } from 'react'

const TestimonialSlider = () => {
   const settings = {
      className: 'center home_carousel',
      arrows: false,
      dots: false,
      centerMode: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 540,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   }

   const testimonials = useMemo(
      () => [
         {
            name: 'Ian',
            title: 'Engineer',
            desc: 'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
         },
         {
            name: 'Alan',
            title: 'Engineer',
            desc: 'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
         },
         {
            title: 'Engineer',
            name: 'Balijawa',
            desc: 'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
         },
         {
            title: 'Engineer',
            name: 'Kabanda',
            desc: 'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
         },
      ],
      []
   )
   return (
      <Slider {...settings}>
         {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
         ))}
      </Slider>
   )
}

export default TestimonialSlider
