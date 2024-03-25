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
      link: '/',
   },
   {
      title: 'About',
      link: '/#resume-home2',
   },
   {
      title: 'Services',
      link: '/#service-home2',
   },
   {
      title: 'Projects',
      link: '/#project-home2',
   },
   {
      title: 'Blog',
      link: '/#blog-home2',
   },
   {
      title: 'Contact',
      link: '/#contact-home2',
   },
]
