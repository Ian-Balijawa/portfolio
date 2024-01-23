import React from 'react'
import { Metadata } from 'next'
import BlogDetails from '@/components/blogDetails/BlogDetails'
import Pagination from '@/components/pagination/Pagination'
import TextSlider from '@/components/slider/TextSlider'

export const metadata: Metadata = {
   title: 'Latest News, Tips, and Insights on your niche',
   description:
      'Read our latest blog post and gain valuable insights and tips from our expert contributors. Our comprehensive guide covers everything you need to know about your niche including many Topics. Discover new ideas and strategies to improve your niche and stay ahead of the competition. Join our community of readers and learn from the best in the business today.',
}

const SinglePage = () => {
   return (
      <>
         <main>
            <div className="container mx-auto w-full px-5 md:px-0 md:max-w-[640px] xl:max-w-[795px]">
               <div className="py-16 sm:py-20 md:py-24 xl:py-32">
                  <BlogDetails />
               </div>
            </div>
            <div className="container mx-auto border-t border-base-content/10 pt-10">
               {/* pagination section  */}
               <Pagination />
            </div>
            <div className="py-16 sm:py-20 md:py-24 xl:py-32">
               <TextSlider />
            </div>
         </main>
      </>
   )
}

export default SinglePage
