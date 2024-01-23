import React from 'react'

const SkillAndExperience = () => {
   return (
      <section className="flex flex-col xl:flex-row gap-16 items-center justify-between">
         <div className="w-full md:max-w-[640px] xl:w-1/2">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl">
               Skills & Experience
            </h2>
            <p className="mt-5 text-lg text-base-content/60 xl:max-w-[488px]">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="mt-16 md:mt-12 text-base-content text-3xl">
               Skills
            </h3>
            <div className="mt-3 border border-primary w-12" />
            <div className="mt-10 flex gap-8 overflow-x-auto">
               {SkillData.map((item: any, index: number) => (
                  <div
                     className="flex flex-col justify-center items-center gap-4"
                     key={index}
                  >
                     <div className="p-4 bg-base-content/[0.03] rounded-[20px] w-fit">
                        <div className="p-4 bg-base-100 rounded-[10px] w-fit">
                           {item.icon}
                        </div>
                        <h6 className="mt-4 text-center text-xl text-base-content">
                           {item.percent}
                        </h6>
                     </div>
                     <p className="text-base-content/50 text-base">
                        {item.technology}
                     </p>
                  </div>
               ))}
            </div>
         </div>
         <div className="w-full md:max-w-[640px] xl:w-1/2">
            <h3 className="text-3xl text-base-content pb-10 border-b border-base-content/10 mb-10">
               Experience
            </h3>
            <div>
               {ExperienceData.map((item: any, index: number) => (
                  <div
                     className="flex flex-col md:flex-row md:items-center gap-3 md:gap-12 pb-10 border-b border-base-content/10 mt-10"
                     key={index}
                  >
                     <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">
                        {item.date}
                     </p>
                     <div>
                        <h5 className="text-2xl text-base-content font-medium">
                           {item.title}
                        </h5>
                        <p className="mt-1 text-base text-base-content">
                           {item.company}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default SkillAndExperience

const SkillData = [
   {
      id: 1,
      percent: '95%',
      technology: 'Figma',
      icon: (
         <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M24 24C24 20.2721 27.0221 17.25 30.75 17.25C34.4779 17.25 37.5 20.2721 37.5 24C37.5 27.7279 34.4779 30.75 30.75 30.75C27.0221 30.75 24 27.7279 24 24Z"
               fill="#1ABCFE"
            />
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M10.5 37.5C10.5 33.7721 13.5221 30.75 17.25 30.75H24V37.5C24 41.2279 20.9779 44.25 17.25 44.25C13.5221 44.25 10.5 41.2279 10.5 37.5Z"
               fill="#0ACF83"
            />
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M24 3.75V17.25H30.75C34.4779 17.25 37.5 14.2279 37.5 10.5C37.5 6.77208 34.4779 3.75 30.75 3.75H24Z"
               fill="#FF7262"
            />
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M10.5 10.5C10.5 14.2279 13.5221 17.25 17.25 17.25H24V3.75H17.25C13.5221 3.75 10.5 6.77208 10.5 10.5Z"
               fill="#F24E1E"
            />
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M10.5 24C10.5 27.7279 13.5221 30.75 17.25 30.75H24V17.25H17.25C13.5221 17.25 10.5 20.2721 10.5 24Z"
               fill="#A259FF"
            />
         </svg>
      ),
   },
   {
      id: 2,
      percent: '95%',
      technology: 'HTML5',
      icon: (
         <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M9 42L6 4.5H42L39 42L24 46.5L9 42Z" fill="#E44D26" />
            <path d="M39 7.5H24V44.25L36 40.5L39 7.5Z" fill="#F16529" />
            <path
               d="M14.25 26.25L12.75 12H36L35.25 16.5H17.25L18 21.75H34.5L33 36L24 39L15 36L14.25 28.5H18.75L19.5 32.25L24 33.75L28.5 32.25L29.25 26.25H14.25Z"
               fill="white"
            />
         </svg>
      ),
   },
   {
      id: 3,
      percent: '95%',
      technology: 'CSS 3',
      icon: (
         <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d="M9 42L6 4.5H42L39 42L24 46.5L9 42Z" fill="#1172B8" />
            <path d="M39 7.5H24V44.25L36 40.5L39 7.5Z" fill="#33AADD" />
            <path
               d="M29.25 26.25H14.25L13.5 21L25.5 17.25H13.5L12.75 12.75H36L35.25 18L25.5 21.75H34.5L33 36L24 39L15 36L14.25 28.5H18.75L19.5 32.25L24 33.75L28.5 32.25L29.25 26.25Z"
               fill="white"
            />
         </svg>
      ),
   },
   {
      id: 4,
      percent: '95%',
      technology: 'JavaScript',
      icon: (
         <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect x="3" y="3" width="42" height="42" fill="#FFCA28" />
            <path
               d="M28.5 37.9315L31.5923 35.8854C31.8346 36.6467 33.3692 38.455 35.3077 38.455C37.2462 38.455 38.1462 37.3962 38.1462 36.6943C38.1462 34.7815 36.1668 34.1071 35.2161 33.7832C35.0611 33.7304 34.9334 33.6869 34.8462 33.6489C34.8014 33.6294 34.7337 33.6035 34.6468 33.5703C33.5895 33.1664 29.6885 31.676 29.6885 27.3558C29.6885 22.5973 34.2808 22.05 35.3192 22.05C35.9986 22.05 39.2654 22.1333 40.8923 25.1907L37.8923 27.2844C37.2346 25.952 36.1419 25.5119 35.4692 25.5119C33.8077 25.5119 33.4615 26.73 33.4615 27.2844C33.4615 28.8402 35.2667 29.5376 36.791 30.1264C37.1898 30.2804 37.5693 30.427 37.8923 30.5796C39.5538 31.3648 42 32.6496 42 36.6943C42 38.7202 40.3008 42 36.0231 42C30.2769 42 28.7538 38.5501 28.5 37.9315Z"
               fill="#3E3E3E"
            />
            <path
               d="M13.5 38.3379L16.723 36.2927C16.9756 37.0537 17.9569 38.4568 19.3808 38.4568C20.8047 38.4568 21.5335 36.9943 21.5335 36.2927V22.5001H25.4973V36.2927C25.5614 38.1952 24.5063 42.0001 19.8498 42.0001C15.5685 42.0001 13.7886 39.4555 13.5 38.3379Z"
               fill="#3E3E3E"
            />
         </svg>
      ),
   },
]

const ExperienceData = [
   {
      id: 1,
      date: 'Jan 1016 - Dec 2021',
      title: 'Product Manager',
      company: 'Microsoft',
   },
   {
      id: 2,
      date: 'Jan 1016 - Dec 2021',
      title: 'Senior Product Designer',
      company: 'Google',
   },
   {
      id: 1,
      date: 'Jan 1016 - Dec 2021',
      title: 'Junior Product Designer',
      company: 'Facebook',
   },
]
