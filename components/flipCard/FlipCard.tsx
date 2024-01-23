import Link from 'next/link'
import React from 'react'

type FlipCardPropsType = {
   data?: any
}
const FlipCard = ({ data }: FlipCardPropsType) => {
   return (
      <div className="flip-box bg-transparent w-full h-[308px]">
         <div className="flip-box-inner relative w-full h-full">
            <div className="flip-box-front absolute w-full h-full">
               {/* front side  */}
               <div className="p-6 lg:p-8 bg-base-100 rounded-xl">
                  <div className="p-4 bg-base-100 rounded-xl w-fit text-base-content">
                     <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M32 7.5625V2.875C32 1.32419 30.7383 0.0625 29.1875 0.0625H2.8125C1.26169 0.0625 0 1.32419 0 2.875V7.5625H32ZM21.625 3.8125H27.25C27.7677 3.8125 28.1875 4.23225 28.1875 4.75C28.1875 5.26775 27.7677 5.6875 27.25 5.6875H21.625C21.1073 5.6875 20.6875 5.26775 20.6875 4.75C20.6875 4.23225 21.1073 3.8125 21.625 3.8125ZM12.25 3.8125C12.7677 3.8125 13.1875 4.23225 13.1875 4.75C13.1875 5.26775 12.7677 5.6875 12.25 5.6875C11.7323 5.6875 11.3125 5.26775 11.3125 4.75C11.3125 4.23225 11.7323 3.8125 12.25 3.8125ZM8.5 3.8125C9.01775 3.8125 9.4375 4.23225 9.4375 4.75C9.4375 5.26775 9.01775 5.6875 8.5 5.6875C7.98225 5.6875 7.5625 5.26775 7.5625 4.75C7.5625 4.23225 7.98225 3.8125 8.5 3.8125ZM4.75 3.8125C5.26775 3.8125 5.6875 4.23225 5.6875 4.75C5.6875 5.26775 5.26775 5.6875 4.75 5.6875C4.23225 5.6875 3.8125 5.26775 3.8125 4.75C3.8125 4.23225 4.23225 3.8125 4.75 3.8125ZM0 9.4375V29.125C0 30.6758 1.26169 31.9375 2.8125 31.9375H29.1875C30.7383 31.9375 32 30.6758 32 29.125V9.4375H0ZM10.9606 22.7679C11.365 23.0914 11.4305 23.6813 11.1071 24.0856C10.7837 24.4899 10.1936 24.5555 9.78938 24.232L5.10187 20.482C4.63319 20.1072 4.63287 19.393 5.10187 19.0179L9.78938 15.2679C10.1935 14.9444 10.7836 15.0099 11.1071 15.4143C11.4305 15.8186 11.365 16.4086 10.9606 16.7319L7.18825 19.75L10.9606 22.7679ZM19.6742 13.5568L14.0492 26.6818C13.8453 27.1576 13.2943 27.3783 12.8182 27.1742C12.3423 26.9702 12.1218 26.4191 12.3258 25.9432L17.9508 12.8182C18.1548 12.3423 18.7059 12.1219 19.1818 12.3258C19.6577 12.5297 19.8782 13.0809 19.6742 13.5568ZM26.8981 20.4821L22.2106 24.2321C21.807 24.5551 21.2169 24.4906 20.8929 24.0857C20.5695 23.6814 20.635 23.0914 21.0394 22.768L24.8118 19.75L21.0394 16.7321C20.635 16.4086 20.5695 15.8187 20.8929 15.4144C21.2163 15.0101 21.8063 14.9445 22.2106 15.268L26.8981 19.018C27.3668 19.3928 27.3671 20.1069 26.8981 20.4821Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mt-8">
                     Web Development
                  </h3>
                  <div className="flex flex-col gap-3 mt-6">
                     <div className="flex items-center gap-4">
                        <div>
                           <svg
                              className="text-base-content"
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M8 1L13 6M13 6L8 11M13 6L1 6"
                                 stroke="currentColor"
                                 strokeWidth="1.5"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </div>
                        <p className="text-base text-base-content/60">
                           Frontend Development
                        </p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div>
                           <svg
                              className="text-base-content"
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M8 1L13 6M13 6L8 11M13 6L1 6"
                                 stroke="currentColor"
                                 strokeWidth="1.5"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </div>
                        <p className="text-base text-base-content/60">
                           Backend Development
                        </p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div>
                           <svg
                              className="text-base-content"
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M8 1L13 6M13 6L8 11M13 6L1 6"
                                 stroke="currentColor"
                                 strokeWidth="1.5"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </div>
                        <p className="text-base text-base-content/60">
                           CMS Development
                        </p>
                     </div>
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
