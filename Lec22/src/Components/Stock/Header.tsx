import { useState } from 'react';
import '../../App.css';

export default function Header({ 
  isNewDesign, 
  setIsNewDesign 
}: { 
  isNewDesign: boolean; 
  setIsNewDesign: (value: boolean) => void; 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative w-full bg-[#020202] text-white px-6 py-4 flex items-center justify-between z-50 border-b border-zinc-900'>
      
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className='flex flex-col gap-1.5 p-2 focus:outline-none z-50 cursor-pointer'
      >
        <span className={`w-6 h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <img 
          src='/Logo.svg' 
          alt='Rockstar Logo' 
          className='h-10 pointer-events-auto cursor-pointer active:scale-95 transition-transform' 
        />
      </div>

      <div 
        className={`absolute top-full left-0 w-full bg-[#020202] z-40 border-b border-zinc-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <ul className='flex flex-col p-4 space-y-2 bg-[#020202]'>
          <li><a href="#jogos" className='block py-2.5 px-4 hover:bg-zinc-900 rounded-lg transition cursor-pointer'>Jogos</a></li>
          <li><a href="#loja" className='block py-2.5 px-4 hover:bg-zinc-900 rounded-lg transition cursor-pointer'>Loja</a></li>
          <li><a href="#ajuda" className='block py-2.5 px-4 hover:bg-zinc-900 rounded-lg transition cursor-pointer'>Ajuda</a></li>
          <li className='pt-2'>
            <button onClick={() => setIsNewDesign(!isNewDesign)} className='w-full text-center py-2.5 px-4 bg-[#FCAF17] hover:bg-[#d99310] transition rounded-lg text-[#020202] font-bold cursor-pointer'>
              Baixe o Launcher
            </button>
          </li>
        </ul>
      </div>

      <div className='flex justify-between items-center p-2 gap-[10px] z-50'>
        <button className='cursor-pointer bg-[#2A2A2A] hover:bg-zinc-800 transition rounded-full w-[35px] h-[35px] items-center justify-center flex'>
          <img src='/search.png' alt='Search' className='w-4 h-4 object-contain'/>
        </button>
        
        <button className='cursor-pointer bg-[#2A2A2A] hover:bg-zinc-800 transition rounded-full w-[35px] h-[35px] items-center justify-center flex'>
          <img src='/person.png' alt='Profile' className='w-4 h-4 object-contain'/>
        </button>
      </div>

    </div>
  );
}