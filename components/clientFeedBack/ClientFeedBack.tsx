import FeedBackSlider from '../slider/FeedBackSlider'
import Link from 'next/link'

const ClientFeedBack = () => {
   return (
      <div className="p-6 sm:p-10 xl:p-20 bg-primary rounded-3xl">
         <div className="grid grid-cols-12">
            <div className="max-w-[304px] col-span-12 md:col-span-6 xl:col-span-4">
               <h4 className="text-3xl md:text-4xl xl:text-5xl font-semibold xl:font-bold text-primary-content">
                  Client Feedback
               </h4>
               <p className="mt-6 text-sm text-primary-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <div className="mt-8">
                  <Link
                     href="/service/1"
                     className="btn bg-primary-content border-none py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit group"
                  >
                     <span className="text-base font-medium text-primary group-hover:text-primary/60 transition group-hover: duration-300">
                        Hire Me
                     </span>
                     <div className="p-2 bg-primary rounded-full">
                        <svg
                           className="text-primary-content"
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
                     </div>
                  </Link>
               </div>
            </div>
            <div className="w-full col-span-12 md:col-span-6 xl:col-span-8 mt-10 md:mt-0">
               <FeedBackSlider />
            </div>
         </div>
      </div>
   )
}

export default ClientFeedBack
