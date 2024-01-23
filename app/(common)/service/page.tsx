import TextSlider from '@/components/slider/TextSlider'
import Subtitle from '@/components/subtitle/Subtitle'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'
import { RightArrowIcon } from '@/components/icons'
import { serviceData } from '../home-2/page'
import ServiceCard from '@/components/serviceCard/ServiceCard'

export const metadata: Metadata = {
   title: 'Service page',
   description: 'Service page description',
}

const Service = () => {
   return (
      <>
         <main className="pt-16 sm:pt-20 md:pt-24 xl:pt-32">
            <div className="container mx-auto px-5 md:px-0">
               <Subtitle
                  title="Our services"
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  lorem ipsum"
               />
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 xl:gap-8 items-center mt-8 sm:mt-10 md:mt-12 xl:mt-16">
                  {serviceData.map((item: any, index: any) => (
                     <div key={index}>
                        <ServiceCard data={item} />
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
            <div className="py-16 sm:py-20 md:py-24 xl:py-32">
               <TextSlider />
            </div>
         </main>
      </>
   )
}

export default Service
