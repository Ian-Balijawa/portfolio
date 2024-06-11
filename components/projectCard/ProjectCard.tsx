import Image from 'next/image'

const ProjectCard = ({
   title,
   desc,
   img,
   id,
}: {
   title: string
   desc: string
   img: string
   id: string
}) => {
   return (
      <div className="bg-base-100 rounded-xl before:rounded-tr-xl after:rounded-bl-xl p-8 w-fit card">
         <Image
            src={img}
            width={320}
            height={240}
            alt="card-image"
            className="w-full"
            placeholder="empty"
         />
         <h2 className="text-xl font-semibold text-base-content hover:text-primary transition duration-300 ease-in-out mt-4 line-clamp-1 z-10">
            {title}
         </h2>
         <p className="text-base-content/50 mt-2 line-clamp-3 max-w-[412px]">
            {desc}
         </p>
         <div className="flex items-center gap-3.5 text-base font-medium text-primary mt-3 hover:opacity-70 duration-300 ease-in-out cursor-pointer z-10">
            <span>
               <svg
                  className="mt-1 text-primary"
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M13.1667 1.5L16.5 4.83333M16.5 4.83333L13.1667 8.16667M16.5 4.83333L1.5 4.83333"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </span>
         </div>
      </div>
   )
}

export default ProjectCard
