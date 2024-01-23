'use client'
import React from 'react'
import Slider from 'react-slick'
import BlogCardWithHover from '../blogCard/BlogCardWithHover'

const HoverBlogSlider = () => {
   const settings = {
      className: 'center home_carousel',
      dots: false,
      arrows: false,
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
            breakpoint: 704,
            settings: {
               slidesToShow: 2,
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
      <div>
         <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
               <span key={index}>
                  <BlogCardWithHover />
               </span>
            ))}
         </Slider>
      </div>
   )
}

export default HoverBlogSlider
