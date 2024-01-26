import Link from 'next/link'

type FlipCardPropsType = {
   data?: {
      icon: JSX.Element
      title: string
      description: string
      ad?: {}
   }
}
const FlipCard = ({ data }: FlipCardPropsType) => {
   return (
      <div className="bg-transparent w-full h-[308px]">
         <div className="flip-box-inner relative w-full h-full">
            <div className="flip-box-front absolute w-full h-full">
               {/* front side  */}
               <div className="p-6 lg:p-8 bg-base-100 rounded-xl">
                  <div className="p-4 bg-base-100 rounded-xl w-fit text-base-content">
                     {data?.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mt-8">
                     {data?.title}
                  </h3>
                  <div className="flex flex-col gap-3 mt-6">
                     {data?.description}
                  </div>
               </div>
            </div>

            {/* back side  */}
            <div className="flip-box-back absolute w-full h-full">
               <div className="p-6 lg:p-8 bg-primary rounded-xl flex flex-col items-center gap-6">
                  <h5 className="text-xl font-semibold text-primary-content mt-4">
                     Advertising
                  </h5>
                  <p className="text-base text-primary-content text-center mx-auto">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua.
                  </p>
                  <Link
                     href="/service/single-page"
                     className="bg-primary-content hover:bg-primary-content/90 py-2.5 px-4 rounded-lg flex items-center justify-center w-fit gap-3"
                  >
                     <span className="text-base font-medium text-primary">
                        ORDER NOW
                     </span>
                     <div>
                        <svg
                           className="text-primary"
                           width="17"
                           height="10"
                           viewBox="0 0 17 10"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M12.6667 1.5L16 4.83333M16 4.83333L12.6667 8.16667M16 4.83333L1 4.83333"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FlipCard
