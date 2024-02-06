'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioCards = () => {
   const data: {
      id: number
      src: string
      category: string
   }[] = [
      {
         id: 1,
         src: '/item.png',
         category: 'UI Design',
      },
      {
         id: 2,
         src: '/item2.png',
         category: 'Web Templates',
      },
      {
         id: 3,
         src: '/item3.png',
         category: 'Logo',
      },
      {
         id: 4,
         src: '/item4.png',
         category: 'Branding',
      },
      {
         id: 5,
         src: '/item5.png',
         category: 'Web Templates',
      },
      {
         id: 6,
         src: '/item6.png',
         category: 'Logo',
      },
      {
         id: 7,
         src: '/item7.png',
         category: 'UI Design',
      },
      {
         id: 8,
         src: '/item8.png',
         category: 'Web Templates',
      },
      {
         id: 9,
         src: '/item9.png',
         category: 'Branding',
      },
   ]

   const [portfolioData, setPortfolioData] = useState(data)
   const [caregory, seCategory] = useState('All categories')

   const filterData = (title: string) => {
      seCategory(title)
      if (title === 'All categories') {
         setPortfolioData(data)
      } else {
         const filterData = data.filter((item: any) => item.category === title)
         setPortfolioData(filterData)
      }
   }

   return (
      <Fragment>
         <div className="mt-8 xl:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 cursor-pointer">
            {portfolioMenu.map((item: any, index: number) => (
               <p
                  onClick={() => filterData(item.title)}
                  className={`text-base font-medium text-base-content/60 hover:text-primary hover:duration-300 transition ${
                     caregory === item.title && 'text-primary'
                  }`}
                  key={index}
               >
                  {item.title}
               </p>
            ))}
         </div>
         <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
               {portfolioData.map((item: any, index: any) => (
                  <div key={index}>
                     <div className="relative group">
                        <Image
                           src={item.src}
                           alt={item.src}
                           className="w-full rounded-xl"
                           width={324}
                           height={324}
                        />
                        <Link
                           href="/blog/project-details"
                           className="bg-primary/80 w-full h-full absolute top-0 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition group-hover:duration-500"
                        >
                           <svg
                              className="text-primary-content"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M16 6V26M26 16H6"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Fragment>
   )
}

export default PortfolioCards

const portfolioMenu = [
   {
      id: 1,
      title: 'All categories',
   },
   {
      id: 2,
      title: 'UI Design',
   },
   {
      id: 3,
      title: 'Web Templates',
   },
   {
      id: 4,
      title: 'Logo',
   },
   {
      id: 5,
      title: 'Branding',
   },
]
