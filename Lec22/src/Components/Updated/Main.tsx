export default function UpdatedMain() {
  return (
    <div className='min-h-screen font-sans pb-20 bg-[#050505] text-white selection:bg-amber-500 selection:text-black'>
      
      <div className='w-full relative group overflow-hidden'>
        <div className='absolute inset-0  from-[#050505] via-transparent to-transparent z-10'></div>
        <img 
          src='/GTA 6 banner.svg' 
          alt='GTA 6 Banner' 
          className='w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-1000 group-hover:scale-105' 
        />
      </div>

      <div className='max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative z-20 -mt-20 md:-mt-32'>
        
        <div className='bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-6'>
            <div>
              <h2 className='text-3xl md:text-4xl font-black tracking-tighter'>Jogos em Destaque</h2>
              <div className='w-16 h-1.5 bg-amber-500 mt-4 rounded-full'></div>
            </div>
            <div className='flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0'>
              <button className='cursor-pointer rounded-full px-5 py-2 text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition'>PC</button>
              <button className='cursor-pointer rounded-full px-5 py-2 text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition'>Console</button>
              <button className='cursor-pointer rounded-full px-5 py-2 text-sm font-bold bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'>Dispositivos Portáteis</button>
            </div>
          </div>

          <div className='flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 no-scrollbar'>
            {["/GTA 5.svg", "/GTA online.svg", "RED.svg", "RED Online.svg"].map((src, idx) => (
              <div key={idx} className='relative group overflow-hidden rounded-xl cursor-pointer w-[160px] sm:w-[200px] md:w-full shrink-0'>
                <img 
                  src={src} 
                  alt="game" 
                  className='w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-80' 
                />
                <div className='absolute inset-0 border-2 border-transparent group-hover:border-amber-500 rounded-xl transition duration-300 pointer-events-none'></div>
              </div>
            ))}
          </div>

          <div className='flex justify-center mt-10'>
            <button className='cursor-pointer font-extrabold px-8 py-4 rounded-xl text-sm transition duration-300 bg-white text-black hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]'>
              Ver todos os jogos
            </button>
          </div>
        </div>

        <div className='mt-24'>
          <div className='mb-10'>
            <h2 className='text-4xl md:text-5xl font-black tracking-tighter'>Últimas Notícias</h2>
            <div className='w-20 h-1.5 bg-amber-500 mt-5 rounded-full'></div>
          </div>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2 flex flex-col bg-[#0F0F0F] border border-white/5 rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer group'>
              <div className='w-full  lg:h-[450px] overflow-hidden relative'>
                <div className='absolute inset-0  from-[#0F0F0F] via-transparent to-transparent z-10 opacity-80'></div>
                <img src="/GTA 6.svg" alt="GTA 6" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className='p-8 md:p-10 flex flex-col justify-end relative z-20 -mt-20'>
                <div className='flex items-center gap-3 text-sm text-amber-500 font-bold uppercase tracking-wider mb-4'>
                  <span>Rockstar Games</span> 
                  <span className='w-1.5 h-1.5 bg-amber-500 rounded-full'></span> 
                  <span className='text-neutral-400'>5 de dezembro de 2023</span>
                </div>
                <h3 className='text-2xl md:text-4xl font-black leading-tight text-white group-hover:text-amber-500 transition duration-300'>
                  Grand Theft Auto VI - Veja o 1º trailer agora
                </h3>
              </div>
            </div>

            <div className='flex flex-col gap-6 justify-between'>
              {[
                { src: "/New GTA 5.jpg", title: "1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.", date: "1 dez 2023", author: "Rockstar Games" },
                { src: "/New GTA 6 2.png", title: "Nova atualização de GTA Online chegando em dezembro", date: "30 nov 2023", author: "GTA Online" }
              ].map((item, idx) => (
                <div key={idx} className='flex flex-col bg-[#0F0F0F] border border-white/5 rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] cursor-pointer group flex-1'>
                  <div className='w-full  overflow-hidden'>
                    <img src={item.src} alt="news" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className='p-6 flex flex-col justify-between'>
                    <div className='flex items-center gap-2 text-xs text-amber-500 font-bold uppercase tracking-wider mb-3'>
                      <span>{item.author}</span> 
                      <span className='w-1 h-1 bg-amber-500 rounded-full'></span> 
                      <span className='text-neutral-500'>{item.date}</span>
                    </div>
                    <h4 className='text-lg font-bold leading-snug group-hover:text-amber-500 transition duration-300'>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full mt-24 rounded-[32px] overflow-hidden relative group p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12  from-neutral-900 to-[#050505] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]'>
          <div className='absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none'></div>

          <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-md w-full shrink-0 relative z-10'>
            <div className='flex items-center gap-5 mb-8'>
              <div className='w-24 h-24 flex items-center justify-center rounded-[24px] font-black text-5xl bg-amber-500 text-black shadow-[0_10px_30px_rgba(245,158,11,0.4)]'>
                R*
              </div>
              <h3 className='text-4xl md:text-5xl font-black tracking-tighter leading-none'>
                Games<br/>Launcher
              </h3>
            </div>
            <p className='font-medium text-xl md:text-2xl mb-10 text-neutral-300 leading-snug'>
              Todos os seus jogos em um só lugar. Experiência premium garantida.
            </p>
            <button className='cursor-pointer font-black tracking-wide px-12 py-5 rounded-2xl text-lg transition-all duration-300 bg-amber-500 hover:bg-white text-black shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] w-full sm:w-auto hover:-translate-y-1'>
              Download Agora
            </button>
          </div>

          <div className='w-full flex justify-center lg:justify-end items-center relative z-10'>
            <img 
              src="/RockGames Launcher.png" 
              alt="Launcher" 
              className='w-full max-w-[600px] h-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.7)] group-hover:scale-[1.03] transition duration-700' 
            />
          </div>
        </div>

      </div>
    </div>
  );
}