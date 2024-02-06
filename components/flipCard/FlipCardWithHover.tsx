import Link from 'next/link'

const FlipCardWithHover = () => {
   return (
      <div className="p-6 lg:p-8 bg-base-100 rounded-xl group card">
         <div className="p-4 bg-primary/[0.05] rounded-xl w-fit group-hover:bg-primary group-hover:duration-300 transition">
            <svg
               className="text-primary group-hover:text-primary-content group-hover:duration-300 transition"
               width="32"
               height="32"
               viewBox="0 0 32 32"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M31.0625 0H27.25C26.7318 0 26.3125 0.419312 26.3125 0.9375V1.875H18.6398C18.2515 0.786125 17.2206 0 16 0C14.7794 0 13.7485 0.786125 13.3602 1.875H5.6875V0.9375C5.6875 0.419312 5.26819 0 4.75 0H0.9375C0.419312 0 0 0.419312 0 0.9375V4.6875C0 5.20569 0.419312 5.625 0.9375 5.625H4.75C5.26819 5.625 5.6875 5.20569 5.6875 4.6875V3.7375H9.53775C6.28419 5.77006 4.13888 9.34 3.88244 13.3384C2.75756 13.7066 1.9375 14.7537 1.9375 16C1.9375 17.5509 3.19913 18.8125 4.75 18.8125C6.30087 18.8125 7.5625 17.5509 7.5625 16C7.5625 14.8038 6.80869 13.7867 5.75375 13.3808C6.07362 8.923 9.18413 5.16575 13.5108 4.09375C13.9788 4.99856 14.9129 5.625 16 5.625C17.0871 5.625 18.0212 4.99856 18.4892 4.09375C22.8159 5.16569 25.9264 8.92294 26.2463 13.3807C25.1913 13.7867 24.4375 14.8038 24.4375 16C24.4375 17.5509 25.6991 18.8125 27.25 18.8125C28.8009 18.8125 30.0625 17.5509 30.0625 16C30.0625 14.7537 29.2424 13.7066 28.1176 13.3384C27.8611 9.34 25.7158 5.78256 22.4622 3.75H26.3125V4.6875C26.3125 5.20569 26.7318 5.625 27.25 5.625H31.0625C31.5807 5.625 32 5.20569 32 4.6875V0.9375C32 0.419312 31.5807 0 31.0625 0ZM22.3781 30.8372C21.8877 29.3366 20.475 28.1875 18.8125 28.1875H13.1875C11.525 28.1875 10.1122 29.3366 9.62187 30.8372C9.43281 31.4157 9.925 32 10.5337 32H21.4662C22.0749 32 22.5672 31.4157 22.3781 30.8372Z"
                  fill="currentColor"
               />
               <path
                  d="M24.28 19.23L16.9375 8.21619V17.1102C18.0264 17.4985 18.8125 18.5294 18.8125 19.75C18.8125 21.3009 17.5509 22.5625 16 22.5625C14.4491 22.5625 13.1875 21.3009 13.1875 19.75C13.1875 18.5294 13.9736 17.4985 15.0625 17.1102V8.21619L7.72001 19.23C7.47188 19.6017 7.52132 20.097 7.8372 20.4129C9.55826 22.1339 10.6584 24.3511 11.0829 26.7294C11.7342 26.4652 12.4425 26.3125 13.1875 26.3125H18.8125C19.5575 26.3125 20.2658 26.4652 20.9171 26.7293C21.3416 24.3509 22.4418 22.1339 24.1628 20.4129C24.4787 20.097 24.5281 19.6017 24.28 19.23Z"
                  fill="currentColor"
               />
               <path
                  d="M16 18.8125C15.4827 18.8125 15.0625 19.2327 15.0625 19.75C15.0625 20.2673 15.4827 20.6875 16 20.6875C16.5173 20.6875 16.9375 20.2673 16.9375 19.75C16.9375 19.2327 16.5173 18.8125 16 18.8125Z"
                  fill="currentColor"
               />
            </svg>
         </div>
         <h3 className="text-xl font-semibold text-base-content mt-8 group-hover:text-primary group-hover:duration-300 transition z-10">
            <Link href="/service/1">Web Development</Link>
         </h3>
         <div className="flex flex-col gap-3 mt-6">
            {Data.map((item: any, index) => (
               <div className="flex items-center gap-4" key={index}>
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
                  <p className="text-base text-base-content/60">{item.title}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default FlipCardWithHover

const Data = [
   {
      id: 1,
      title: 'Frontend Dev.',
   },
   {
      id: 2,
      title: 'Backend Dev.',
   },
   {
      id: 3,
      title: 'CMS Dev.',
   },
]
