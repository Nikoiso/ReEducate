import '../../App.css'

export default function Footer() {
    return (
      <footer className="w-full bg-black text-neutral-400 text-xs py-12 px-6 lg:px-[140px] border-t border-neutral-800 flex-wrap justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
<div className='border rounded-[18px] py-2.5 px-2.5'>   
    <img src='Logo.svg' alt='Logo'/>
</div>
          <div className="flex items-center gap-6 flex-wrap justify-center flex-row">
            <p className="cursor-pointer hover:text-white m-0 transition-colors">CONTATO</p>
            <p className="cursor-pointer hover:text-white m-0 transition-colors">SOBRE</p>
            <p className="cursor-pointer hover:text-white m-0 transition-colors">SUPORTE</p>
            <p className="cursor-pointer hover:text-white m-0 transition-colors">EMPEGROSE</p>
          </div>
          <p className="m-0">
            © {new Date().getFullYear()} Rockstar Games, Inc.    -    YWR Studio.  
          </p>
          <div className='flex flex-row justify-center items-center gap-6 mt-6 cursor-pointer'>
            <img src='Vector.png' alt='Twitch'/>
            <img src='instagram.svg' alt='IG'/>
            <img src='twitter.svg' alt='Twitter'/>
            <img src='youtube.svg' alt='Youtube'/>
            <img src='facebook.svg' alt='Facebook'/>
            </div>
        </div>
      </footer>
    );
  }