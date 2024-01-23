import FooterWithBg from '@/components/footer/FooterWithBg'
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
         <FooterWithBg />
      </Fragment>
   )
}

const NavData = [
   {
      title: 'Home',
      link: '/home-3',
   },
   {
      title: 'About',
      link: '/home-3#about-home3',
   },
   {
      title: 'Services',
      link: '/home-3#service-home3',
   },
   {
      title: 'Projects',
      link: '/home-3#project-home3',
   },
   {
      title: 'Blog',
      link: '/home-3#blog-home3',
   },
   {
      title: 'Contact',
      link: '/home-3#contact-home3',
   },
]
