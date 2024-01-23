import Link from 'next/link'
import React from 'react'

interface SubtitleWithButtonProps {
   title: string
   description: string
   buttonText: string
   buttonLink?: any
}

const SubtitleWithButton = ({
   title,
   description,
   buttonText,
   buttonLink,
}: SubtitleWithButtonProps) => {
   return (
      <div className="flex items-center justify-center xl:justify-between">
         <div>
            <h2 className="text-2xl md:text-3xl xl:text-5xl text-base-content font-bold text-center xl:text-start">
               {title}
            </h2>
            <p className="md:max-w-[438px] text-base text-base-content/60 mt-4 text-center xl:text-start">
               {description}
            </p>
         </div>
         <div className="hidden xl:flex items-center justify-center">
            <Link
               href={buttonLink}
               className="btn btn-primary border-none py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit"
            >
               <span className="text-base font-medium text-primary-content">
                  {buttonText}
               </span>
               <span className="p-2 bg-primary-content rounded-full">
                  <svg
                     className="text-primary"
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M14.1667 7.5L17.5 10.8333M17.5 10.8333L14.1667 14.1667M17.5 10.8333L2.5 10.8333"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </span>
            </Link>
         </div>
      </div>
   )
}

export default SubtitleWithButton
