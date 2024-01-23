'use client'
import Slider from 'react-slick'
import TestimonialCard from '../testmonialCard/TestimonialCard'

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
   return (
      <Slider {...settings}>
         {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <TestimonialCard key={index} />
         ))}
      </Slider>
   )
}

export default TestimonialSlider
