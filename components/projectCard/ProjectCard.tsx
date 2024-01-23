import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

const ProjectCard = () => {
   return (
      <Fragment>
         <div className="relative">
            <Link href="portfolio-single">
               <Image
                  src="/portfolio/Item.png"
                  width={520}
                  height={390}
                  priority={true}
                  alt="product-image"
               />
            </Link>
         </div>
         <p className="text-base font-medium text-base-content mt-5 ">Google</p>
         <h1 className="text-xl sm:text-2xl font-semibold text-base-content pt-1 mb-4 hover:text-primary transition duration-300 ease-in-out capitalize line-clamp-1">
            <Link href="/portfolio-single">Senior Product Designer</Link>
         </h1>
         <Link
            href="/portfolio-single"
            className="text-sm font-medium text-base-content/60 underline underline-offset-8 hover:text-primary transition duration-300 ease-in-out"
         >
            View Case Study
         </Link>
      </Fragment>
   )
}

export default ProjectCard
