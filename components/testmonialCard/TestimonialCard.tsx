import Image from 'next/image'

const TestimonialCard = () => {
   return (
      <div className="p-6 bg-base-100 rounded-xl">
         <div className="flex items-center gap-4">
            <div className="avatar">
               <div className="w-16 rounded-full">
                  <Image
                     src="/ian.png"
                     alt="Picture of the author"
                     width={64}
                     height={64}
                  />
               </div>
            </div>
            <div>
               <h5 className="text-lg font-semibold text-base-content">
                  Edward Leonard
               </h5>
               <p className="text-sm text-base-content/60">Software Engineer</p>
            </div>
         </div>
         <p className="mt-6 text-base text-base-content/60">
            The customer service team was incredibly helpful and went above and
            beyond to ensure that I had a positive experience with this company.
         </p>
         <div className="flex items-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((item: any, index: any) => (
               <div key={index}>
                  <svg
                     className="text-primary"
                     width="18"
                     height="18"
                     viewBox="0 0 18 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M9 13.7264L12.9107 12.6792L14.5446 18L9 13.7264ZM18 6.84906H11.1161L9 0L6.88393 6.84906H0L5.57143 11.0943L3.45535 17.9434L9.02679 13.6981L12.4554 11.0943L18 6.84906Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
            ))}
         </div>
      </div>
   )
}

export default TestimonialCard
