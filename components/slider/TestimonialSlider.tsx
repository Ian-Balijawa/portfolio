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
            name: 'Kabba Joseph',
            img: 'https://media.licdn.com/dms/image/C4D03AQGXs0wbz1SEVw/profile-displayphoto-shrink_400_400/0/1644409216155?e=1723680000&v=beta&t=W8Olyy2GEKUji1OlpTwfVGHqQv5dxRHIEESJsf1FT1Y',
            title: 'Software engineer',
            desc: 'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
         },
         {
            title: 'Software engineer',
            img: 'https://media.licdn.com/dms/image/D4D03AQFjzr3zdjV3oA/profile-displayphoto-shrink_100_100/0/1717576504603?e=1723680000&v=beta&t=gRKO56-6spVUqP4d7M7tJwSVHAY362tMGkNPOpK00uU',
            name: 'Sharif Kabanda',
            desc: 'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
         },
         {
            name: 'Bk roland',
            img: 'https://media.licdn.com/dms/image/D4D03AQE3s17tZ7rE6Q/profile-displayphoto-shrink_100_100/0/1707616488892?e=1723680000&v=beta&t=AsoC2Go90jGCFwsEOkaQxIFPQGpGn8ZuDVrD0OkEVyI',
            title: 'Software engineer',
            desc: 'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
         },
         {
            title: 'Software engineer',
            name: 'Ronald Muwawu',
            img: 'https://media.licdn.com/dms/image/C4D03AQHvSl2RPztkAg/profile-displayphoto-shrink_100_100/0/1594879189161?e=1723680000&v=beta&t=fvqxV57sMUPl5lKnWcDYRHuxqWeEGkX2WArhyrE0iis',
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
