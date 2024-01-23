import Link from 'next/link'
import React from 'react'
type ServiceCardProps = {
   data?: any
}

const ServiceCard = ({ data }: ServiceCardProps) => {
   return (
      <div className="p-6 sm:p-8 lg:p-6 xl:p-10 bg-base-100 rounded-xl group card">
         <div className="p-4 bg-primary/[0.05] text-primary rounded-xl w-fit group-hover:bg-primary group-hover:duration-300 transition group-hover:text-primary-content">
            {data.icon}
         </div>
         <h3 className="text-2xl font-medium text-base-content group-hover:text-primary group-hover:duration-300 transition  mt-8 z-20">
            <Link href="/service/single-page">{data.title}</Link>
         </h3>
         <p className="text-base text-base-content/60 mt-4">
            {data.description}
         </p>
      </div>
   )
}

export default ServiceCard
