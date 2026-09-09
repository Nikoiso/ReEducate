import '../../App.css'

export default function Main() {
    return (
      <div className='bg-[#101010] min-h-screen text-white font-sans pb-12 selection:bg-yellow-500 selection:text-black'>
        
        <div className='w-full relative'>
          <img 
            src='GTA 6 banner.svg' 
            alt='GTA 6 Banner' 
            className='w-full h-auto object-cover max-h-[500px] lg:max-h-[700px]'
          />
        </div>
  
        <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8'>
          
          <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-8 mb-6 gap-4'>
            <h2 className='text-[24px] md:text-[32px] font-extrabold tracking-tight'>
              Jogos em Destaque
            </h2>
            
            <div className='flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0'>
              <button className='cursor-pointer bg-[#2A2A2A] hover:bg-[#3A3A3A] transition rounded-full px-4 py-1 text-sm text-[#F6F6F6] font-medium min-w-[50px]'>
                PC
              </button>
              <button className='cursor-pointer bg-[#2A2A2A] hover:bg-[#3A3A3A] transition rounded-full px-4 py-1 text-sm text-[#F6F6F6] font-medium min-w-[75px]'>
                Console
              </button>
              <button className='cursor-pointer bg-[#5A5A5A] rounded-full px-4 py-1 text-sm text-[#F6F6F6] font-medium whitespace-nowrap'>
                Dispositivos Portáteis
              </button>
            </div>
          </div>
  
          <div className='flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 no-scrollbar cursor-grab active:cursor-grabbing'>
            <img src="/GTA 5.svg" alt="GTA V" className="w-[140px] sm:w-[180px] md:w-full object-cover rounded-lg hover:scale-105 transition duration-300 shadow-lg shrink-0" />
            <img src="/GTA online.svg" alt="OnlineGTA" className="w-[140px] sm:w-[180px] md:w-full object-cover rounded-lg hover:scale-105 transition duration-300 shadow-lg shrink-0" />
            <img src="RED.svg" alt="RED" className="w-[140px] sm:w-[180px] md:w-full object-cover rounded-lg hover:scale-105 transition duration-300 shadow-lg shrink-0" />
            <img src="RED Online.svg" alt="OnlineRED" className="w-[140px] sm:w-[180px] md:w-full object-cover rounded-lg hover:scale-105 transition duration-300 shadow-lg shrink-0" />
          </div>
  
          <div className='flex justify-center my-8'>
            <button className='cursor-pointer bg-[#F2A900] hover:bg-[#d49400] text-black font-bold px-6 py-2.5 rounded-md text-sm transition duration-200 shadow-md'>
              Ver todos os jogos
            </button>
          </div>
  
          <div className='mt-12 mb-12'>
            <h2 className='text-[32px] md:text-[40px] font-extrabold tracking-tight mb-8'>
              Últimas Notícias
            </h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              
              <div className='lg:col-span-2 flex flex-col bg-[#0B0B0B] border border-zinc-900 rounded-[20px] overflow-hidden hover:scale-[1.01] transition duration-300 shadow-xl cursor-pointer group'>
                <div className='w-full lg:h-[400px] overflow-hidden'>
                  <img 
                    src="/GTA 6.svg" 
                    alt="GTA 6 News" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className='p-6 md:p-8 flex flex-col justify-between'>
                  <h3 className='text-xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-neutral-300 transition'>
                    Grand Theft Auto VI - Veja o 1º trailer agora
                  </h3>
                  <div className='flex items-center gap-3 text-xs md:text-sm text-zinc-500 font-medium'>
                    <span>Rockstar Games</span>
                    <span className='w-1 h-1 bg-zinc-600 rounded-full'></span>
                    <span>5 de dezembro de 2023</span>
                  </div>
                </div>
              </div>
  
              <div className='flex flex-col gap-6 justify-between'>
                
                <div className='flex flex-col bg-[#0B0B0B] border border-zinc-900 rounded-[20px] overflow-hidden hover:scale-[1.02] transition duration-300 shadow-lg cursor-pointer group flex-1'>
                  <div className='w-full overflow-hidden'>
                    <img 
                      src="/New GTA 5.jpg" 
                      alt="GTA 5 News" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                  </div>
                  <div className='p-5 flex flex-col justify-between'>
                    <h4 className='text-[15px] md:text-base font-bold leading-snug mb-3 group-hover:text-neutral-300 transition line-clamp-2'>
                      1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.
                    </h4>
                    <div className='flex items-center gap-2 text-xs text-zinc-500 font-medium'>
                      <span>Rockstar Games</span>
                      <span className='w-1 h-1 bg-zinc-600 rounded-full'></span>
                      <span>1 de dezembro de 2023</span>
                    </div>
                  </div>
                </div>
  
                <div className='flex flex-col bg-[#0B0B0B] border border-zinc-900 rounded-[20px] overflow-hidden hover:scale-[1.02] transition duration-300 shadow-lg cursor-pointer group flex-1'>
                  <div className='w-full overflow-hidden'>
                    <img 
                      src="/New GTA 6 2.png" 
                      alt="GTA 6 Info" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                  </div>
                  <div className='p-5 flex flex-col justify-betwee'>
                    <h4 className='text-[15px] md:text-base font-bold leading-snug mb-3 group-hover:text-neutral-300 transition line-clamp-2'>
                      Nova atualização de GTA Online chegando em dezembro
                    </h4>
                    <div className='flex items-center gap-2 text-xs text-zinc-500 font-medium'>
                      <span>GTA Online</span>
                      <span className='w-1 h-1 bg-zinc-600 rounded-full'></span>
                      <span>30 de novembro de 2023</span>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
          <div className='mt-12 rounded-[20px] overflow-hidden shadow-2xl  from-[#ECA843] to-[#E37926] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6'>
            <div className='flex flex-col items-center md:items-start text-center md:text-left text-black max-w-sm'>
              <div className='flex items-center gap-3 mb-3'>
              </div>
            </div>
  
            <div className='w-full flex justify-center lg:justify-end items-center'>
              <img 
                src="/RockGames Launcher.png" 
                alt="Launcher Interface" 
                className='object-contain rounded-lg drop-shadow-2xl'
              />
            </div>
          </div>
  
        </div>
      </div>
    )
  }