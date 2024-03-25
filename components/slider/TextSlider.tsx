'use client'
import Slider from 'react-slick'

const TextSlider = () => {
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
      <div className="p-4 bg-primary">
         <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
               <ul key={index}>
                  <li className="text-primary-content text-lg">TINYLABZ</li>
               </ul>
            ))}
         </Slider>
      </div>
   )
}

export default TextSlider
