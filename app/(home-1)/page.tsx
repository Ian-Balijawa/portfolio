import { Fragment } from 'react'
import { Metadata } from 'next'
import Banner from '@/components/banner/Banner'
import ContactUs from '@/components/contact-us/ContactUs'
import Education from '@/components/education/Education'
import Experience from '@/components/experience/Experience'
import TestimonialSlider from '@/components/slider/TestimonialSlider'
import SmallSubtitle from '@/components/subtitle/SmallSubtitle'
import ProjectSliderWithButton from '@/components/slider/ProjectSliderWithButton'
import ServiceCard from '@/components/serviceCard/ServiceCard'
import { serviceData } from '@/app/(common)/home-2/page'

export const metadata: Metadata = {
   title: 'Ian | Balijawa',
   description:
      'Explore my comprehensive guides, tutorials, and resources to help you master Topic. Start your journey today with us',
}

export default function Home() {
   return (
      <Fragment>
         <div id="home">
            <Banner />
            <div className="mt-16 md:mt-24 xl:mt-28">
               <div id="service">
                  <SmallSubtitle
                     title="My Services"
                     description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                  />
                  {/* FlipCard section  */}
                  <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                     {serviceData.map((item: any, index: any) => (
                        <div key={index}>
                           <ServiceCard data={item} />
                        </div>
                     ))}
                  </div>
               </div>

               {/* portfolio section  */}
               <div className="mt-16 md:mt-24 xl:mt-28" id="portfolio">
                  <h2 className="text-2xl md:text-3xl xl:text-5xl text-base-content font-bold text-center">
                     Showcase
                  </h2>
                  <p className="md:max-w-[438px] text-center text-base text-base-content/60 mb-4 mx-auto mt-4">
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor
                     do amet sint. Velit officia consequat duis enim velit
                     mollit. lorem ipsum
                  </p>
                  <ProjectSliderWithButton />
               </div>
               {/* testimonial section   */}
               <div className="mt-16 md:mt-24 xl:mt-28">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Testimonials"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                     />
                  </div>
                  <TestimonialSlider />
               </div>
               <div className="mt-16 md:mt-24 xl:mt-28">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Education"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                     />
                  </div>
                  <Education />
               </div>
               {/* experience section  */}
               <div className="mt-16 md:mt-24 xl:mt-28">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Experience"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                     />
                  </div>
                  <Experience />
               </div>
               {/* contact us section   */}
               <div id="contact-us">
                  <ContactUs />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
