export const RightArrowIcon = ({ ...props }) => {
   return (
      <svg
         {...props}
         width="21"
         height="20"
         viewBox="0 0 21 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M14.6667 7.5L18 10.8333M18 10.8333L14.6667 14.1667M18 10.8333L3 10.8333"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   )
}

export const LeftArrowIcon = ({ ...props }) => {
   return (
      <svg
         {...props}
         width="20"
         height="10"
         viewBox="0 0 20 10"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M5 1L1 5M1 5L5 9M1 5L19 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   )
}
