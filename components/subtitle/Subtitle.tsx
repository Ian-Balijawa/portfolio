import React from 'react'

interface SubtitleProps {
   title: string
   description: string
}

const Subtitle = ({ title, description }: SubtitleProps) => {
   return (
      <>
         <h2 className="text-2xl md:text-3xl xl:text-5xl text-base-content font-bold text-center">
            {title}
         </h2>
      </>
   )
}

export default Subtitle
