const Experience = () => {
   return (
      <div className="p-6 md:p-10 bg-base-100 rounded-xl flex flex-col gap-8 md:gap-10">
         {ExperienceData.map((item: any, index: number) => (
            <div key={index}>
               <div
                  className={`flex flex-col gap-6 xl:flex-row xl:justify-between ${
                     index + 1 === ExperienceData.length
                        ? ''
                        : 'border-b border-base-content/10 pb-8 xl:pb-10'
                  }`}
               >
                  <div className="pl-3 xl:pl-0 border-l-2 xl:border-l-0 border-base-content/10 w-full xl:max-w-[315px]">
                     <h5 className="text-lg text-base-content font-semibold">
                        {item.company}
                     </h5>
                     <div className="flex items-center gap-4 mt-2 xl:mt-3">
                        <p className="text-base text-base-content">Student</p>
                        <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">
                           {item.time}
                        </p>
                     </div>
                  </div>
                  <div className="w-full">
                     <h5 className="text-lg font-medium text-base-content">
                        {item.post}
                     </h5>
                     <p className="mt-2 lg:mt-4 text-base-content/50">
                        {item.description}
                     </p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Experience

const ExperienceData = [
   {
      company: 'TLABS',
      time: 'Jan 1016 - Dec 2021',
      post: 'Lead Web Designer',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
   },
   {
      company: 'TLABS',
      time: 'Jan 1016 - Dec 2021',
      post: 'Lead Web Designer',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
   },
   {
      company: 'TLABS',
      time: 'Jan 1016 - Dec 2021',
      post: 'Lead Web Designer',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
   },
]
