import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import BlogCardWithHover from '@/components/blogCard/BlogCardWithHover'
import TextSlider from '@/components/slider/TextSlider'
import Subtitle from '@/components/subtitle/Subtitle'
import { RightArrowIcon } from '@/components/icons'

export const metadata: Metadata = {
   title: 'Latest News, Tips, and Insights on your niche',
   description:
      'Description: Stay up-to-date with the latest news, trends, and insights on niche. Our blog covers everything you with valuable information and tips to help you improve your niche',
}

const Blog = () => {
   return (
      <>
         <main className="py-16 sm:py-20 md:py-24 xl:py-32">
            <div className="container mx-auto px-5 md:px-0">
               <Subtitle
                  title="Latest Blog"
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  lorem ipsum"
               />
               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-center mt-10 xl:mt-16">
                  {[1, 2, 3, 4, 5, 6].map((item: any, index: any) => (
                     <div key={index}>
                        <BlogCardWithHover />
                     </div>
                  ))}
               </div>
               <button className="flex items-center gap-5 btn btn-primary border-none rounded-full h-12 pl-6 pr-1.5 mt-10 xl:mt-16 w-fit mx-auto">
                  <span className="text-base font-medium text-primary-content">
                     Explore More
                  </span>
                  <div className="p-2 bg-primary-content rounded-full">
                     <RightArrowIcon className="text-primary" />
                  </div>
               </button>
            </div>
            <div className="pt-16 sm:pt-20 md:pt-24 xl:pt-32">
               <TextSlider />
            </div>
         </main>
      </>
   )
}

export default Blog
