// import { useState } from 'react';
// import './App.css'
// import { motion } from 'framer-motion';

// function App() {
//     const [ hide, sethide] = useState(false)


//   return (
//     <section>
// {!hide && (
//         <motion.div
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.8 }}
//           onClick={() => sethide(true)}
//     className='p-30 bg-cyan-500 max-w-sm rounded-2xl shadow-lg flex-col gap-14'>
//       <h1 className='w-auto h-auto font-extrabold text-5xl text-blue-500 text-center text-shadow-5'>Rage Deal</h1>
//       <p className='w-auto h-auto font-extrabold text-xl text-blue-500 text-center text-shadow-5'> Congratulations! </p>
//     </motion.div>
//     </section>
//   )
// }

// export default App;


import { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const [hide, sethide] = useState(false);

  return (
    <section className='min-h-screen flex justify-center items-center'>
      {!hide && (
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => sethide(true)}
          className='p-12 bg-cyan-500 max-w-sm rounded-2xl shadow-lg flex flex-col gap-4 cursor-pointer select-none'
        >
          <h1 className='w-auto h-auto font-extrabold text-5xl text-blue-500 text-center'>
            Rage Deal
          </h1>
          <p className='w-auto h-auto font-extrabold text-xl text-blue-500 text-center'>
            Congratulations!
          </p>
        </motion.div>
      )}
    </section>
  );
}

export default App;