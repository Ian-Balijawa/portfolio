import TextSlider from '@/components/slider/TextSlider'
import React from 'react'
import { Metadata } from 'next'
import ServiceDescription from '@/components/serviceCard/ServiceDescription'
import Appointment from '@/components/contact-us/Appointment'
export const metadata: Metadata = {
   title: 'Service single page',
   description: 'Service single page description',
}

const SinglePage = () => {
   return (
      <>
         <main>
            <div className="container mx-auto pt-16 sm:pt-20 md:pt-24 xl:pt-32 flex flex-col gap-8 xl:flex-row xl:gap-10">
               <ServiceDescription />
               <div className="xl:min-w-[373px] px-5 lg:px-0">
                  {/* more service section  */}
                  <div className="bg-base-100 rounded-xl px-6 py-8 mb-6">
                     <h5 className="text-xl font-semibold text-base-content leading-7">
                        More Services
                     </h5>
                     <div className="pt-2">
                        {ServiceData.map((item: any, index: number) => (
                           <p
                              className={`text-base text-base-content leading-6 mt-4 ${
                                 index + 1 === ServiceData.length
                                    ? ''
                                    : 'pb-4 border-b border-base-content/10'
                              }`}
                              key={index}
                           >
                              {item.title}
                           </p>
                        ))}
                     </div>
                  </div>
                  <Appointment />
               </div>
            </div>
            <div className="my-16 sm:my-20 md:my-24 xl:my-32">
               <TextSlider />
            </div>
         </main>
      </>
   )
}

export default SinglePage

const ServiceData = [
   {
      id: 1,
      title: 'App Development',
   },
   {
      id: 2,
      title: 'UI/UX Design',
   },
   {
      id: 3,
      title: 'Graphics Design',
   },
   {
      id: 4,
      title: 'Digital Marketing',
   },
   {
      id: 5,
      title: 'Video Editing',
   },
]
