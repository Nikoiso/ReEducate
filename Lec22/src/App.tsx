// import Header from './Components/Stock/Header'
// import Footer from './Components/Stock/Footer'
// import Main from './Components/Stock/Main'
// export default function App() {
//   return (
//     <div>
//         <div>
//         <Header/>
//         <Main/>
//         </div>
//             <div>
//             <Footer/>
//             </div>
//     </div>
//   )
// }


import { useState } from 'react';
import './App.css';

import Header from './Components/Stock/Header';
import Footer from './Components/Stock/Footer';
import StockMain from './Components/Stock/Main';
import UpdatedMain from './Components/Updated/Main';

export default function App() {
  const [isNewDesign, setIsNewDesign] = useState(false);

  return (
    <div className={isNewDesign ? 'bg-[#0A0A0A]' : 'bg-[#101010]'}>
      <Header isNewDesign={isNewDesign} setIsNewDesign={setIsNewDesign} />
      
      {isNewDesign ? <UpdatedMain /> : <StockMain />}
      
      <Footer />
    </div>
  );
}