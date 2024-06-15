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
                        <p className="text-base text-base-content">
                           {item.post.split('(')[0]}
                        </p>
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
      company: 'GDEXPERTS',
      time: 'Jan 2020 - Present',
      post: 'Core Frontend Engineer',
      description:
         'Developed responsive user interfaces using React.js, leveraging state management libraries like Redux. Collaborated closely with design and backend teams to deliver high-quality web applications.',
   },
   {
      company: 'TLABS',
      time: 'Jan 2016 - Dec 2021',
      post: 'Backend Developer',
      description:
         'Designed, developed, and maintained scalable server-side applications and databases, ensuring optimal performance and seamless integration with front-end systems.',
   },
   {
      company: 'ACCELERATED TECHNOSOFT',
      time: 'Jan 2016 - Dec 2021',
      post: 'DevOps',
      description:
         'Managed and optimized IT infrastructure, ensuring seamless operations and security. Implemented innovative solutions and technologies to meet business needs.',
   },
   {
      company: 'BARIKITECH',
      time: 'Jan 2016 - Dec 2021',
      post: 'Senior IT Consultant',
      description:
         'Provided expert guidance and solutions in IT strategy, infrastructure management, and technology implementation. Led teams in delivering innovative solutions exceeding client expectations.',
   },
   {
      company: 'ANDELA UGANDA',
      time: 'Jan 2016 - Dec 2021',
      post: 'Full-Stack Engineer',
      description:
         'Contributed to the full software development lifecycle, from requirements gathering to deployment, utilizing agile methodologies to deliver high-quality software solutions.',
   },
]
