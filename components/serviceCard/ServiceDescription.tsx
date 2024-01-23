const ServiceDescription = () => {
   return (
      <div className="px-5 lg:px-0">
         <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-10 text-base-content">
            About Website Design Service
         </h3>
         <p className="mt-4 md:mt-6 text-lg text-base-content/60 leading-7">
            Lorem ipsum dolor sit amet consectetur. Volutpat facilisis dignissim
            quam vitae est non. Ut diam leo porttitor orci scelerisque sem
            cursus. Gravida enim etiam tortor vel. Morbi elit volutpat
            adipiscing lectus amet nibh feugiat amet. Nec feugiat nec lectus
            lectus. Mi tellus imperdiet vitae sed vehicula non. Feugiat magna
            viverra dolor in amet ipsum. <br /> <br />
            Sit nulla suspendisse dictum elementum eu faucibus egestas. Aliquam
            bibendum sit vitae ultricies interdum cras tortor. Auctor nec sed
            diam amet risus diam ornare. Diam accumsan mauris lacus ac. Sed
            suscipit viverra volutpat vitae nec commodo aliquet. Eget in blandit
            lectus.
         </p>
         {/* available feature */}
         <div className="mt-6 md:mt-16 flex flex-col md:flex-row md:justify-between">
            <div>
               {serviceData.slice(0, 6).map((item: any, index: number) => (
                  <div className="flex items-center gap-3 mt-6" key={index}>
                     <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <rect width="28" height="28" rx="14" fill="#F78F42" />
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M19.9458 8.62172L11.5925 16.6834L9.3758 14.3151C8.96747 13.9301 8.3258 13.9067 7.85913 14.2334C7.40413 14.5717 7.2758 15.1667 7.5558 15.6451L10.1808 19.9151C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.9151C12.9925 19.3667 21.0075 9.81172 21.0075 9.81172C22.0575 8.73839 20.7858 7.79339 19.9458 8.61005V8.62172Z"
                           fill="#131313"
                        />
                     </svg>
                     <p className="text-lg font-medium text-base-content leading-7">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>
            <div>
               {serviceData.slice(6).map((item: any, index: number) => (
                  <div className="flex items-center gap-3 mt-6" key={index}>
                     <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <rect width="28" height="28" rx="14" fill="#F78F42" />
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M19.9458 8.62172L11.5925 16.6834L9.3758 14.3151C8.96747 13.9301 8.3258 13.9067 7.85913 14.2334C7.40413 14.5717 7.2758 15.1667 7.5558 15.6451L10.1808 19.9151C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.9151C12.9925 19.3667 21.0075 9.81172 21.0075 9.81172C22.0575 8.73839 20.7858 7.79339 19.9458 8.61005V8.62172Z"
                           fill="#131313"
                        />
                     </svg>
                     <p className="text-lg font-medium text-base-content leading-7">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>
         </div>
         {/* pricing plan  */}
         <div className="mt-8 md:mt-16">
            <h5 className="text-lg md:text-xl xl:text-2xl text-base-content">
               We Have Exclusive Plan InMyPricing
            </h5>
            <p className="mt-4 md:mt-6 mb-6 text-base text-base-content/60">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et metus
               sed dapibus in sociis. Sed enim eu quis suspendisse volutpat.
            </p>
            <div className="border border-base-content/10">
               <div className=" p-4 bg-base-content/10 rounded text-lg text-base-content font-medium flex items-center justify-between">
                  <p>Service</p>
                  <p>Price</p>
               </div>

               <div className="py-8 px-4 flex flex-col gap-6">
                  {BasicPlanData.map((item: any, index: number) => (
                     <div
                        className="flex items-center justify-between"
                        key={index}
                     >
                        <div className="flex items-center gap-6">
                           <h6 className="text-xl font-medium text-base-content">
                              {item.plan}
                           </h6>
                           {item.saving && (
                              <div className="py-1.5 px-2 rounded bg-primary/20 w-fit">
                                 <p className="text-primary font-medium text-xs">
                                    {item.saving}
                                 </p>
                              </div>
                           )}
                        </div>
                        <h6 className="text-xl font-medium text-base-content">
                           {item.price}
                        </h6>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDescription

const serviceData = [
   { title: 'Free 15-day trial' },
   { title: 'Unlimited Team Members' },
   { title: 'Cancel Anytime' },
   { title: 'Free 15-day trial' },
   { title: 'Unlimited Team Members' },
   { title: 'Cancel Anytime' },
   { title: 'Free 15-day trial' },
   { title: 'Unlimited Team Members' },
   { title: 'Cancel Anytime' },
   { title: 'Free 15-day trial' },
   { title: 'Unlimited Team Members' },
   { title: 'Cancel Anytime' },
]

const BasicPlanData = [
   {
      plan: 'Basic Plan',
      price: '$20',
      saving: 'Save $40',
   },
   {
      plan: 'Basic Plan',
      price: '$20',
   },
   {
      plan: 'Basic Plan',
      price: '$20',
   },
   {
      plan: 'Basic Plan',
      price: '$20',
   },
   {
      plan: 'Basic Plan',
      price: '$20',
   },
   {
      plan: 'Basic Plan',
      price: '$20',
   },
   {
      plan: 'Basic Plan',
      price: '$20',
   },
   {
      plan: 'Basic Plan',
      price: '$20',
   },
]
