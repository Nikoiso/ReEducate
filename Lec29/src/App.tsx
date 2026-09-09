// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import Download from "./Components/Download";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import Main from "./Components/Main";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <div>
//           <Header />
//           <Main/>
//         </div>
//         <div>
//           <Download/>
//           <Footer />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Download from "./Components/Download";
import Main from "./Components/Main";
import About from "./Components/Routes/About";
import Careers from "./Components/Routes/Careers";
import Location from './Components/Routes/Locations'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <div>
          <Download />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;