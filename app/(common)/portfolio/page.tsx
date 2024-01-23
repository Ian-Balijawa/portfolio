import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import TextSlider from '@/components/slider/TextSlider'
import { RightArrowIcon } from '@/components/icons'

export const metadata: Metadata = {
   title: 'Start your journey today with us',
   description:
      'Explore my comprehensive guides, tutorials, and resources to help you master Topic. Start your journey today with us Browse through my portfolio and discover how we can help you improve your Business. Contact us today to learn more about my services and how we can help you achieve your goals.',
}

const Portfolio = () => {
   return (
      <Fragment>
         {/* contents  */}
         <section className="container mx-auto px-5 sm:px-0 pt-16 md:pt-24 lg:pt-32">
            <h1 className="text-3xl lg:text-5xl font-bold text-base-content text-center">
               Latest Project
            </h1>
            <p className="text-base md:text-lg text-base-content/60 mt-4 sm:max-w-[744px] mx-auto text-center">
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
               amet sint. Velit officia consequat duis enim velit mollit. lorem
               ipsum
            </p>
            {/* cards  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-y-11 sm:gap-x-8 mt-16">
               {cards.map((item, index) => (
                  <div key={index}>
                     <Link href="portfolio-single">
                        <Image
                           className="rounded-2xl"
                           src={item?.image}
                           width={593}
                           height={390}
                           priority={true}
                           alt="product-image"
                        />
                     </Link>

                     <p className="text-base font-medium text-base-content mt-5 ">
                        {item?.company}
                     </p>
                     <h1 className="text-xl sm:text-2xl font-semibold text-base-content pt-1 mb-4 hover:text-primary transition duration-300 ease-in-out capitalize line-clamp-1">
                        <Link href="portfolio-single">{item?.title}</Link>
                     </h1>
                     <Link
                        href="portfolio-single"
                        className="text-sm font-medium text-base-content/60 underline underline-offset-8 hover:text-primary transition duration-300 ease-in-out"
                     >
                        View Case Study
                     </Link>
                  </div>
               ))}
            </div>
            {/* link 1*/}
            <button className="flex items-center gap-5 btn btn-primary border-none rounded-full h-12 pl-6 pr-1.5 mt-16 w-fit mx-auto">
               <span className="text-base font-medium text-primary-content">
                  Explore More
               </span>
               <div className="p-2 bg-primary-content rounded-full">
                  <RightArrowIcon className="text-primary" />
               </div>
            </button>
         </section>
         {/* text slider  */}
         <section className="py-16 md:py-24 lg:py-32">
            <TextSlider />
         </section>
      </Fragment>
   )
}

export default Portfolio

const cards = [
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/item.png',
   },
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/Item (1).png',
   },
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/Item (2).png',
   },
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/Item (3).png',
   },
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/Item (4).png',
   },
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/Item (5).png',
   },
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/Item (6).png',
   },
   {
      title: 'Senior Software Engineer',
      company: 'Google',
      image: '/portfolio/Item (7).png',
   },
]
