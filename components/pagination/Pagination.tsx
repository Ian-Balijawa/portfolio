import Link from 'next/link'

const Pagination = () => {
   return (
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-6">
            <Link
               href={'/project-details'}
               className="py-4 px-3 bg-primary-content/20 rounded-full w-fit cursor-pointer"
            >
               <svg
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M5 1L1 5M1 5L5 9M1 5L19 5"
                     stroke="white"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </Link>
            <div className="hidden xl:block">
               <p className="text-lg text-base-content">Previous Blog</p>
               <h6 className="mt-1 text-base-content text-2xl font-medium">
                  Creative Graphic Design
               </h6>
            </div>
         </div>
         <div className="flex items-center gap-6">
            <div className="hidden xl:block">
               <p className="text-lg text-base-content">Next Blog</p>
               <h6 className="mt-1 text-base-content text-2xl font-medium">
                  Creative Graphic Design
               </h6>
            </div>
            <Link
               href="/project-details"
               className="py-4 px-3 bg-primary rounded-full w-fit cursor-pointer"
            >
               <svg
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M15 1L19 5M19 5L15 9M19 5L1 5"
                     stroke="#131313"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </Link>
         </div>
      </div>
   )
}

export default Pagination
