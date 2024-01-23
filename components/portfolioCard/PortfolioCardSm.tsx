import Image from 'next/image'
import React from 'react'

const PortfolioCardSm = () => {
   return (
      <div className="bg-base-content/[0.03] rounded-3xl w-fit xl:max-w-[469px] h-fit">
         <div className="pt-6 pl-6 sm:pt-8 sm:pl-8 md:pt-6 md:pl-8 xl:pt-10 xl:pl-10">
            <h3 className="text-xl sm:text-3xl md:text-xl xl:text-3xl text-base-content">
               Portfolio Website
            </h3>
            <p className="mt-1 text-base-content/70 text-sm">Web Design</p>
         </div>
         <Image
            src="/image-10.png"
            alt="Picture of the author"
            className="h-full"
            width={440}
            height={432}
         />
      </div>
   )
}

export default PortfolioCardSm
