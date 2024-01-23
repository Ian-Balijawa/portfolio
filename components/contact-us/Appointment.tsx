import React from 'react'

const Appointment = () => {
   return (
      <div className="bg-base-100 px-6 py-8 rounded-xl">
         <h6 className="text-xl font-semibold text-base-content leading-7">
            Request an Appointment
         </h6>
         <div className="w-full mt-6">
            <p className="text-sm text-base-content/80 pb-2">Name</p>
            <input
               type="text"
               className="w-full bg-base-200 rounded-lg outline-none px-4 h-12"
            />
         </div>
         <div className="w-full mt-4">
            <p className="text-sm text-base-content/80 pb-2">Email</p>
            <input
               type="email"
               className="w-full bg-base-200 rounded-lg outline-none px-4 h-12"
            />
         </div>
         <div className="w-full mt-4">
            <p className="text-sm text-base-content/80 pb-2">Subject</p>
            <input
               type="text"
               className="w-full bg-base-200 rounded-lg outline-none px-4 h-12"
            />
         </div>
         <div className="w-full mt-4 mb-6">
            <p className="text-sm text-base-content/80 pb-2">Messages</p>
            <textarea className="w-full bg-base-200 rounded-lg outline-none px-4 h-48"></textarea>
         </div>
         <button className="btn btn-primary border-none py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit mt-8">
            <span className="text-base font-medium text-primary-content">
               Send Message
            </span>
            <span className="p-2 bg-primary-content rounded-full">
               <svg
                  className="text-primary"
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
            </span>
         </button>
      </div>
   )
}

export default Appointment
