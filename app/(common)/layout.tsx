import FooterLarge from '@/components/footer/FooterLarge'
import TopNavbar from '@/components/topNavbar/TopNavbar'
import { Fragment } from 'react'

export default function CommonLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   return (
      <Fragment>
         <TopNavbar NavData={NavData} />
         {children}
         <FooterLarge />
      </Fragment>
   )
}

const NavData = [
   {
      title: 'Home',
      link: '/home-2',
   },
   {
      title: 'About',
      link: '/home-2#resume-home2',
   },
   {
      title: 'Services',
      link: '/home-2#service-home2',
   },
   {
      title: 'Projects',
      link: '/home-2#project-home2',
   },
   {
      title: 'Blog',
      link: '/home-2#blog-home2',
   },
   {
      title: 'Contact',
      link: '/home-2#contact-home2',
   },
]
