import { Fragment, useMemo } from 'react'
import { Metadata } from 'next'
import Banner from '@/components/banner/Banner'
import ContactUs from '@/components/contact-us/ContactUs'
import Education from '@/components/education/Education'
import Experience from '@/components/experience/Experience'
import TestimonialSlider from '@/components/slider/TestimonialSlider'
import SmallSubtitle from '@/components/subtitle/SmallSubtitle'
import ServiceCard from '@/components/serviceCard/ServiceCard'
import { RightArrowIcon } from '@/components/icons'
import TextSlider from '@/components/slider/TextSlider'
import Subtitle from '@/components/subtitle/Subtitle'
import ProjectCard from '@/components/projectCard/ProjectCard'
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
                     title="My Services"
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

               <main id="projects" className="py-16 sm:py-20 md:py-24 xl:py-32">
                  <div className="container mx-auto px-5 md:px-0">
                     <Subtitle
                        title="Show case"
                        description="Discover my exceptional projects, crafted with innovation and excellence. Let's elevate your digital presence together."
                     />
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 items-center mt-10 xl:mt-16">
                        {projects.map((item, index) => (
                           <div key={index}>
                              <ProjectCard {...item} />
                           </div>
                        ))}
                     </div>
                     <button className="flex items-center gap-5 btn btn-primary border-none rounded-full h-12 pl-6 pr-1.5 mt-10 xl:mt-16 w-fit mx-auto">
                        <span className="text-base font-medium text-primary-content">
                           Explore More
                        </span>
                        <div className="p-2 bg-primary-content rounded-full">
                           <RightArrowIcon className="text-primary" />
                        </div>
                     </button>
                  </div>
                  <div className="pt-16 sm:pt-20 md:pt-24 xl:pt-32">
                     <TextSlider />
                  </div>
               </main>

               <div id="testimonials" className="mt-16 md:mt-24 xl:mt-28">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Testimonials"
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
