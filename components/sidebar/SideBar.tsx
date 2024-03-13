import { DownloadBtn } from '@/components/dowload-btn/download'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {
   return (
      <div className="bg-base-100 rounded-xl p-6">
         <div className="w-fit mx-auto relative">
            <Image
               className="rounded-full"
               src="/ian.png"
               width={100}
               height={100}
               alt="user"
            />
            <svg
               className="absolute bottom-0 right-0"
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <circle
                  cx="12.9668"
                  cy="12"
                  r="10"
                  fill="#F78F42"
                  stroke="#151B2F"
                  strokeWidth="4"
               />
            </svg>
         </div>
         <h3 className="text-base-content text-xl font-semibold text-center mt-7">
            Ian Balijawa
         </h3>
         <p className="text-xs font-medium bg-primary/10 text-primary rounded-3xl px-3 w-fit mt-3 mx-auto py-1">
            Full Stack Developer
         </p>
         {/* social link  */}
         <div className="flex items-center justify-between bg-base-100 rounded-lg px-5 py-3 mt-5">
            {Icons.map((item, index) => (
               <Link href={item.link} target="_blank" key={index}>
                  {item.icon}
               </Link>
            ))}
         </div>
         {/* info  */}
         <div className="border-b border-base-content/10 py-6 space-y-3">
            <div className="flex items-center justify-between">
               <p className="text-sm text-base-content">Email</p>
               <a
                  href="mailto: ian@balijawa.com"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition"
               >
                  ian@balijawa.com
               </a>
            </div>
            <div className="flex items-center justify-between">
               <p className="text-sm text-base-content">Phone</p>
               <a
                  href="tel:+256787444814"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition"
               >
                  +256787444814
               </a>
            </div>
            {content.map((item, index) => (
               <div key={index} className="flex items-center justify-between">
                  <p className="text-sm text-base-content">{item?.title}</p>
                  <span className="text-sm text-base-content/60">
                     {item?.value}
                  </span>
               </div>
            ))}
         </div>
         {/* Major Skill */}
         <div className="border-b border-base-content/10 py-6">
            <p className="text-base text-base-content">Major Skill</p>
            <div className="space-y-5 mt-5">
               {majorSkill.map((item, index) => (
                  <div key={index}>
                     <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-base-content">
                           {item?.name}
                        </p>
                        <span className="text-xs text-base-content/60">
                           {item?.value}
                        </span>
                     </div>
                     <div className="w-full h-1 bg-base-content/10 rounded-md relative mt-2">
                        <div
                           style={{
                              width: `${item?.value}`,
                           }}
                           className="rounded-md absolute bg-primary h-1"
                        ></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {/* extra skills */}
         <div className="border-b border-base-content/10 py-6 mb-6">
            <p className="text-base text-base-content">Extra Skill</p>
            <div className="flex flex-wrap gap-2 mt-5">
               {extraSkills.map((item, index) => (
                  <p
                     key={index}
                     className="text-xs font-medium text-base-content/60 px-3 py-0.5 bg-base-100 rounded-md hover:bg-primary hover:text-primary-content transition hover:duration-300 cursor-pointer"
                  >
                     {item.value}
                  </p>
               ))}
            </div>
         </div>
         <DownloadBtn />
      </div>
   )
}

export default SideBar

const majorSkill = [
   {
      name: 'Html',
      value: '90%',
   },
   {
      name: 'CSS',
      value: '80%',
   },
   {
      name: 'UI Design',
      value: '90%',
   },
   {
      name: 'JavaScript',
      value: '70%',
   },
   {
      name: 'NodeJS',
      value: '80%',
   },
]

const extraSkills = [
   {
      value: 'Bootstrap',
   },
   {
      value: 'Materialize',
   },
   {
      value: 'Sass',
   },
   {
      value: 'Stylus',
   },
   {
      value: 'Less',
   },
   {
      value: 'Gulp',
   },
   {
      value: 'Grunt',
   },
   {
      value: 'GIT Knowledge',
   },
   {
      value: 'Webpack',
   },
]

const content = [
   {
      title: 'Residence:',
      value: 'Uganda',
   },
   {
      title: 'City::',
      value: 'Kampala',
   },
   {
      title: 'Age:',
      value: '26 years',
   },
   {
      title: 'Freelance:',
      value: 'Available',
   },
   {
      title: 'Language:',
      value: 'English, Luganda, Lusoga',
   },
]

const Icons = [
   {
      link: 'https://www.facebook.com/',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M5.33335 8.00001H7.00002L7.66669 5.33334H5.33335V4.00001C5.33335 3.31334 5.33335 2.66668 6.66669 2.66668H7.66669V0.426677C7.44935 0.39801 6.62869 0.333344 5.76202 0.333344C3.95202 0.333344 2.66669 1.43801 2.66669 3.46668V5.33334H0.666687V8.00001H2.66669V13.6667H5.33335V8.00001Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      link: 'https://www.instagram.com/',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M6.99998 0.333344C8.81131 0.333344 9.03731 0.34001 9.74798 0.373343C10.458 0.406677 10.9413 0.51801 11.3666 0.683344C11.8066 0.852677 12.1773 1.08201 12.548 1.45201C12.887 1.78527 13.1493 2.1884 13.3166 2.63334C13.4813 3.05801 13.5933 3.54201 13.6266 4.25201C13.658 4.96268 13.6666 5.18868 13.6666 7.00001C13.6666 8.81134 13.66 9.03734 13.6266 9.74801C13.5933 10.458 13.4813 10.9413 13.3166 11.3667C13.1498 11.8119 12.8874 12.2151 12.548 12.548C12.2146 12.8869 11.8115 13.1492 11.3666 13.3167C10.942 13.4813 10.458 13.5933 9.74798 13.6267C9.03731 13.658 8.81131 13.6667 6.99998 13.6667C5.18865 13.6667 4.96265 13.66 4.25198 13.6267C3.54198 13.5933 3.05865 13.4813 2.63331 13.3167C2.1882 13.1497 1.785 12.8873 1.45198 12.548C1.11292 12.2148 0.850601 11.8117 0.683313 11.3667C0.51798 10.942 0.406646 10.458 0.373313 9.74801C0.34198 9.03734 0.333313 8.81134 0.333313 7.00001C0.333313 5.18868 0.33998 4.96268 0.373313 4.25201C0.406646 3.54134 0.51798 3.05868 0.683313 2.63334C0.850137 2.18813 1.11252 1.78489 1.45198 1.45201C1.78509 1.11283 2.18827 0.850496 2.63331 0.683344C3.05865 0.51801 3.54131 0.406677 4.25198 0.373343C4.96265 0.34201 5.18865 0.333344 6.99998 0.333344ZM6.99998 3.66668C6.11592 3.66668 5.26808 4.01787 4.64296 4.64299C4.01784 5.26811 3.66665 6.11596 3.66665 7.00001C3.66665 7.88407 4.01784 8.73191 4.64296 9.35703C5.26808 9.98215 6.11592 10.3333 6.99998 10.3333C7.88403 10.3333 8.73188 9.98215 9.357 9.35703C9.98212 8.73191 10.3333 7.88407 10.3333 7.00001C10.3333 6.11596 9.98212 5.26811 9.357 4.64299C8.73188 4.01787 7.88403 3.66668 6.99998 3.66668ZM11.3333 3.50001C11.3333 3.279 11.2455 3.06703 11.0892 2.91075C10.933 2.75447 10.721 2.66668 10.5 2.66668C10.279 2.66668 10.067 2.75447 9.91072 2.91075C9.75444 3.06703 9.66665 3.279 9.66665 3.50001C9.66665 3.72102 9.75444 3.93299 9.91072 4.08927C10.067 4.24555 10.279 4.33334 10.5 4.33334C10.721 4.33334 10.933 4.24555 11.0892 4.08927C11.2455 3.93299 11.3333 3.72102 11.3333 3.50001ZM6.99998 5.00001C7.53041 5.00001 8.03912 5.21072 8.41419 5.5858C8.78927 5.96087 8.99998 6.46958 8.99998 7.00001C8.99998 7.53044 8.78927 8.03915 8.41419 8.41422C8.03912 8.7893 7.53041 9.00001 6.99998 9.00001C6.46955 9.00001 5.96084 8.7893 5.58577 8.41422C5.21069 8.03915 4.99998 7.53044 4.99998 7.00001C4.99998 6.46958 5.21069 5.96087 5.58577 5.5858C5.96084 5.21072 6.46955 5.00001 6.99998 5.00001Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      link: 'https://twitter.com/',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g clipPath="url(#clip0_5628_238)">
               <path
                  d="M14.7747 3.77068C14.2657 3.99581 13.726 4.14366 13.1734 4.20935C13.7559 3.86097 14.1918 3.31269 14.4 2.66668C13.8534 2.99201 13.254 3.22001 12.6294 3.34335C12.2098 2.8944 11.6536 2.59665 11.0473 2.4964C10.4411 2.39615 9.81866 2.49901 9.27688 2.78898C8.7351 3.07896 8.30429 3.5398 8.05145 4.09987C7.7986 4.65995 7.73787 5.28787 7.8787 5.88601C6.77011 5.83045 5.68559 5.54236 4.69556 5.04045C3.70553 4.53855 2.83212 3.83404 2.13204 2.97268C1.88423 3.39831 1.75401 3.88216 1.7547 4.37468C1.7547 5.34135 2.2467 6.19535 2.9947 6.69535C2.55204 6.68141 2.11912 6.56187 1.73204 6.34668V6.38135C1.73217 7.02515 1.95495 7.64909 2.3626 8.14739C2.77025 8.64568 3.33769 8.98766 3.9687 9.11535C3.55778 9.2267 3.12691 9.24312 2.7087 9.16335C2.88661 9.7175 3.23337 10.2021 3.70043 10.5494C4.16749 10.8967 4.73145 11.0892 5.31337 11.1C4.73502 11.5542 4.07282 11.89 3.36462 12.0881C2.65642 12.2863 1.91612 12.3428 1.18604 12.2547C2.4605 13.0743 3.9441 13.5094 5.45937 13.508C10.588 13.508 13.3927 9.25935 13.3927 5.57468C13.3927 5.45468 13.3894 5.33335 13.384 5.21468C13.9299 4.82012 14.4011 4.33136 14.7754 3.77135L14.7747 3.77068Z"
                  fill="currentColor"
               />
            </g>
            <defs>
               <clipPath id="clip0_5628_238">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      link: 'https://www.linkedin.com/',
      icon: (
         <svg
            className="text-base-content hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.5">
               <g clipPath="url(#clip0_5402_824)">
                  <path
                     d="M4.62669 3.33333C4.62651 3.68695 4.48587 4.02602 4.23569 4.27594C3.98552 4.52587 3.64631 4.66617 3.29269 4.666C2.93907 4.66582 2.6 4.52517 2.35007 4.275C2.10015 4.02483 1.95985 3.68562 1.96002 3.332C1.9602 2.97837 2.10084 2.63931 2.35102 2.38938C2.60119 2.13946 2.9404 1.99915 3.29402 1.99933C3.64764 1.99951 3.98671 2.14015 4.23664 2.39032C4.48656 2.6405 4.62687 2.97971 4.62669 3.33333ZM4.66669 5.65333H2.00002V14H4.66669V5.65333ZM8.88002 5.65333H6.22669V14H8.85336V9.62C8.85336 7.18 12.0334 6.95333 12.0334 9.62V14H14.6667V8.71333C14.6667 4.6 9.96002 4.75333 8.85336 6.77333L8.88002 5.65333Z"
                     fill="currentColor"
                  />
               </g>
            </g>
            <defs>
               <clipPath id="clip0_5402_824">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      link: 'https://www.youtube.com/',
      icon: (
         <svg
            className="text-base-content hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.5">
               <g clipPath="url(#clip0_5402_825)">
                  <path
                     d="M14.362 4.33199C14.6666 5.51999 14.6666 7.99999 14.6666 7.99999C14.6666 7.99999 14.6666 10.48 14.362 11.668C14.1926 12.3247 13.6973 12.8413 13.07 13.016C11.9306 13.3333 7.99998 13.3333 7.99998 13.3333C7.99998 13.3333 4.07131 13.3333 2.92998 13.016C2.29998 12.8387 1.80531 12.3227 1.63798 11.668C1.33331 10.48 1.33331 7.99999 1.33331 7.99999C1.33331 7.99999 1.33331 5.51999 1.63798 4.33199C1.80731 3.67532 2.30265 3.15866 2.92998 2.98399C4.07131 2.66666 7.99998 2.66666 7.99998 2.66666C7.99998 2.66666 11.9306 2.66666 13.07 2.98399C13.7 3.16132 14.1946 3.67732 14.362 4.33199ZM6.66665 10.3333L10.6666 7.99999L6.66665 5.66666V10.3333Z"
                     fill="currentColor"
                  />
               </g>
            </g>
            <defs>
               <clipPath id="clip0_5402_825">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      link: 'https://dribbble.com/',
      icon: (
         <svg
            className="text-base-content hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.5">
               <g clipPath="url(#clip0_5402_826)">
                  <path
                     d="M13.326 7.71468C13.2713 6.66529 12.9064 5.65575 12.2773 4.81401C12.0857 5.02043 11.8808 5.21417 11.664 5.39401C10.9979 5.94724 10.2536 6.3988 9.45531 6.73401C9.56665 6.96734 9.66865 7.19334 9.75865 7.40668V7.40868C9.78404 7.46829 9.80849 7.52829 9.83198 7.58868C10.8413 7.47534 11.9053 7.51668 12.9366 7.65601C13.074 7.67468 13.2033 7.69468 13.326 7.71468V7.71468ZM7.06931 2.74801C7.719 3.66346 8.31812 4.61377 8.86398 5.59468C9.67931 5.27334 10.3533 4.86801 10.896 4.41668C11.0843 4.26143 11.2617 4.09325 11.4266 3.91334C10.4673 3.10649 9.25352 2.6649 7.99998 2.66668C7.688 2.66646 7.3766 2.69345 7.06931 2.74734V2.74801ZM2.83531 6.66468C3.28946 6.65322 3.74308 6.62587 4.19531 6.58268C5.28841 6.48491 6.37216 6.30168 7.43665 6.03468C6.88032 5.06815 6.27968 4.12782 5.63665 3.21668C4.94979 3.55694 4.34415 4.04095 3.86081 4.63587C3.37747 5.23079 3.02773 5.9227 2.83531 6.66468ZM3.85531 11.3567C4.11398 10.9787 4.45398 10.5533 4.90531 10.0907C5.87465 9.09734 7.01865 8.32401 8.34265 7.89734L8.38398 7.88534C8.27398 7.64268 8.17065 7.42601 8.06665 7.22201C6.84265 7.57868 5.55331 7.80134 4.26865 7.91668C3.64198 7.97334 3.07998 7.99801 2.66665 8.00201C2.66547 9.22374 3.08551 10.4085 3.85598 11.3567H3.85531ZM10.0033 12.9433C9.74622 11.6468 9.38232 10.3738 8.91531 9.13734C7.58065 9.62201 6.51731 10.3307 5.69531 11.176C5.36358 11.5109 5.06919 11.8809 4.81731 12.2793C5.73652 12.9652 6.8531 13.335 7.99998 13.3333C8.68659 13.3343 9.36689 13.2023 10.0033 12.9447V12.9433ZM11.252 12.2267C12.2928 11.4265 13.0019 10.2705 13.2433 8.98001C13.0166 8.92334 12.7293 8.86668 12.4133 8.82268C11.7107 8.7215 10.9978 8.71411 10.2933 8.80068C10.69 9.9199 11.0103 11.0647 11.252 12.2273V12.2267ZM7.99998 14.6667C4.31798 14.6667 1.33331 11.682 1.33331 8.00001C1.33331 4.31801 4.31798 1.33334 7.99998 1.33334C11.682 1.33334 14.6666 4.31801 14.6666 8.00001C14.6666 11.682 11.682 14.6667 7.99998 14.6667Z"
                     fill="currentColor"
                  />
               </g>
            </g>
            <defs>
               <clipPath id="clip0_5402_826">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
]
