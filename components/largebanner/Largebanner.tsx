import Link from 'next/link'

const Largebanner = () => {
   return (
      <div className="container mt-20 bg-[url('/bg.png')] mx-auto px-5 sm:px-0 pt-20">
         <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-12 lg:h-[470px]">
            <div className="w-full px-4 bg-no-repeat bg-right bg-contain md:bg-auto pt-0 sm:pt-10 md:pt-20 lg:pt-7 md:h-[470px] lg:h-full">
               <h1 className="text-3xl sm:text-5xl md:text-[80px] lg:text-8xl font-bold text-base-content w-[201px] sm:max-w-[464px] !leading-[50px] sm:!leading-[60px] md:!leading-[96px] lg:!leading-[120px]">
                  Ian Balijawa
               </h1>
               {/* line  */}
               <div className="border-t border-primary w-24 md:w-36 mt-3 lg:mt-10"></div>
               <p className="text-sm text-base-content mt-6 lg:mt-11">
                  Social account
               </p>
               <div className="flex items-center gap-5 rounded-lg bg-base-content/5 px-5 py-3 w-fit mt-4">
                  {socialicon.map((item: any, index: any) => (
                     <Link key={index} href={item?.link} target="_blank">
                        {item?.svg}
                     </Link>
                  ))}
               </div>
            </div>
            <div className="lg:max-w-[385px] w-full mx-10 lg:ml-auto">
               <h1 className="text-3xl sm:text-4xl font-medium text-base-content ">
                  I&apos;m a Professional Software Engineer
               </h1>
               <p className="text-base-content/60 mt-5">
                  Meet Ian Balijawa, a product designer with a passion for
                  crafting seamless user experiences. With 6 years of experience
                  in the industry, Rayan has honed their skills in designing
                  products that not only look great but also work well.
               </p>
               {/* button  */}
               <Link
                  href="#"
                  className="flex items-center gap-5 btn btn-primary rounded-full pl-6 pr-1.5 mt-6 w-fit"
               >
                  <span className="text-base font-medium text-primary-content">
                     Let’s Talk
                  </span>
                  <div className="flex items-center justify-center bg-primary-content rounded-full w-9 h-9">
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
   )
}

export default Largebanner

