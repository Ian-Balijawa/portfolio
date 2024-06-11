import { Fragment } from 'react'
import { Metadata } from 'next'
import Banner from '@/components/banner/Banner'
import Experience from '@/components/experience/Experience'
import TestimonialSlider from '@/components/slider/TestimonialSlider'
import SmallSubtitle from '@/components/subtitle/SmallSubtitle'
import ServiceCard from '@/components/serviceCard/ServiceCard'
import TextSlider from '@/components/slider/TextSlider'
import { serviceData } from '@/app/service-data'
import ContactMe from '@/components/contact-me/ContactMe'

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
                     title=""
                     description="With a commitment to excellence and a passion for innovation, I offer a range of services."
                  />
                  <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                     {serviceData.map((item: any, index: any) => (
                        <div key={index}>
                           <ServiceCard data={item} />
                        </div>
                     ))}
                  </div>
               </div>

               <main id="projects" className="py-16 sm:py-16 md:py-16 xl:py-16">
                  <TextSlider />
               </main>

               <div id="testimonials" className="mt-16">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title=""
                        description="I believe that the best measure of success is the satisfaction of those I serve, and I'm proud to share their feedback with you."
                     />
                  </div>
                  <TestimonialSlider />
               </div>
            </div>
            <div id="experience" className="mt-16 md:mt-24 xl:mt-28">
               <div className="mb-10 xl:mb-12">
                  <SmallSubtitle
                     title="Experience"
                     description="Gain insights into my journey and expertise in IT and software development. Explore my hands-on experience in web and mobile app development"
                  />
               </div>
               <Experience />
            </div>
            <div id="contact-us">
               <ContactMe />
            </div>
         </div>
      </Fragment>
   )
}
