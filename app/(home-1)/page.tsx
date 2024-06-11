import { Fragment, useMemo } from 'react'
import { Metadata } from 'next'
import Banner from '@/components/banner/Banner'
import ContactUs from '@/components/contact-us/ContactUs'
import Education from '@/components/education/Education'
import Experience from '@/components/experience/Experience'
import TestimonialSlider from '@/components/slider/TestimonialSlider'
import SmallSubtitle from '@/components/subtitle/SmallSubtitle'
import ServiceCard from '@/components/serviceCard/ServiceCard'
import TextSlider from '@/components/slider/TextSlider'
import { serviceData } from '@/app/service-data'

export const metadata: Metadata = {
   title: 'Ian | Balijawa',
   description:
      'Explore my comprehensive guides, tutorials, and resources to help you master Topic. Start your journey today with us',
}

export default function Home() {
   const projects = useMemo(
      () => [
         {
            title: 'Link bedsides',
            desc: 'Caren Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
            img: '/link/link.png',
            id: '2',
         },
         {
            title: 'Home invest uganda',
            desc: 'Home invest ugdanda Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
            img: '/hiu/cardImg.png',
            id: '3',
         },
         {
            title: 'Link bedsides Dashboard',
            desc: 'Home invest ugdanda Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint',
            img: '/link/dashboard.png',
            id: '4',
         },
      ],

      []
   )

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
               <div id="education" className="mt-16 md:mt-24 xl:mt-28">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Education"
                        description="Unlocking the foundations of my expertise, my educational journey spans degrees in Computer Science and certifications in IT disciplines."
                     />
                  </div>
                  <Education />
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
                  <ContactUs />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
