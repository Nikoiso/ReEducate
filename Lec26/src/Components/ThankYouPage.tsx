// interface ThankYouProps {
//   onReset: () => void;
// }

// export default function ThankYouPage({ onReset }: ThankYouProps) {
//   return (
//     <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[380px] font-mono py-6">
//       <div className="w-20 h-20 bg-gradient-to-br from-[#6348FE] to-[#6105E4] rounded-full flex items-center justify-center shadow-lg">
//         <svg
//           className="w-9 h-9 text-white stroke-[3]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M5 13l4 4L19 7"
//           />
//         </svg>
//       </div>

//       <div className="flex flex-col items-center gap-3 text-center">
//         <h2 className="text-3xl font-bold tracking-[0.15em] text-[#21092F]">
//           THANK YOU!
//         </h2>
//         <p className="text-[#8F8694] font-medium text-lg">
//           We've added your card details
//         </p>
//       </div>

//       <button
//         onClick={onReset}
//         className="w-full bg-[#21092F] text-white py-4 rounded-lg font-medium text-lg hover:bg-[#38134d] transition-colors cursor-pointer"
//       >
//         Continue
//       </button>
//     </div>
//   );
// }


interface ThankYouProps {
    onReset: () => void;
  }
  
  export default function ThankYouPage({ onReset }: ThankYouProps) {
    return (
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[380px] font-mono">
        <div className="w-20 h-20 bg-gradient-to-br from-[#6348FE] to-[#6105E4] rounded-full flex items-center justify-center shadow-md">
          <svg
            className="w-8 h-8 text-white stroke-[3]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
  
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-semibold tracking-[0.18em] text-[#21092F]">
            THANK YOU!
          </h2>
          <p className="text-[#8F8694] text-[18px]">
            We've added your card details
          </p>
        </div>
  
        <button
          onClick={onReset}
          className="w-full bg-[#21092F] text-white py-4 rounded-[8px] font-medium text-[18px] hover:bg-[#38134d] transition-colors cursor-pointer"
        >
          Continue
        </button>
      </div>
    );
  }