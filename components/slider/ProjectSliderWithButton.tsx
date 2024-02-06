'use client'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import ProjectCard from '../projectCard/ProjectCard'

const ProjectSliderWithButton = () => {
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

   return (
      <div>
         <Slider {...settings} ref={sliderRef}>
            {[1, 2, 3, 4].map((item, index) => (
               <ProjectCard key={index} />
            ))}
         </Slider>
         <div className="mt-16 flex items-center justify-between px-5 md:px-0">
            <div
               className={`px-3 py-4 bg-base-content/20 w-fit rounded-full cursor-pointer z-10 ${
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
               className={`px-3 py-4 bg-base-content/20 w-fit rounded-full cursor-pointer z-10 ${
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

export default ProjectSliderWithButton
