import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PortFolioCardLg = () => {
   return (
      <div className="bg-base-100 rounded-3xl">
         <div className="p-6">
            <Link href="/portfolio-single">
               <h3 className="text-xl sm:text-3xl md:text-xl xl:text-3xl text-base-content hover:text-primary hover:duration-300 transition">
                  Portfolio Website
               </h3>
            </Link>
            <p className="mt-1 mb-3 text-base-content/70 text-sm">Web Design</p>
            <Link href="/portfolio-single">
               <Image
                  src="/home-1.png"
                  alt="Picture of the author"
                  className=""
                  width={584}
                  height={432}
               />
            </Link>
         </div>
      </div>
   )
}

export default PortFolioCardLg
