import type { Planet } from "../Planets";

type Props = {
  planet: Planet;
};

export default function PlanetContent({ planet }: Props) {
  return (
    <main className="min-h-screen bg-[#070724] px-[10%] pt-24 text-white">
      <section className="grid grid-cols-2 items-center gap-28">
        {/* Planet image */}
        <div className="flex justify-center">
          <img
            src={planet.images.planet}
            alt={planet.name}
            className="w-[290px]"
          />
        </div>

        {/* Information */}
        <div className="max-w-[350px]">
          <h1 className="font-antonio text-7xl uppercase">
            {planet.name}
          </h1>

          <p className="mt-6 text-sm leading-6">
            {planet.overview.content}
          </p>

          <a
            href={planet.overview.source}
            target="_blank"
            className="mt-6 block text-sm text-gray-400 underline"
          >
            Source: <b>Wikipedia ↗</b>
          </a>

          <div className="mt-8 flex flex-col gap-4">
            <button className="h-12 bg-[#419EBB] px-5 text-left text-xs font-bold tracking-[2px]">
              <span className="mr-6 opacity-70">01</span>
              OVERVIEW
            </button>

            <button className="h-12 border border-[#ffffff33] px-5 text-left text-xs font-bold tracking-[2px]">
              <span className="mr-6 opacity-70">02</span>
              INTERNAL STRUCTURE
            </button>

            <button className="h-12 border border-[#ffffff33] px-5 text-left text-xs font-bold tracking-[2px]">
              <span className="mr-6 opacity-70">03</span>
              SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </section>

      {/* Bottom cards */}
      <section className="mt-28 grid grid-cols-4 gap-5">
        <InfoCard title="ROTATION TIME" value={planet.rotation} />
        <InfoCard title="REVOLUTION TIME" value={planet.revolution} />
        <InfoCard title="RADIUS" value={planet.radius} />
        <InfoCard title="AVERAGE TEMP." value={planet.temperature} />
      </section>
    </main>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <article className="border border-[#ffffff33] px-6 py-5">
      <p className="text-[11px] font-bold tracking-wider text-gray-400">
        {title}
      </p>
      <h2 className="mt-2 font-antonio text-4xl uppercase">{value}</h2>
    </article>
  );
}