import React, { Fragment } from 'react'
import Footer from '@/components/footer/Footer'
import RightNavbar from '@/components/header/RightNavbar'
import SideBar from '@/components/sidebar/SideBar'
import MobileNavbar from '@/components/header/MobileNavbar'

export default function othersLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <Fragment>
         <div className="largeContainer px-5 xl:px-0 pt-8 relative">
            <MobileNavbar />
            <div className="flex items-start gap-8 relative">
               {/* left sidebar  */}
               <div
                  className={`w-[300px] shrink-0 desktop_sidebar sticky top-5 mb-10 z-10`}
               >
                  <div className="overflow-y-auto scrollbarStyle h-[calc(100vh-2rem)]">
                     <SideBar />
                  </div>
               </div>
               {/* middle content */}
               <div className="block w-full max-w-5xl mx-auto">
                  <main>{children}</main>
                  <Footer />
               </div>
               {/* Right sidebar */}
               <div
                  className={`min-w-[88px] h-[calc(100vh-2rem)] bg-base-100 py-5 rounded-xl desktop_sidebar scrollbarStyle sticky top-5 mb-10 z-10`}
               >
                  <RightNavbar />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