const socialicon = [
   {
      icon: 'facebook',
      link: 'https://www.facebook.com/',
      svg: (
         <svg
            className="text-base-content hover:text-primary transition-all"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g clipPath="url(#clip0_5726_110)">
               <path
                  d="M9.33332 8.99998H11L11.6667 6.33331H9.33332V4.99998C9.33332 4.31331 9.33332 3.66665 10.6667 3.66665H11.6667V1.42665C11.4493 1.39798 10.6287 1.33331 9.76199 1.33331C7.95199 1.33331 6.66666 2.43798 6.66666 4.46665V6.33331H4.66666V8.99998H6.66666V14.6666H9.33332V8.99998Z"
                  fill="currentColor"
               />
            </g>
            <defs>
               <clipPath id="clip0_5726_110">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      icon: 'twitter',
      link: 'https://twitter.com/',
      svg: (
         <svg
            className="text-base-content hover:text-primary transition-all"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M7.00001 0.333313C8.81134 0.333313 9.03734 0.33998 9.74801 0.373313C10.458 0.406646 10.9413 0.51798 11.3667 0.683313C11.8067 0.852646 12.1773 1.08198 12.548 1.45198C12.887 1.78524 13.1493 2.18837 13.3167 2.63331C13.4813 3.05798 13.5933 3.54198 13.6267 4.25198C13.658 4.96265 13.6667 5.18865 13.6667 6.99998C13.6667 8.81131 13.66 9.03731 13.6267 9.74798C13.5933 10.458 13.4813 10.9413 13.3167 11.3666C13.1498 11.8118 12.8874 12.2151 12.548 12.548C12.2147 12.8869 11.8115 13.1491 11.3667 13.3166C10.942 13.4813 10.458 13.5933 9.74801 13.6266C9.03734 13.658 8.81134 13.6666 7.00001 13.6666C5.18868 13.6666 4.96268 13.66 4.25201 13.6266C3.54201 13.5933 3.05868 13.4813 2.63334 13.3166C2.18823 13.1496 1.78503 12.8873 1.45201 12.548C1.11295 12.2148 0.850631 11.8116 0.683344 11.3666C0.51801 10.942 0.406677 10.458 0.373343 9.74798C0.34201 9.03731 0.333344 8.81131 0.333344 6.99998C0.333344 5.18865 0.34001 4.96265 0.373343 4.25198C0.406677 3.54131 0.51801 3.05865 0.683344 2.63331C0.850168 2.1881 1.11255 1.78486 1.45201 1.45198C1.78512 1.1128 2.1883 0.850466 2.63334 0.683313C3.05868 0.51798 3.54134 0.406646 4.25201 0.373313C4.96268 0.34198 5.18868 0.333313 7.00001 0.333313ZM7.00001 3.66665C6.11596 3.66665 5.26811 4.01784 4.64299 4.64296C4.01787 5.26808 3.66668 6.11592 3.66668 6.99998C3.66668 7.88403 4.01787 8.73188 4.64299 9.357C5.26811 9.98212 6.11596 10.3333 7.00001 10.3333C7.88407 10.3333 8.73191 9.98212 9.35703 9.357C9.98215 8.73188 10.3333 7.88403 10.3333 6.99998C10.3333 6.11592 9.98215 5.26808 9.35703 4.64296C8.73191 4.01784 7.88407 3.66665 7.00001 3.66665ZM11.3333 3.49998C11.3333 3.27897 11.2455 3.067 11.0893 2.91072C10.933 2.75444 10.721 2.66665 10.5 2.66665C10.279 2.66665 10.067 2.75444 9.91075 2.91072C9.75447 3.067 9.66668 3.27897 9.66668 3.49998C9.66668 3.72099 9.75447 3.93296 9.91075 4.08924C10.067 4.24552 10.279 4.33331 10.5 4.33331C10.721 4.33331 10.933 4.24552 11.0893 4.08924C11.2455 3.93296 11.3333 3.72099 11.3333 3.49998ZM7.00001 4.99998C7.53044 4.99998 8.03915 5.21069 8.41422 5.58577C8.7893 5.96084 9.00001 6.46955 9.00001 6.99998C9.00001 7.53041 8.7893 8.03912 8.41422 8.41419C8.03915 8.78927 7.53044 8.99998 7.00001 8.99998C6.46958 8.99998 5.96087 8.78927 5.5858 8.41419C5.21072 8.03912 5.00001 7.53041 5.00001 6.99998C5.00001 6.46955 5.21072 5.96084 5.5858 5.58577C5.96087 5.21069 6.46958 4.99998 7.00001 4.99998Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      icon: 'twitter',
      link: 'https://twitter.com/',
      svg: (
         <svg
            className="text-base-content hover:text-primary transition-all"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g clipPath="url(#clip0_5726_66)">
               <path
                  d="M14.7747 3.77068C14.2657 3.99581 13.726 4.14366 13.1733 4.20935C13.7558 3.86097 14.1918 3.31269 14.4 2.66668C13.8533 2.99201 13.254 3.22001 12.6293 3.34335C12.2097 2.8944 11.6536 2.59665 11.0473 2.4964C10.441 2.39615 9.81863 2.49901 9.27685 2.78898C8.73507 3.07896 8.30426 3.5398 8.05142 4.09987C7.79857 4.65995 7.73784 5.28787 7.87867 5.88601C6.77008 5.83045 5.68556 5.54236 4.69553 5.04045C3.7055 4.53855 2.83209 3.83404 2.132 2.97268C1.8842 3.39831 1.75397 3.88216 1.75467 4.37468C1.75467 5.34135 2.24667 6.19535 2.99467 6.69535C2.55201 6.68141 2.11909 6.56187 1.732 6.34668V6.38135C1.73214 7.02515 1.95492 7.64909 2.36257 8.14739C2.77022 8.64568 3.33766 8.98766 3.96867 9.11535C3.55775 9.2267 3.12688 9.24312 2.70867 9.16335C2.88658 9.7175 3.23334 10.2021 3.7004 10.5494C4.16746 10.8967 4.73142 11.0892 5.31334 11.1C4.73499 11.5542 4.07279 11.89 3.36459 12.0881C2.65639 12.2863 1.91609 12.3428 1.186 12.2547C2.46047 13.0743 3.94407 13.5094 5.45934 13.508C10.588 13.508 13.3927 9.25935 13.3927 5.57468C13.3927 5.45468 13.3893 5.33335 13.384 5.21468C13.9299 4.82012 14.4011 4.33136 14.7753 3.77135L14.7747 3.77068Z"
                  fill="currentColor"
               />
            </g>
            <defs>
               <clipPath id="clip0_5726_66">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      icon: 'dribbble',
      link: 'https://dribbble.com/',
      svg: (
         <svg
            className="text-base-content hover:text-primary transition-all"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g clipPath="url(#clip0_5726_127)">
               <path
                  d="M13.326 7.71465C13.2714 6.66526 12.9064 5.65572 12.2773 4.81398C12.0857 5.0204 11.8808 5.21414 11.664 5.39398C10.998 5.94721 10.2537 6.39877 9.45534 6.73398C9.56668 6.96731 9.66868 7.19331 9.75868 7.40665V7.40865C9.78407 7.46825 9.80852 7.52826 9.83201 7.58865C10.8413 7.47531 11.9053 7.51665 12.9367 7.65598C13.074 7.67465 13.2033 7.69465 13.326 7.71465V7.71465ZM7.06934 2.74798C7.71903 3.66343 8.31815 4.61374 8.86401 5.59465C9.67934 5.27331 10.3533 4.86798 10.896 4.41665C11.0844 4.2614 11.2617 4.09322 11.4267 3.91331C10.4673 3.10646 9.25355 2.66487 8.00001 2.66665C7.68803 2.66643 7.37663 2.69342 7.06934 2.74731V2.74798ZM2.83534 6.66465C3.28949 6.65319 3.74311 6.62583 4.19534 6.58265C5.28844 6.48487 6.37219 6.30165 7.43668 6.03465C6.88035 5.06812 6.27971 4.12779 5.63668 3.21665C4.94982 3.55691 4.34418 4.04092 3.86084 4.63584C3.3775 5.23076 3.02776 5.92267 2.83534 6.66465ZM3.85534 11.3566C4.11401 10.9786 4.45401 10.5533 4.90534 10.0906C5.87468 9.09731 7.01868 8.32398 8.34268 7.89731L8.38401 7.88531C8.27401 7.64265 8.17068 7.42598 8.06668 7.22198C6.84268 7.57865 5.55334 7.80131 4.26868 7.91665C3.64201 7.97331 3.08001 7.99798 2.66668 8.00198C2.6655 9.22371 3.08554 10.4085 3.85601 11.3566H3.85534ZM10.0033 12.9433C9.74626 11.6468 9.38235 10.3738 8.91534 9.13731C7.58068 9.62198 6.51734 10.3306 5.69534 11.176C5.36361 11.5109 5.06922 11.8808 4.81734 12.2793C5.73655 12.9652 6.85313 13.3349 8.00001 13.3333C8.68662 13.3343 9.36692 13.2023 10.0033 12.9446V12.9433ZM11.252 12.2266C12.2929 11.4265 13.0019 10.2705 13.2433 8.97998C13.0167 8.92331 12.7293 8.86665 12.4133 8.82265C11.7108 8.72147 10.9979 8.71408 10.2933 8.80065C10.69 9.91987 11.0103 11.0647 11.252 12.2273V12.2266ZM8.00001 14.6666C4.31801 14.6666 1.33334 11.682 1.33334 7.99998C1.33334 4.31798 4.31801 1.33331 8.00001 1.33331C11.682 1.33331 14.6667 4.31798 14.6667 7.99998C14.6667 11.682 11.682 14.6666 8.00001 14.6666Z"
                  fill="currentColor"
               />
            </g>
            <defs>
               <clipPath id="clip0_5726_127">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
]
