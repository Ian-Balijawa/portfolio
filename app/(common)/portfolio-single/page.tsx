import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { LeftArrowIcon, RightArrowIcon } from '@/components/icons'
import TextSlider from '@/components/slider/TextSlider'

export const metadata: Metadata = {
   title: 'Explore my latest project.',
   description:
      'Discover how we helped Business achieve their objectives.Myportfolio showcases my capabilities and the successful outcomes we have delivered for my clients. Contact us today to learn more about my services and how we can help you reach your goals',
}

const PortfolioSingle = () => {
   return (
      <div>
         <div className="container mx-auto px-5 sm:px-0 pt-16 lg:pt-24">
            <Image
               className="rounded-2xl"
               src="/large-img.png"
               width={1216}
               height={810}
               alt="project-image"
            />
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-12 pt-16">
               <div className="lg:col-span-6">
                  <h1 className="text-3xl sm:text-5xl font-bold text-base-content">
                     Simple and Awesome Product Title Here Lorem Ipsum
                  </h1>
                  <p className="text-lg text-base-content/60 mt-12">
                     Lorem ipsum dolor sit amet consectetur. Volutpat facilisis
                     dignissim quam vitae est non. Ut diam leo porttitor orci
                     scelerisque sem cursus. Gravida enim etiam tortor vel.
                     Morbi elit volutpat adipiscing lectus amet nibh feugiat
                     amet. Nec feugiat nec lectus lectus. Mi tellus imperdiet
                     vitae sed vehicula non. Feugiat magna viverra dolor in amet
                     ipsum.
                  </p>
                  <p className="text-lg text-base-content/60 mt-5">
                     Sit nulla suspendisse dictum elementum eu faucibus egestas.
                     Aliquam bibendum sit vitae ultricies interdum cras tortor.
                     Auctor nec sed diam amet risus diam ornare. Diam accumsan
                     mauris lacus ac. Sed suscipit viverra volutpat vitae nec
                     commodo aliquet. Eget in blandit lectus.
                  </p>
                  {/* block 1 */}
                  <div className="mt-12">
                     <h4 className="text-xl font-medium text-base-content">
                        About Projects
                     </h4>
                     <p className="text-lg text-base-content/60 mt-5">
                        Sit nulla suspendisse dictum elementum eu faucibus
                        egestas. Aliquam bibendum sit vitae ultricies interdum
                        cras tortor. Auctor nec sed diam amet risus diam ornare.
                        Diam accumsan mauris lacus ac. Sed suscipit viverra
                        volutpat vitae nec commodo aliquet. Eget in blandit
                        lectus.
                     </p>
                  </div>
                  {/* block 2 */}
                  <div className="mt-12">
                     <h4 className="text-xl font-medium text-base-content">
                        The challenge
                     </h4>
                     <p className="text-lg text-base-content/60 mt-5">
                        Sit nulla suspendisse dictum elementum eu faucibus
                        egestas. Aliquam bibendum sit vitae ultricies interdum
                        cras tortor. Auctor nec sed diam amet risus diam ornare.
                        Diam accumsan mauris lacus ac. Sed suscipit viverra
                        volutpat vitae nec commodo aliquet. Eget in blandit
                        lectus.
                     </p>
                  </div>
                  {/* block 3 */}
                  <div className="mt-12">
                     <h4 className="text-xl font-medium text-base-content">
                        The solution
                     </h4>
                     <p className="text-lg text-base-content/60 mt-5">
                        Sit nulla suspendisse dictum elementum eu faucibus
                        egestas. Aliquam bibendum sit vitae ultricies interdum
                        cras tortor. Auctor nec sed diam amet risus diam ornare.
                        Diam accumsan mauris lacus ac. Sed suscipit viverra
                        volutpat vitae nec commodo aliquet. Eget in blandit
                        lectus.
                     </p>
                  </div>
                  {/* block 4 */}
                  <div className="mt-12">
                     <h4 className="text-xl font-medium text-base-content">
                        The result
                     </h4>
                     <p className="text-lg text-base-content/60 mt-5">
                        Sit nulla suspendisse dictum elementum eu faucibus
                        egestas. Aliquam bibendum sit vitae ultricies interdum
                        cras tortor. Auctor nec sed diam amet risus diam ornare.
                        Diam accumsan mauris lacus ac. Sed suscipit viverra
                        volutpat vitae nec commodo aliquet. Eget in blandit
                        lectus.
                     </p>
                  </div>
               </div>
               <div className="lg:col-span-3 py-8 px-6 bg-base-100 rounded-xl h-fit lg:sticky lg:top-5">
                  {contents.map((content, index) => (
                     <div
                        key={index}
                        className="flex items-center justify-between border-t border-base-content/10 py-5 first:border-none first:py-0 first:pb-5 last:pb-0"
                     >
                        <p className="text-base text-base-content">
                           {content?.name}
                        </p>
                        <span className="text-base text-base-content/60">
                           {content?.value}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
            {/* next blog post clicking section  */}
            <div className="flex items-center justify-between gap-5 mt-16 border-y border-base-content/10 py-8 lg:py-12">
               {/* Previous button  */}
               <div className="flex items-center gap-6">
                  <Link
                     href="/blog/project-details"
                     className="flex items-center justify-center px-4 py-5 w-12 h-12 rounded-full border border-dotted border-base-content/20 hover:bg-primary hover:text-primary-content hover:border-primary transition-all group"
                  >
                     <LeftArrowIcon className="text-base-content" />
                  </Link>
                  <div className="hidden lg:block">
                     <p className="text-sm text-base-content">Previous Blog</p>
                     <h2 className="text-xl xl:text-2xl font-medium text-base-content pt-1 line-clamp-1 hover:text-primary transition-all">
                        Creative Graphic Design
                     </h2>
                  </div>
               </div>
               {/* Next Button  */}
               <div className="flex items-center gap-6">
                  <div className="text-right hidden lg:block">
                     <p className="text-sm text-base-content">Next Blog</p>
                     <h2 className="text-xl xl:text-2xl font-medium text-base-content pt-1 line-clamp-1 hover:text-primary transition-all">
                        Creative Graphic Design
                     </h2>
                  </div>
                  <Link
                     href="/blog/project-details"
                     className="flex items-center justify-center px-4 py-5 w-12 h-12 rounded-full border border-dotted border-base-content/20 hover:bg-primary hover:border-primary transition-all group"
                  >
                     <RightArrowIcon className="text-base-content" />
                  </Link>
               </div>
            </div>
         </div>
         {/* text slider  */}
         <section className="py-16 md:py-24 lg:py-32">
            <TextSlider />
         </section>
      </div>
   )
}

export default PortfolioSingle

const contents = [
   {
      name: 'Client',
      value: 'Wilson Westervelt',
   },
   {
      name: 'Category',
      value: 'E-commerce Website',
   },
   {
      name: 'Start Date',
      value: '05 May 2023',
   },
   {
      name: 'Completed Date',
      value: '17 Jun 2023',
   },
   {
      name: 'Website',
      value: 'www.yourwebsite.com',
   },
]
