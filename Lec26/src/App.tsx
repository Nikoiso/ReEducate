// import { useState } from 'react'
// import Body from './Components/Body'
// import TextInput from './Components/TextInput'
// import Card from './Components/Card'
// import ThankYouPage from './Components/ThankYouPage'
import './App.css'

// function App() {
//   const [cardData, setCardData] = useState({
//     name: '',
//     cardnumber: '',
//     month: '',
//     year: '',
//     cvc: '',
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
    
//     setCardData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleNumChange = (value: string) => {
//     setCardData((prev) => ({
//       ...prev,
//       cardnumber: value,
//     }))
//   }

//   return (
//     <>
//       <div>
//         <Body />
//         <div className="flex gap-8 items-center justify-center min-h-screen">
//           <Card CardData={cardData} />
//           <TextInput
//             CardData={cardData}
//             onChange={handleChange}
//             onNumChange={handleNumChange}
//           />
//         </div>
//         <div>
//           <ThankYouPage/>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// import { useState } from "react";
// import Card from "./Components/Card";
// import TextInput from "./Components/TextInput";
// import ThankYou from "./Components/ThankYouPage";

// export default function App() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [cardData, setCardData] = useState({
//     name: "",
//     cardnumber: "",
//     month: "",
//     year: "",
//     cvc: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setCardData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleNumChange = (value: string) => {
//     setCardData((prev) => ({ ...prev, cardnumber: value }));
//   };

//   const handleReset = () => {
//     setCardData({ name: "", cardnumber: "", month: "", year: "", cvc: "" });
//     setIsSubmitted(false);
//   };

//   return (
//     <main className="min-h-screen flex flex-col md:flex-row bg-white">
//       <div className="w-full h-[240px] md:w-[480px] md:h-screen bg-[#21092F] relative flex items-center justify-center shrink-0">
//         <div className="absolute top-8 md:top-auto md:right-[-120px] z-20">
//           <Card CardData={cardData} />
//         </div>
//       </div>

//       <div className="flex-1 flex items-center justify-center p-6 pt-32 md:pt-6 md:pl-40">
//         {!isSubmitted ? (
//           <TextInput
//             CardData={cardData}
//             onChange={handleChange}
//             onNumChange={handleNumChange}
//             onConfirm={() => setIsSubmitted(true)}
//           />
//         ) : (
//           <ThankYou onReset={handleReset} />
//         )}
//       </div>
//     </main>
//   );
// }

import { useState } from "react";
import Card from "./Components/Card";
import TextInput from "./Components/TextInput";
import ThankYou from "./Components/ThankYouPage";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    cardnumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumChange = (value: string) => {
    setCardData((prev) => ({ ...prev, cardnumber: value }));
  };

  const handleReset = () => {
    setCardData({ name: "", cardnumber: "", month: "", year: "", cvc: "" });
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="w-full h-[240px] md:w-[483px] md:h-screen bg-[#21092F] relative flex items-center justify-center shrink-0">
        <div className="absolute top-[32px] md:top-auto md:right-[-160px] z-20">
          <Card CardData={cardData} />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 pt-[120px] md:pt-0 md:pl-[200px]">
        {!isSubmitted ? (
          <TextInput
            CardData={cardData}
            onChange={handleChange}
            onNumChange={handleNumChange}
            onConfirm={() => setIsSubmitted(true)}
          />
        ) : (
          <ThankYou onReset={handleReset} />
        )}
      </div>
    </main>
  );
}