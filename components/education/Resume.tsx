'use client'
import React, { useState } from 'react'
import Education from './Education'
import Experience from '../experience/Experience'

const Resume = () => {
   const [view, setView] = useState(1)
   return (
      <div className="grid grid-cols-12 md:gap-8 lg:gap-0 px-5">
         <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center xl:items-start lg:justify-start gap-8 lg:gap-6 col-span-12 lg:col-span-3 lg:mt-10">
            {ResumeData.map((item: any, index: any) => (
               <div
                  className="flex gap-4 items-center group cursor-pointer"
                  key={index}
                  onClick={() => setView(item.id)}
               >
                  <div
                     className={`border :  ${
                        item.id === view
                           ? 'w-10 border-primary'
                           : 'w-5 border-base-content/30'
                     }`}
                  ></div>
                  <h6
                     className={`text-lg ${
                        item.id === view
                           ? 'text-primary'
                           : 'text-base-content/50'
                     }`}
                  >
                     {item.title}
                  </h6>
               </div>
            ))}
         </div>
         <div className="col-span-12 lg:col-span-9 mt-8 md:mt-0">
            {view === 1 && <Education />}
            {view === 2 && <Experience />}
            {view === 3 && <Education />}
         </div>
      </div>
   )
}

export default Resume

const ResumeData = [
   {
      id: 1,
      title: 'Education',
   },
   {
      id: 2,
      title: 'Experience',
   },
   {
      id: 3,
      title: 'Professional Skills',
   },
]
