import React from 'react'

interface SmallSubtitleProps {
   title: string
   description: string
}

const SmallSubtitle = ({ title, description }: SmallSubtitleProps) => {
   return (
      <>
         <h2 className="text-2xl md:text-3xl xl:text-5xl text-base-content font-bold text-center">
            {title}
         </h2>
         {/* <p className="md:max-w-[438px] text-center text-base text-base-content/60 mx-auto mt-4"> */}
         {/* {description} */}
         {/* </p> */}
      </>
   )
}

export default SmallSubtitle
