'use client'
import useThemes from '@/context/themeProvider'
import Image from 'next/image'

const RightNavbar = () => {
   const { theme, setTheme, themes: AllTheme, hydrationFix } = useThemes()
   return (
      <div className="!relative">
         <div className="dropdown dropdown-end relative w-full pb-6 px-5 z-20">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="flex items-center justify-center bg-base-100  p-3 cursor-pointer">
                  <Image width={100} height={150} src="/logo.png" alt="logo" />
               </div>
            </label>
            <ul
               tabIndex={0}
               className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
            >
               {AllTheme.map((item) => (
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
                        <div className="bg-primary w-2 rounded"></div>
                        <div className="bg-secondary w-2 rounded"></div>
                        <div className="bg-accent w-2 rounded"></div>
                        <div className="bg-neutral w-2 rounded"></div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
         <div className="px-5 overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center gap-8 h-[calc(100vh-9rem)]">
            {NavData.map((item: any, index: any) => (
               <a
                  href={item.link}
                  key={index}
                  className="group p-4 text-base-content bg-base-100 rounded-lg hover:bg-primary hover:text-primary-content transition hover:duration-300 tooltip"
                  data-tip={item.title}
               >
                  <span>{item.icon}</span>
               </a>
            ))}
         </div>
      </div>
   )
}

export default RightNavbar

const NavData = [
   {
      title: 'Home',
      link: '#home',
      icon: (
         <svg
            className="opacity-60"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M11.4701 3.83999C11.6107 3.69954 11.8013 3.62065 12.0001 3.62065C12.1988 3.62065 12.3895 3.69954 12.5301 3.83999L21.2201 12.53C21.2887 12.6037 21.3715 12.6628 21.4635 12.7038C21.5555 12.7448 21.6549 12.7668 21.7556 12.7686C21.8563 12.7704 21.9563 12.7518 22.0497 12.7141C22.1431 12.6764 22.2279 12.6202 22.2991 12.549C22.3703 12.4778 22.4265 12.393 22.4642 12.2996C22.5019 12.2062 22.5204 12.1062 22.5187 12.0055C22.5169 11.9048 22.4949 11.8055 22.4539 11.7135C22.4129 11.6215 22.3538 11.5387 22.2801 11.47L13.5911 2.77999C13.3821 2.57106 13.1341 2.40532 12.8611 2.29225C12.5881 2.17917 12.2956 2.12097 12.0001 2.12097C11.7046 2.12097 11.412 2.17917 11.139 2.29225C10.8661 2.40532 10.618 2.57106 10.4091 2.77999L1.71908 11.47C1.58253 11.6115 1.50702 11.801 1.50882 11.9976C1.51062 12.1943 1.58959 12.3824 1.72871 12.5214C1.86783 12.6603 2.05598 12.7391 2.25263 12.7407C2.44928 12.7424 2.63869 12.6667 2.78008 12.53L11.4701 3.83999Z"
               fill="currentColor"
            />
            <path
               d="M12 5.43199L20.159 13.591C20.189 13.621 20.219 13.649 20.25 13.677V19.875C20.25 20.91 19.41 21.75 18.375 21.75H15C14.8011 21.75 14.6103 21.671 14.4697 21.5303C14.329 21.3897 14.25 21.1989 14.25 21V16.5C14.25 16.3011 14.171 16.1103 14.0303 15.9697C13.8897 15.829 13.6989 15.75 13.5 15.75H10.5C10.3011 15.75 10.1103 15.829 9.96967 15.9697C9.82902 16.1103 9.75 16.3011 9.75 16.5V21C9.75 21.1989 9.67098 21.3897 9.53033 21.5303C9.38968 21.671 9.19891 21.75 9 21.75H5.625C5.12772 21.75 4.65081 21.5524 4.29917 21.2008C3.94754 20.8492 3.75 20.3723 3.75 19.875V13.677C3.78111 13.6492 3.81146 13.6205 3.841 13.591L12 5.42999V5.43199Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      title: 'Services',
      link: '#service',
      icon: (
         <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.6">
               <path
                  d="M11.25 4.53301C9.6831 3.52938 7.86076 2.99725 6 3.00001C4.89299 2.99888 3.7939 3.18657 2.75 3.55501C2.60379 3.6067 2.4772 3.70245 2.38766 3.82906C2.29812 3.95568 2.25002 4.10693 2.25 4.26201V18.512C2.25002 18.632 2.27882 18.7502 2.33398 18.8567C2.38915 18.9633 2.46907 19.055 2.56703 19.1243C2.665 19.1936 2.77815 19.2383 2.89699 19.2548C3.01583 19.2713 3.13689 19.259 3.25 19.219C4.13333 18.9075 5.06333 18.7488 6 18.75C7.995 18.75 9.823 19.457 11.25 20.636V4.53301ZM12.75 20.636C14.2264 19.4141 16.0836 18.747 18 18.75C18.966 18.75 19.89 18.916 20.75 19.22C20.8632 19.26 20.9843 19.2723 21.1033 19.2558C21.2222 19.2392 21.3354 19.1944 21.4334 19.125C21.5314 19.0556 21.6113 18.9638 21.6664 18.8571C21.7215 18.7504 21.7501 18.6321 21.75 18.512V4.26201C21.75 4.10693 21.7019 3.95568 21.6123 3.82906C21.5228 3.70245 21.3962 3.6067 21.25 3.55501C20.2061 3.18657 19.107 2.99888 18 3.00001C16.1392 2.99725 14.3169 3.52938 12.75 4.53301V20.636Z"
                  fill="currentColor"
               />
            </g>
         </svg>
      ),
   },
   {
      title: 'Projects',
      link: '#projects',
      icon: (
         <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.6">
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 5.25C7.5 4.45435 7.81607 3.69129 8.37868 3.12868C8.94129 2.56607 9.70435 2.25 10.5 2.25H13.5C14.2956 2.25 15.0587 2.56607 15.6213 3.12868C16.1839 3.69129 16.5 4.45435 16.5 5.25V5.455C17.433 5.54 18.357 5.652 19.274 5.789C20.728 6.007 21.75 7.272 21.75 8.706V11.739C21.75 12.95 21.016 14.091 19.814 14.491C17.2938 15.3275 14.6554 15.7526 12 15.75C9.27 15.75 6.643 15.308 4.186 14.491C2.984 14.091 2.25 12.95 2.25 11.739V8.706C2.25 7.272 3.272 6.006 4.726 5.789C5.64729 5.65122 6.57234 5.53984 7.5 5.455V5.25ZM15 5.25V5.34C13.0018 5.21865 10.9982 5.21865 9 5.34V5.25C9 4.85218 9.15804 4.47064 9.43934 4.18934C9.72064 3.90804 10.1022 3.75 10.5 3.75H13.5C13.8978 3.75 14.2794 3.90804 14.5607 4.18934C14.842 4.47064 15 4.85218 15 5.25ZM12 13.5C12.1989 13.5 12.3897 13.421 12.5303 13.2803C12.671 13.1397 12.75 12.9489 12.75 12.75C12.75 12.5511 12.671 12.3603 12.5303 12.2197C12.3897 12.079 12.1989 12 12 12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75C11.25 12.9489 11.329 13.1397 11.4697 13.2803C11.6103 13.421 11.8011 13.5 12 13.5Z"
                  fill="currentColor"
               />
               <path
                  d="M3 18.4V15.604C3.22782 15.7287 3.46646 15.8324 3.713 15.914C6.38569 16.8014 9.18385 17.2525 12 17.25C14.892 17.25 17.68 16.782 20.287 15.915C20.539 15.831 20.777 15.726 21 15.604V18.4C21 19.852 19.953 21.128 18.477 21.323C16.357 21.605 14.195 21.75 12 21.75C9.83395 21.7504 7.67024 21.6078 5.523 21.323C4.047 21.128 3 19.852 3 18.4Z"
                  fill="currentColor"
               />
            </g>
         </svg>
      ),
   },
   {
      title: 'Testimonials',
      link: '#testimonials',
      icon: (
         <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M28 0H4C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0ZM30 28C30 28.5304 29.7893 29.0391 29.4142 29.4142C29.0391 29.7893 28.5304 30 28 30H4C3.46957 30 2.96086 29.7893 2.58579 29.4142C2.21071 29.0391 2 28.5304 2 28V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H28C28.5304 2 29.0391 2.21071 29.4142 2.58579C29.7893 2.96086 30 3.46957 30 4V28Z"
               fill="currentColor"
            />
            <path
               d="M21 12.5H11C10.7239 12.5 10.5 12.7239 10.5 13V19C10.5 19.2761 10.7239 19.5 11 19.5H21C21.2761 19.5 21.5 19.2761 21.5 19V13C21.5 12.7239 21.2761 12.5 21 12.5ZM11 11C9.34315 11 8 12.3431 8 14V18C8 19.6569 9.34315 21 11 21H21C22.6569 21 24 19.6569 24 18V14C24 12.3431 22.6569 11 21 11H11Z"
               fill="currentColor"
            />
            <path
               d="M14 15.5C14.2761 15.5 14.5 15.7239 14.5 16V24C14.5 24.2761 14.2761 24.5 14 24.5C13.7239 24.5 13.5 24.2761 13.5 24V16C13.5 15.7239 13.7239 15.5 14 15.5Z"
               fill="currentColor"
            />
            <path
               d="M18 15.5C18.2761 15.5 18.5 15.7239 18.5 16V24C18.5 24.2761 18.2761 24.5 18 24.5C17.7239 24.5 17.5 24.2761 17.5 24V16C17.5 15.7239 17.7239 15.5 18 15.5Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      title: 'Education',
      link: '#education',
      icon: (
         <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.6">
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6ZM17.25 12C17.2498 12.1988 17.1707 12.3895 17.03 12.53L14.78 14.78C14.7113 14.8537 14.6285 14.9128 14.5365 14.9538C14.4445 14.9948 14.3452 15.0168 14.2445 15.0186C14.1438 15.0204 14.0438 15.0018 13.9504 14.9641C13.857 14.9264 13.7722 14.8703 13.701 14.799C13.6297 14.7278 13.5736 14.643 13.5359 14.5496C13.4982 14.4562 13.4796 14.3562 13.4814 14.2555C13.4832 14.1548 13.5052 14.0555 13.5462 13.9635C13.5872 13.8715 13.6463 13.7887 13.72 13.72L15.44 12L13.72 10.28C13.6463 10.2113 13.5872 10.1285 13.5462 10.0365C13.5052 9.94454 13.4832 9.84522 13.4814 9.74452C13.4796 9.64382 13.4982 9.54379 13.5359 9.4504C13.5736 9.35701 13.6297 9.27218 13.701 9.20096C13.7722 9.12974 13.857 9.0736 13.9504 9.03588C14.0438 8.99816 14.1438 8.97963 14.2445 8.98141C14.3452 8.98318 14.4445 9.00523 14.5365 9.04622C14.6285 9.08721 14.7113 9.14631 14.78 9.22L17.03 11.47C17.171 11.61 17.25 11.801 17.25 12ZM6.97 11.47C6.82955 11.6106 6.75066 11.8012 6.75066 12C6.75066 12.1988 6.82955 12.3894 6.97 12.53L9.22 14.78C9.28866 14.8537 9.37146 14.9128 9.46346 14.9538C9.55546 14.9948 9.65478 15.0168 9.75548 15.0186C9.85618 15.0204 9.95621 15.0018 10.0496 14.9641C10.143 14.9264 10.2278 14.8703 10.299 14.799C10.3703 14.7278 10.4264 14.643 10.4641 14.5496C10.5018 14.4562 10.5204 14.3562 10.5186 14.2555C10.5168 14.1548 10.4948 14.0555 10.4538 13.9635C10.4128 13.8715 10.3537 13.7887 10.28 13.72L8.56 12L10.28 10.28C10.3537 10.2113 10.4128 10.1285 10.4538 10.0365C10.4948 9.94454 10.5168 9.84522 10.5186 9.74452C10.5204 9.64382 10.5018 9.54379 10.4641 9.4504C10.4264 9.35701 10.3703 9.27218 10.299 9.20096C10.2278 9.12974 10.143 9.0736 10.0496 9.03588C9.95621 8.99816 9.85618 8.97963 9.75548 8.98141C9.65478 8.98318 9.55546 9.00523 9.46346 9.04622C9.37146 9.08721 9.28866 9.14631 9.22 9.22L6.97 11.47Z"
                  fill="currentColor"
               />
            </g>
         </svg>
      ),
   },
   {
      title: 'Experience',
      link: '#experience',
      icon: (
         <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.6">
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.625 1.5C4.589 1.5 3.75 2.34 3.75 3.375V20.625C3.75 21.66 4.59 22.5 5.625 22.5H18.375C19.41 22.5 20.25 21.66 20.25 20.625V12.75C20.25 11.7554 19.8549 10.8016 19.1517 10.0983C18.4484 9.39509 17.4946 9 16.5 9H14.625C14.1277 9 13.6508 8.80246 13.2992 8.45083C12.9475 8.0992 12.75 7.62228 12.75 7.125V5.25C12.75 4.25544 12.3549 3.30161 11.6517 2.59835C10.9484 1.89509 9.99456 1.5 9 1.5H5.625ZM7.5 15C7.5 14.8011 7.57902 14.6103 7.71967 14.4697C7.86032 14.329 8.05109 14.25 8.25 14.25H15.75C15.9489 14.25 16.1397 14.329 16.2803 14.4697C16.421 14.6103 16.5 14.8011 16.5 15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H8.25C8.05109 15.75 7.86032 15.671 7.71967 15.5303C7.57902 15.3897 7.5 15.1989 7.5 15ZM8.25 17.25C8.05109 17.25 7.86032 17.329 7.71967 17.4697C7.57902 17.6103 7.5 17.8011 7.5 18C7.5 18.1989 7.57902 18.3897 7.71967 18.5303C7.86032 18.671 8.05109 18.75 8.25 18.75H12C12.1989 18.75 12.3897 18.671 12.5303 18.5303C12.671 18.3897 12.75 18.1989 12.75 18C12.75 17.8011 12.671 17.6103 12.5303 17.4697C12.3897 17.329 12.1989 17.25 12 17.25H8.25Z"
                  fill="currentColor"
               />
               <path
                  d="M12.9709 1.81598C13.7975 2.76894 14.2517 3.98853 14.2499 5.24998V7.12498C14.2499 7.33198 14.4179 7.49998 14.6249 7.49998H16.4999C17.7614 7.49823 18.981 7.95246 19.9339 8.77898C19.494 7.10569 18.6175 5.57928 17.3941 4.35587C16.1706 3.13245 14.6442 2.25594 12.9709 1.81598Z"
                  fill="currentColor"
               />
            </g>
         </svg>
      ),
   },
   {
      title: 'Contact',
      link: '#contact-us',
      icon: (
         <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.6">
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.25C9.571 2.25 7.183 2.428 4.848 2.771C2.87 3.061 1.5 4.795 1.5 6.741V12.759C1.5 14.705 2.87 16.439 4.848 16.729C5.725 16.858 6.609 16.963 7.5 17.045V21C7.50013 21.1482 7.54419 21.2931 7.62661 21.4163C7.70903 21.5395 7.82611 21.6356 7.96308 21.6923C8.10004 21.749 8.25074 21.7639 8.39614 21.735C8.54153 21.7061 8.67511 21.6348 8.78 21.53L12.964 17.347C13.0351 17.277 13.1303 17.2369 13.23 17.235C15.236 17.185 17.212 17.015 19.152 16.729C21.13 16.439 22.5 14.706 22.5 12.759V6.741C22.5 4.794 21.13 3.061 19.152 2.771C16.7839 2.42341 14.3935 2.24928 12 2.25ZM8.25 8.625C7.95163 8.625 7.66548 8.74353 7.4545 8.95451C7.24353 9.16549 7.125 9.45163 7.125 9.75C7.125 10.0484 7.24353 10.3345 7.4545 10.5455C7.66548 10.7565 7.95163 10.875 8.25 10.875C8.54837 10.875 8.83452 10.7565 9.0455 10.5455C9.25647 10.3345 9.375 10.0484 9.375 9.75C9.375 9.45163 9.25647 9.16549 9.0455 8.95451C8.83452 8.74353 8.54837 8.625 8.25 8.625ZM10.875 9.75C10.875 9.45163 10.9935 9.16549 11.2045 8.95451C11.4155 8.74353 11.7016 8.625 12 8.625C12.2984 8.625 12.5845 8.74353 12.7955 8.95451C13.0065 9.16549 13.125 9.45163 13.125 9.75C13.125 10.0484 13.0065 10.3345 12.7955 10.5455C12.5845 10.7565 12.2984 10.875 12 10.875C11.7016 10.875 11.4155 10.7565 11.2045 10.5455C10.9935 10.3345 10.875 10.0484 10.875 9.75ZM15.75 8.625C15.4516 8.625 15.1655 8.74353 14.9545 8.95451C14.7435 9.16549 14.625 9.45163 14.625 9.75C14.625 10.0484 14.7435 10.3345 14.9545 10.5455C15.1655 10.7565 15.4516 10.875 15.75 10.875C16.0484 10.875 16.3345 10.7565 16.5455 10.5455C16.7565 10.3345 16.875 10.0484 16.875 9.75C16.875 9.45163 16.7565 9.16549 16.5455 8.95451C16.3345 8.74353 16.0484 8.625 15.75 8.625Z"
                  fill="currentColor"
               />
            </g>
         </svg>
      ),
   },
]
