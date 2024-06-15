'use client'
import Image from 'next/image'
import Slider from 'react-slick'

const TechLogoSlider = () => {
   const settings = {
      className: 'center',
      arrows: false,
      dots: false,
      centerMode: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      responsive: [
         {
            breakpoint: 1380,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 960,
            settings: {
               slidesToShow: 3,
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
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   }
   return (
      <div className="p-4 bg-transparent">
         <Slider {...settings}>
            {[
               '/nodejs.png',
               '/devops.png',
               '/nest.png',
               '/kubernetes.png',
               '/docker.png',
               '/Expressjs.png',
               '/aws.png',
               '/next.png',
               '/react.png',
               '/ts.svg',
               '/js.png',
               '/vite.svg',
               '/vue.png',
            ].map((item, index) => (
               <Image
                  key={index}
                  src={item}
                  width={50}
                  height={100}
                  alt={item}
               />
            ))}
         </Slider>
      </div>
   )
}

export default TechLogoSlider
