import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import ClientFeedBack from '@/components/clientFeedBack/ClientFeedBack'
import ContactUsWithBgColor from '@/components/contact-us/ContactUsWithBgColor'
import CurrentProjects from '@/components/currentProjects/CurrentProjects'
import { RightArrowIcon } from '@/components/icons'
import Largebanner from '@/components/largebanner/Largebanner'
import PortFolioCardLg from '@/components/portfolioCard/PortFolioCardLg'
import SkillAndExperience from '@/components/skillAndExperience/SkillAndExperience'
import HoverBlogSlider from '@/components/slider/HoverBlogSlider'
import IconSlider from '@/components/slider/IconSlider'
import ServiceCardSlider from '@/components/slider/ServiceCardSlider'
import Subtitle from '@/components/subtitle/Subtitle'

export const metadata: Metadata = {
   title: 'Home-3',
   description:
      'Explore my comprehensive guides, tutorials, and resources to help you master Topic. Start your journey today with us',
}

const HomeThree = () => {
   return (
      <Fragment>
         {/* Page Body */}
         <main>
            <div className="mb-16 sm:mb-20 md:mb-24 xl:mb-32">
               <Largebanner />
            </div>
            {/* icon slider  */}
            <IconSlider />
            {/* service and current projects section  */}
            <div className="container mx-auto px-5 md:px-0">
               <div id="service-home3" className="mt-16 md:mt-24 xl:mt-28">
                  <Subtitle
                     title="My Services"
                     description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                  />
                  <div className="pt-8 md:pt-12 xl:pt-16">
                     <ServiceCardSlider />
                  </div>
                  <div id="about-home3" className="pt-56">
                     <CurrentProjects />
                  </div>
               </div>
            </div>
            {/* skill and experience section  */}
            <div className="mt-16 md:mt-24 xl:mt-28 bg-base-100">
               <div className="py-16 md:py-24 xl:py-28 container mx-auto px-5 md:px-0">
                  <SkillAndExperience />
               </div>
            </div>
            <div
               id="project-home3"
               className="my-16 md:my-24 xl:my-28 container mx-auto px-5 md:px-0"
            >
               {/* port folio section  */}
               <Subtitle
                  title="Portfolio"
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
               />
               <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item: any, index: number) => (
                     <PortFolioCardLg key={index} />
                  ))}
               </div>
               <div className="mt-8 sm:mt-12 lg:mt-16 flex items-center justify-center">
                  <Link
                     href="/portfolio"
                     className="btn btn-primary border-none py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit"
                  >
                     <span className="text-base font-medium text-primary-content">
                        Explore More
                     </span>
                     <div className="p-2 bg-primary-content rounded-full">
                        <RightArrowIcon className="text-primary" />
                     </div>
                  </Link>
               </div>

               {/* client feedback section  */}
               <div className="mt-16 md:mt-24 xl:mt-28">
                  <ClientFeedBack />
               </div>
            </div>
            {/* blog sliderSection  */}
            <div id="blog-home3" className="container mx-auto px-5 md:px-0">
               <Subtitle
                  title="Latest Blog"
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
               />
               <div className="my-8 sm:mt-6 sm:mb-12 lg:my-16">
                  <HoverBlogSlider />
               </div>
               <div className="flex items-center justify-center">
                  <Link
                     href="/blog"
                     className="btn btn-primary py-1.5 pl-6 pr-1.5 border-none rounded-full flex items-center justify-center gap-5 w-fit"
                  >
                     <span className="text-base font-medium text-primary-content">
                        Explore More
                     </span>
                     <div className="p-2 bg-primary-content rounded-full">
                        <RightArrowIcon className="text-primary" />
                     </div>
                  </Link>
               </div>
            </div>
            {/* contact-us section  */}
            <div id="contact-home3">
               <ContactUsWithBgColor />
            </div>
         </main>
      </Fragment>
   )
}

export default HomeThree
