import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
   return (
      <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover max-h-[492px] bg-base-100 p-6 sm:p-10 xl:p-16 rounded-xl flex items-center justify-center md:justify-between">
         <div className="w-full md:max-w-[260px] lg:max-w-[460px]">
            <h1 className="text-3xl xl:text-5xl font-semibold text-base-content text-center md:text-start leading-9 xl:!leading-[56px]">
               IT consultant Software Engineer & Private contractor
            </h1>
            <p className="mt-4 mb-6 xl:my-6 text-base xl:text-xl text-base-content/60 text-center md:text-start leading-6 xl:leading-7">
               If people have a problem and if no one else can help and if you
               can find me, maybe you can hire me and friends
            </p>
            <div className="flex items-center justify-center md:justify-start">
               <Link
                  href={'#'}
                  className="btn border-none btn-primary py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit"
               >
                  <span className="text-base font-medium text-primary-content">
                     Let’s Talk
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
               </Link>
            </div>
         </div>
         <div className="hidden md:block flex-none">
            <Image
               src="/ian.png"
               alt="Picture of the author"
               className="h-full"
               width={400}
               height={500}
               placeholder="empty"
            />
         </div>
      </div>
   )
}

export default Banner
