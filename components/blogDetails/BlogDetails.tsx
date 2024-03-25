import Image from 'next/image'
import PhotoAlbum from 'react-photo-album'

const BlogDetails = ({ id }: { id: string }) => {
   let photos: any[] = []

   if (id === '1') {
      photos = [
         {
            src: '/caren/caren (1).png',
            width: 340,
            height: 700,
         },
         {
            src: '/caren/caren (2).png',
            width: 340,
            height: 700,
         },
         {
            src: '/caren/caren (3).png',
            width: 340,
            height: 700,
         },
         {
            src: '/caren/caren (4).png',
            width: 340,
            height: 700,
         },
         {
            src: '/caren/caren (4).png',
            width: 340,
            height: 700,
         },
         {
            src: '/caren/caren (5).png',
            width: 340,
            height: 700,
         },
         {
            src: '/caren/caren (6).png',
            width: 340,
            height: 700,
         },
         {
            src: '/caren/caren (7).png',
            width: 340,
            height: 700,
         },
      ]
   } else if (id === '2') {
      photos = [
         {
            src: '/link/link (1).png',
            width: 340,
            height: 700,
         },
         {
            src: '/link/link (2).png',
            width: 340,
            height: 700,
         },
         {
            src: '/link/link (3).png',
            width: 340,
            height: 700,
         },
         {
            src: '/link/link (4).png',
            width: 340,
            height: 700,
         },
         {
            src: '/link/link (5).png',
            width: 340,
            height: 700,
         },
         {
            src: '/link/link (6).png',
            width: 340,
            height: 700,
         },
         {
            src: '/link/link (7).png',
            width: 340,
            height: 700,
         },
      ]
   } else if (id === '3') {
      photos = [
         {
            src: '/hiu/hiu (1).png',
            width: 340,
            height: 700,
         },
         {
            src: '/hiu/hiu (2).png',
            width: 340,
            height: 700,
         },
         {
            src: '/hiu/hiu (3).png',
            width: 340,
            height: 700,
         },
         {
            src: '/hiu/hiu (4).png',
            width: 340,
            height: 700,
         },
         {
            src: '/hiu/hiu (4).png',
            width: 340,
            height: 700,
         },
         {
            src: '/hiu/hiu (5).png',
            width: 340,
            height: 700,
         },
      ]
   }

   return (
      <div>
         <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">
            May 9, 2021
         </p>
         <h1 className="text-lg sm:text-2xl md:text-3xl mb-10 xl:text-4xl font-medium text-base-content mt-4">
            The Art of Traveling: Tips and Tricks for a Memorable Journey
         </h1>

         {id === '4' ? (
            <Image
               src={'/link/dashboard.png'}
               alt={'link bedsides dashboard'}
               width={600}
               height={700}
            />
         ) : (
            <PhotoAlbum layout="masonry" photos={photos} />
         )}

         <p className="text-xl text-base-content/60 mt-8">
            Finally, don&apos;t forget to capture memories of your journey.
            Whether it&apos;s through photographs, journaling, or souvenirs,
            preserving the moments and experiences of your travels can bring joy
            and nostalgia for years to come. However, it&apos;s also essential
            to be present in the moment and not let technology distract you from
            the beauty of your surroundings.
         </p>
         <div className="mt-8">
            <h3 className="font-semibold text-base-content text-2xl">
               Research Your Destination
            </h3>
            <p className="mt-4 text-base-content/60 text-xl">
               Finally, don&apos;t forget to capture memories of your journey.
               Whether it&apos;s through photographs, journaling, or souvenirs,
               preserving the moments and experiences of your travels can bring
               joy and nostalgia for years to come. However, it&apos;s also
               essential to be present in the moment and not let technology
               distract you from the beauty of your surroundings.
            </p>
            <h3 className="font-semibold text-base-content text-2xl mt-8">
               Plan Your Itinerary
            </h3>
            <p className="mt-4 text-base-content/60 text-xl">
               Finally, don&apos;t forget to capture memories of your journey.
               Whether it&apos;s through photographs, journaling, or souvenirs,
               preserving the moments and experiences of your travels can bring
               joy and nostalgia for years to come. However, it&apos;s also
               essential to be present in the moment and not let technology
               distract you from the beauty of your surroundings.
            </p>
         </div>
         <div className="mt-8 flex flex-col gap-1">
            <div className="px-4 py-3 bg-base-content/[0.05] rounded-lg flex items-center justify-between">
               <p className="text-base text-base-content">
                  mkdir my-app && cd my-app
               </p>
               <div>
                  <svg
                     className="text-base-content/50 cursor-pointer"
                     width="19"
                     height="18"
                     viewBox="0 0 19 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.87315 0.250003L3.875 0.25H12.3125L12.3143 0.250003C13.0591 0.252121 13.7728 0.54893 14.2994 1.07558C14.8261 1.60224 15.1229 2.31592 15.125 3.06072C15.125 3.06565 15.125 3.07059 15.1249 3.07552L15.1186 3.375H15.3984C16.9733 3.375 18.25 4.65169 18.25 6.22656V14.8984C18.25 16.4733 16.9733 17.75 15.3984 17.75H6.72656C5.15169 17.75 3.875 16.4733 3.875 14.8984V14.625H3.5625L3.56072 14.625C2.81592 14.6229 2.10224 14.3261 1.57558 13.7994C1.04893 13.2728 0.752121 12.5591 0.750003 11.8143L0.75 11.8125V3.375L0.750003 3.37315C0.752449 2.54559 1.08228 1.75263 1.66745 1.16745C2.25263 0.582279 3.04559 0.252449 3.87315 0.250003ZM5.125 14.8984C5.125 15.783 5.84204 16.5 6.72656 16.5H15.3984C16.283 16.5 17 15.783 17 14.8984V6.22656C17 5.34204 16.283 4.625 15.3984 4.625H14.4826C14.4813 4.625 14.4801 4.625 14.4789 4.625H6.72656C5.84204 4.625 5.125 5.34204 5.125 6.22656V14.8984ZM13.8684 3.375H6.72656C5.15169 3.375 3.875 4.65169 3.875 6.22656V13.375H3.56351C3.14928 13.3736 2.75239 13.2085 2.45947 12.9155C2.16656 12.6226 2.00139 12.2258 2 11.8115V3.37599C2.00169 2.87898 2.19988 2.4028 2.55134 2.05134C2.9028 1.69988 3.37898 1.50169 3.87599 1.5H12.3115C12.7258 1.50139 13.1226 1.66656 13.4155 1.95947C13.707 2.25098 13.872 2.64545 13.875 3.05751L13.8684 3.375Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
            </div>
            <div className="px-4 py-3 bg-base-content/[0.05] rounded-lg flex items-center justify-between">
               <p className="text-base text-base-content">npm init -y</p>
               <div>
                  <svg
                     className="text-base-content/50 cursor-pointer"
                     width="19"
                     height="18"
                     viewBox="0 0 19 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.87315 0.250003L3.875 0.25H12.3125L12.3143 0.250003C13.0591 0.252121 13.7728 0.54893 14.2994 1.07558C14.8261 1.60224 15.1229 2.31592 15.125 3.06072C15.125 3.06565 15.125 3.07059 15.1249 3.07552L15.1186 3.375H15.3984C16.9733 3.375 18.25 4.65169 18.25 6.22656V14.8984C18.25 16.4733 16.9733 17.75 15.3984 17.75H6.72656C5.15169 17.75 3.875 16.4733 3.875 14.8984V14.625H3.5625L3.56072 14.625C2.81592 14.6229 2.10224 14.3261 1.57558 13.7994C1.04893 13.2728 0.752121 12.5591 0.750003 11.8143L0.75 11.8125V3.375L0.750003 3.37315C0.752449 2.54559 1.08228 1.75263 1.66745 1.16745C2.25263 0.582279 3.04559 0.252449 3.87315 0.250003ZM5.125 14.8984C5.125 15.783 5.84204 16.5 6.72656 16.5H15.3984C16.283 16.5 17 15.783 17 14.8984V6.22656C17 5.34204 16.283 4.625 15.3984 4.625H14.4826C14.4813 4.625 14.4801 4.625 14.4789 4.625H6.72656C5.84204 4.625 5.125 5.34204 5.125 6.22656V14.8984ZM13.8684 3.375H6.72656C5.15169 3.375 3.875 4.65169 3.875 6.22656V13.375H3.56351C3.14928 13.3736 2.75239 13.2085 2.45947 12.9155C2.16656 12.6226 2.00139 12.2258 2 11.8115V3.37599C2.00169 2.87898 2.19988 2.4028 2.55134 2.05134C2.9028 1.69988 3.37898 1.50169 3.87599 1.5H12.3115C12.7258 1.50139 13.1226 1.66656 13.4155 1.95947C13.707 2.25098 13.872 2.64545 13.875 3.05751L13.8684 3.375Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
            </div>
            <div className="px-4 py-3 bg-base-content/[0.05] rounded-lg flex items-center justify-between">
               <p className="text-base text-base-content">
                  npm install cross-env --save-dev
               </p>
               <div>
                  <svg
                     className="text-base-content/50 cursor-pointer"
                     width="19"
                     height="18"
                     viewBox="0 0 19 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.87315 0.250003L3.875 0.25H12.3125L12.3143 0.250003C13.0591 0.252121 13.7728 0.54893 14.2994 1.07558C14.8261 1.60224 15.1229 2.31592 15.125 3.06072C15.125 3.06565 15.125 3.07059 15.1249 3.07552L15.1186 3.375H15.3984C16.9733 3.375 18.25 4.65169 18.25 6.22656V14.8984C18.25 16.4733 16.9733 17.75 15.3984 17.75H6.72656C5.15169 17.75 3.875 16.4733 3.875 14.8984V14.625H3.5625L3.56072 14.625C2.81592 14.6229 2.10224 14.3261 1.57558 13.7994C1.04893 13.2728 0.752121 12.5591 0.750003 11.8143L0.75 11.8125V3.375L0.750003 3.37315C0.752449 2.54559 1.08228 1.75263 1.66745 1.16745C2.25263 0.582279 3.04559 0.252449 3.87315 0.250003ZM5.125 14.8984C5.125 15.783 5.84204 16.5 6.72656 16.5H15.3984C16.283 16.5 17 15.783 17 14.8984V6.22656C17 5.34204 16.283 4.625 15.3984 4.625H14.4826C14.4813 4.625 14.4801 4.625 14.4789 4.625H6.72656C5.84204 4.625 5.125 5.34204 5.125 6.22656V14.8984ZM13.8684 3.375H6.72656C5.15169 3.375 3.875 4.65169 3.875 6.22656V13.375H3.56351C3.14928 13.3736 2.75239 13.2085 2.45947 12.9155C2.16656 12.6226 2.00139 12.2258 2 11.8115V3.37599C2.00169 2.87898 2.19988 2.4028 2.55134 2.05134C2.9028 1.69988 3.37898 1.50169 3.87599 1.5H12.3115C12.7258 1.50139 13.1226 1.66656 13.4155 1.95947C13.707 2.25098 13.872 2.64545 13.875 3.05751L13.8684 3.375Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
            </div>
         </div>
         {/* heading with description  */}
         <div className="mt-8">
            <h3 className="font-semibold text-base-content text-2xl">
               Pack Lightly and Smartly
            </h3>
            <p className="mt-4 text-base-content/60 text-xl">
               Finally, don&apos;t forget to capture memories of your journey.
               Whether it&apos;s through photographs, journaling, or souvenirs,
               preserving the moments and experiences of your travels can bring
               joy and nostalgia for years to come. However, it&apos;s also
               essential to be present in the moment and not let technology
               distract you from the beauty of your surroundings.
            </p>
            <h3 className="font-semibold text-base-content text-2xl mt-8">
               Stay Safe and Healthy
            </h3>
            <p className="mt-4 text-base-content/60 text-xl">
               Finally, don&apos;t forget to capture memories of your journey.
               Whether it&apos;s through photographs, journaling, or souvenirs,
               preserving the moments and experiences of your travels can bring
               joy and nostalgia for years to come. However, it&apos;s also
               essential to be present in the moment and not let technology
               distract you from the beauty of your surroundings.
            </p>
         </div>
         <Image
            src="/code.png"
            alt=""
            className="w-full mt-8"
            width={795}
            height={462}
         />
         {/* quote section  */}
         <div className="px-6 py-5 border-l-4 border-primary mt-8 rounded-lg bg-primary/10">
            <p className="italic text-lg text-base-content">
               <span className="font-bold"> Note :</span> Finally, don&apos;t
               forget to capture memories of your journey. Whether it&apos;s
               through photographs, journaling, or souvenirs, preserving the
               moments and experiences of your travels can bring joy and
               nostalgia for years to come. Howeve
            </p>
         </div>
         {/* heading with description  */}
         <div className="mt-8">
            <h3 className="font-semibold text-base-content text-2xl">
               Immerse Yourself in the Local Culture
            </h3>
            <p className="mt-4 text-base-content/60 text-xl">
               Finally, don&apos;t forget to capture memories of your journey.
               Whether it&apos;s through photographs, journaling, or souvenirs,
               preserving the moments and experiences of your travels can bring
               joy and nostalgia for years to come. However, it&apos;s also
               essential to be present in the moment and not let technology
               distract you from the beauty of your surroundings.
            </p>
            <h3 className="font-semibold text-base-content text-2xl mt-8">
               Capture Memories
            </h3>
            <p className="mt-4 text-base-content/60 text-xl">
               Finally, don&apos;t forget to capture memories of your journey.
               Whether it&apos;s through photographs, journaling, or souvenirs,
               preserving the moments and experiences of your travels can bring
               joy and nostalgia for years to come. However, it&apos;s also
               essential to be present in the moment and not let technology
               distract you from the beauty of your surroundings.
            </p>
         </div>
      </div>
   )
}

export default BlogDetails
