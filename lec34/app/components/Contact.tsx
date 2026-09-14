"use client"

export default function Contact() {
    return (
      <section id="contact" className="py-20 md:py-35 bg-[#242424] text-white">
        <div className="max-w-[1110px] mx-auto px-5 grid md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-[72px] font-bold tracking-tighter mb-5">Contact</h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-[445px] mx-auto md:mx-0 leading-relaxed">
            I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </div>
  
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <div>
              <input 
                type="text" 
                placeholder="NAME" 
                className="w-full bg-transparent border-b border-zinc-600 pb-4 px-1 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#4EE1A0] transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-transparent border-b border-zinc-600 pb-4 px-1 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#4EE1A0] transition-colors"
              />
            </div>
            <div>
              <textarea 
                rows={5} 
                placeholder="MESSAGE" 
                className="w-full bg-transparent border-b border-zinc-600 pb-4 px-1 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#4EE1A0] transition-colors resize-none"
              ></textarea>
            </div>
            
            <div className="text-center md:text-right">
              <button 
                type="submit"
                className="inline-block text-sm font-bold tracking-widest uppercase border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0] transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }