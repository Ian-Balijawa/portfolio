import SocialShare from '../socialShare/SocialShare'
import Link from 'next/link'

const FooterLarge = () => {
   return (
      <div className="container mx-auto px-5 md:px-0">
         <div className="pb-12 border-b border-base-content/10">
            <h3 className="text-base-content text-4xl md:text-5xl text-center">
               Let’s Work Together
            </h3>
            <div className="flex items-center justify-center mt-8">
               <Link
                  href={'/service'}
                  className="btn btn-primary border-none py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit"
               >
                  <span className="text-base font-medium text-primary-content">
                     Get Started
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
         <div className="py-8 sm:py-12 xl:py-16 border-b border-base-content/10 grid gap-8 justify-items-start sm:justify-items-center sm:gap-12 xl:gap-0 xl:justify-items-end grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <div>
               <div>
                  <div>
                     <svg
                        className="text-primary"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M0 16C0 7.16344 7.16344 0 16 0H24C15.1634 0 8 7.16344 8 16V40C3.58172 40 0 36.4183 0 32V16Z"
                           fill="currentColor"
                        />
                        <path
                           d="M24 32C32.8366 32 40 24.8366 40 16V24C40 32.8366 32.8366 40 24 40H18V30.837C19.8529 31.587 21.8782 32 24 32Z"
                           fill="currentColor"
                        />
                        <path
                           d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>
                  <p
                     className="mt-6 text-base text-base-content/70 max-w-[320px] sm:max-w-[197px]
                     xl:max-w-[320px]"
                  >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua.
                  </p>
                  <div className="mt-6">
                     <SocialShare />
                  </div>
               </div>
            </div>
            <div>
               <h6 className="text-base text-base-content/80">NAVIGATION</h6>
               <div className="mt-6 flex flex-col gap-3">
                  {FooterData.map((item: any, index: number) => (
                     <Link
                        key={index}
                        href={item.link}
                        className="text-sm font-medium text-base-content hover:text-primary hover:duration-300 transition"
                     >
                        {item.title}
                     </Link>
                  ))}
               </div>
            </div>
            <div>
               <h6 className="text-base text-base-content/80">CONTACT</h6>
               <div className="mt-6 flex flex-col gap-3">
                  {[1, 2, 3].map((item: any, index: number) => (
                     <div
                        className="flex items-center gap-3 text-base"
                        key={index}
                     >
                        <p className="text-base-content font-medium">S :</p>
                        <a
                           href="tel:+256787444814"
                           className="text-base-content/70 hover:text-primary transition hover:duration-300"
                        >
                           +256787444814
                        </a>
                     </div>
                  ))}
               </div>
            </div>
            <div>
               <h6 className="text-base text-base-content/80">ADDRESS</h6>
               <p className="mt-6 text-base text-base-content">
                  Makerere University <br /> Kampala
               </p>
            </div>
         </div>
         <div className="py-8 flex flex-col gap-4 sm:flex-row items-center justify-between">
            <h6 className="text-base text-base-content">
               © 2023 IAN BALIJAWA. All Rights Reserved.
            </h6>
            <div className="flex items-center gap-6">
               <Link
                  href="/"
                  className="text-sm text-base-content/70 hover:text-base-content/40  transition hover:duration-300"
               >
                  Terms & Condition
               </Link>
               <Link
                  href="/"
                  className="text-sm text-base-content/70 hover:text-base-content/40  transition hover:duration-300"
               >
                  Privacy Policy
               </Link>
            </div>
         </div>
      </div>
   )
}

export default FooterLarge

const FooterData = [
   {
      id: 1,
      link: '/',
      title: 'Home',
   },
   {
      id: 2,
      link: '/',
      title: 'About',
   },
   {
      id: 3,
      link: '/',
      title: 'Services',
   },
   {
      id: 4,
      link: '/',
      title: 'Projects',
   },
   {
      id: 5,
      link: '/',
      title: 'Blog',
   },
   {
      id: 6,
      link: '/',
      title: 'Contact',
   },
]
