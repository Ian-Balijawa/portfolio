'use client'
import { useMemo, useRef, useState } from 'react'
import Slider from 'react-slick'
import TestimonialCard from '../testmonialCard/TestimonialCard'

const TestiMonialSliderWithButton = () => {
   const [state, setState] = useState(1)
   const sliderRef = useRef(null) as any

   const next = () => {
      sliderRef.current.slickNext()
      setState(1)
   }

   const previous = () => {
      sliderRef.current.slickPrev()
      setState(2)
   }
   const settings = {
      className: 'center home_carousel',
      arrows: false,
      dots: true,
      centerMode: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      appendDots: (dots: any) => {
         return (
            <div>
               <ul className="absolute top-0 flex justify-center items-center w-full -bottom-24 sm:-bottom-28 lg:-bottom-32 z-0">
                  {dots}
               </ul>
            </div>
         )
      },
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
      <div>
         <Slider {...settings} ref={sliderRef}>
            {testimonials.map((item, index) => (
               <span key={index}>
                  <TestimonialCard
                     name={item.name}
                     desc={item.desc}
                     title={item.title}
                  />
               </span>
            ))}
         </Slider>
         <div className="mt-16 flex items-center justify-between">
            <div
               className={`px-3 py-4 bg-base-content/20 w-fit rounded-full cursor-pointer z-20 ${
                  state === 2
                     ? 'bg-primary text-primary-content'
                     : 'bg-base-content/20 text-base-content'
               }`}
               onClick={previous}
            >
               <svg
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M5 1L1 5M1 5L5 9M1 5L19 5"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
            <div
               className={`px-3 py-4 bg-base-content/20 w-fit rounded-full cursor-pointer z-20 ${
                  state === 1
                     ? 'bg-primary text-primary-content'
                     : 'bg-base-content/20 text-base-content'
               }`}
               onClick={next}
            >
               <svg
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M15 1L19 5M19 5L15 9M19 5L1 5"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
         </div>
      </div>
   )
}

export default TestiMonialSliderWithButton
