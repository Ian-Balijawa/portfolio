'use client'
import React from 'react'
import Slider from 'react-slick'
import FeedBackCard from '../testmonialCard/FeedBackCard'

const FeedBackSlider = () => {
   const settings = {
      className: 'center dotBlack_carousel',
      arrows: false,
      dots: true,
      centerMode: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      appendDots: (dots: any) => {
         return (
            <div>
               <ul className="absolute top-0 flex justify-center items-center w-full -bottom-6">
                  {dots}
               </ul>
            </div>
         )
      },
      responsive: [
         {
            breakpoint: 1220,
            settings: {
               slidesToShow: 1,
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
            breakpoint: 280,
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
                  <FeedBackCard />
               </span>
            ))}
         </Slider>
      </div>
   )
}

export default FeedBackSlider
