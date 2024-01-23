'use client'
import Slider from 'react-slick'
import FlipCardWithHover from '../flipCard/FlipCardWithHover'

const ServiceCardSlider = () => {
   const settings = {
      className: 'center service_carousel',
      arrows: false,
      dots: true,
      centerMode: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
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
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 540,
            settings: {
               slidesToShow: 2,
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
                  <FlipCardWithHover />
               </span>
            ))}
         </Slider>
      </div>
   )
}

export default ServiceCardSlider
