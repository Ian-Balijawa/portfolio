'use client'
import React, { Fragment } from 'react'
import useThemes from '@/context/themeProvider'
import Image from 'next/image'
import Link from 'next/link'

interface TopNavbarProps {
   NavData: any
}

const TopNavbar = ({ NavData }: TopNavbarProps) => {
   const { theme, setTheme, themes: AllTheme, hydrationFix } = useThemes()
   const [sidebarOpen, setSidebarOpen] = React.useState(false)
   return (
      <Fragment>
         <nav className="container mx-auto px-5 sm:px-0 pt-8">
            <div className="flex items-center justify-between h-20 bg-base-100 border border-base-content/5 rounded-full px-8 py-4">
               <Link href={'/'}>
                  <Image
                     src="/logo.png"
                     width={100}
                     height={60}
                     alt="profle-image"
                  />
               </Link>
               <div className="hidden lg:flex items-center gap-8 ">
                  {NavData?.map((item: any, index: number) => (
                     <a
                        href={item?.link}
                        key={index}
                        className="text-base font-medium text-base-content hover:text-primary transition duration-300 ease-in-out"
                     >
                        {item?.title}
                     </a>
                  ))}
               </div>
               <div className="flex items-center gap-9 lg:gap-0">
                  <div className="dropdown dropdown-end">
                     <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                     >
                        <div className="flex items-center justify-center bg-base-100 rounded-full p-3 cursor-pointer">
                           <svg
                              className="text-primary"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M19.4235 14.5625C19.3438 14.4734 19.2735 14.3937 19.2219 14.3328C19.0626 14.1453 18.8423 14.0281 18.5985 14.0047C18.3501 13.9812 18.1063 14.0516 17.9141 14.2109C17.8673 14.2484 17.8251 14.2906 17.7876 14.3375C17.7313 14.4031 17.6563 14.4875 17.5673 14.5859C16.8454 15.3922 15.5001 16.9015 15.5001 18.4625C15.5001 20.1406 16.8454 21.5047 18.5001 21.5047C20.1548 21.5047 21.5001 20.1406 21.5001 18.4625C21.5001 16.8875 20.1501 15.3734 19.4235 14.5625ZM18.5001 20C17.6751 20 17.0001 19.3062 17.0001 18.4578C17.0001 17.5672 17.9188 16.4515 18.5048 15.7859C19.0907 16.4515 20.0001 17.5672 20.0001 18.4578C20.0001 19.3062 19.3251 20 18.5001 20Z"
                                 fill="currentColor"
                              />
                              <path
                                 d="M16.911 13.7703H16.9251C17.2063 13.7703 17.4735 13.6625 17.6704 13.4609C17.8719 13.2594 17.9798 12.9969 17.9798 12.7156C17.9798 12.4344 17.8673 12.1578 17.6657 11.9609L6.82351 1.2078C5.87664 0.256241 4.32976 0.251553 3.3782 1.20312L3.13445 1.44687C2.18289 2.39374 2.1782 3.94062 3.12976 4.89218L5.07976 6.84218L1.10945 10.8078C0.720387 11.1969 0.504762 11.7125 0.500075 12.2656C0.495387 12.8187 0.711012 13.3344 1.10007 13.7234C1.10945 13.7328 1.11882 13.7422 1.13289 13.7562L7.28289 19.6625C7.68601 20.0469 8.19695 20.2391 8.71257 20.2391C9.2282 20.2391 9.74851 20.0422 10.1469 19.6578L10.8079 19.0203C12.7626 17.1312 15.7063 14.2812 16.0907 13.8969C16.1141 13.8734 16.3063 13.7703 16.911 13.7703ZM4.18914 3.83749C3.82351 3.46718 3.82351 2.87655 4.18914 2.51093L4.43289 2.26718C4.79851 1.90155 5.39382 1.90155 5.75945 2.27187L7.71414 4.21249L6.13445 5.79218L4.18914 3.83749ZM15.036 12.8234C14.6891 13.1703 11.6094 16.1516 9.76726 17.9375L9.10633 18.575C8.88601 18.7859 8.54382 18.7859 8.32351 18.5797L2.17351 12.6734L2.16414 12.6641C2.05632 12.5562 2.00007 12.4156 2.00007 12.2656C2.00007 12.1156 2.06101 11.975 2.16882 11.8672L6.13914 7.90624L8.78289 5.26249L15.9407 12.3641C15.5563 12.4531 15.2563 12.6031 15.036 12.8234Z"
                                 fill="currentColor"
                              />
                           </svg>
                        </div>
                     </label>
                     <ul
                        tabIndex={0}
                        className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
                     >
                        {AllTheme.map((item: any) => (
                           <li
                              data-theme={item}
                              key={item}
                              className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 hover:bg-base-300 transition-all duration-300 cursor-pointer`}
                              onClick={() => {
                                 setTheme(item)
                              }}
                           >
                              <span className="text-base-content flex items-center gap-2">
                                 {hydrationFix && theme === item && (
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="currentColor"
                                       className="w-3 h-3 text-primary"
                                    >
                                       <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                                    </svg>
                                 )}
                                 {item}
                              </span>
                              <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                                 <div className="bg-primary w-2 rounded"></div>{' '}
                                 <div className="bg-secondary w-2 rounded"></div>{' '}
                                 <div className="bg-accent w-2 rounded"></div>{' '}
                                 <div className="bg-neutral w-2 rounded"></div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <svg
                     onClick={() => setSidebarOpen(!sidebarOpen)}
                     className="block lg:hidden text-base-content cursor-pointer"
                     width="18"
                     height="16"
                     viewBox="0 0 18 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M15 14V16H3V14H15ZM18 7V9H0V7H18ZM15 0V2H3V0H15Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
            </div>
         </nav>
         {/* small device sidebar */}
         <nav className="block lg:hidden">
            <div
               className={`overflow-y-auto z-40 flex p-8 top-0 flex-col h-screen w-full max-w-[360px] fixed bg-base-100  duration-500 ease-in  gap-2 md:gap-0 shadow-xl ${
                  sidebarOpen ? 'left-0' : '-left-full'
               }`}
            >
               <div className="flex items-center justify-between">
                  {/* logo svg icon  */}
                  <svg
                     className="text-primary"
                     width="40"
                     height="40"
                     viewBox="0 0 40 40"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M0 16C0 7.16344 7.16344 0 16 0H24C15.1634 0 8 7.16344 8 16V40C3.58172 40 0 36.4183 0 32V16Z"
                        fill="currentColor"
                     />
                     <path
                        d="M24 32C32.8366 32 40 24.8366 40 16V24C40 32.8366 32.8366 40 24 40H18V30.837C19.8529 31.587 21.8782 32 24 32Z"
                        fill="currentColor"
                     />
                     <path
                        d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24Z"
                        fill="currentColor"
                     />
                  </svg>
                  {/* cross svg icon  */}
                  <div>
                     <svg
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-base-content cursor-pointer hover:text-red-600 transition hover:duration-300"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.93934 6L0.21967 10.7197C-0.0732233 11.0126 -0.0732233 11.4874 0.21967 11.7803C0.512563 12.0732 0.987437 12.0732 1.28033 11.7803L6 7.06066L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L7.06066 6L11.7803 1.28033C12.0732 0.987437 12.0732 0.512563 11.7803 0.21967C11.4874 -0.0732233 11.0126 -0.0732233 10.7197 0.21967L6 4.93934L1.28033 0.21967Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>
               </div>
               <div className="mt-16 flex flex-col gap-7">
                  {NavData?.map((item: any, index: number) => (
                     <a
                        key={index}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        href={item.link}
                        className="text-lg text-base-content/80 font-normal hover:opacity-60 transition-all hover:duration-300"
                     >
                        {item.title}
                     </a>
                  ))}
               </div>
            </div>

            {/* bg overlay */}
            <div
               className={`fixed top-0 z-30 transition-all duration-500 ease-in-out  h-full w-full backdrop-blur-sm ${
                  sidebarOpen ? 'left-0' : '-left-full'
               }`}
               onClick={() => setSidebarOpen(false)}
            />
         </nav>
      </Fragment>
   )
}

export default TopNavbar
