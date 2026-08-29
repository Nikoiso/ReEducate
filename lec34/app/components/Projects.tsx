const projects = [
  {
    title: "Fresh Bakery Every Day",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    img: "/bakery.png",
    liveUrl: "https://re-educate-xmjz.vercel.app/",
    githubUrl: "https://github.com/Nikoiso/ReEducate/tree/main/Lec27",
  },
  {
    title: "Scoot",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    img: "/scoot.png",
    liveUrl: "https://re-educate-56g6.vercel.app/",
    githubUrl: "https://github.com/Nikoiso/ReEducate/tree/main/Lec29",
  },
  {
    title: "TV",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    img: "/tv.png",
    liveUrl: "https://re-educate-v42j.vercel.app/",
    githubUrl: "https://github.com/Nikoiso/ReEducate/tree/main/Lec30",
  },
  {
    title: "Card",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    img: "/card.png",
    liveUrl:
      "https://re-educate.vercel.app/?_vercel_share=mqwlOQ7lRN1cykZc0JD3J7LlNdnE4Aq6",
    githubUrl: "https://github.com/Nikoiso/ReEducate/tree/main/Lec17",
  },
];

export default function Projects() {
  return (
    <section className="py-20 md:py-35 bg-[#151515] text-white">
      <div className="max-w-[1110px] mx-auto px-5">
        <div className="flex justify-center md:justify-between items-center mb-20">
          <h2 className="text-4xl md:text-[72px] font-bold tracking-tighter">
            Projects
          </h2>
          <a
            href="#contact"
            className="hidden md:inline-block text-sm font-bold tracking-widest uppercase border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0] transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-[445/312] w-full bg-[#242424] rounded-lg mb-5 overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col gap-6 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]"
                  >
                    VIEW PROJECT
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]"
                  >
                    VIEW CODE
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-1.5">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-zinc-400 uppercase text-sm font-medium mb-4">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="flex gap-8 md:hidden mt-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]"
                >
                  VIEW PROJECT
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest uppercase border-b-2 border-[#4EE1A0] pb-2 hover:text-[#4EE1A0]"
                >
                  VIEW CODE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
