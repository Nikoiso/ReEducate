import type { Planet } from '../Planets';

interface HeaderProps {
  planets: Planet[];
  currentPlanet: string;
  setCurrentPlanet: (name: string) => void;
}

export default function Header({ planets, currentPlanet, setCurrentPlanet }: HeaderProps) {
  return (
    <header className="border-b border-darkGrey py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      <div className="font-antonio text-3xl font-medium tracking-[-1.05px] uppercase">
        THE PLANETS
      </div>
      
      <nav className="flex items-center gap-8">
        {planets.map((planet) => {
          const isActive = currentPlanet.toLowerCase() === planet.name.toLowerCase();
          const planetColor = planet.name.toLowerCase();

          return (
            <button
              key={planet.name}
              onClick={() => setCurrentPlanet(planet.name)}
              className={`text-[11px] font-bold tracking-[1px] uppercase transition-all duration-200 relative py-2 cursor-pointer
                ${isActive ? 'text-white' : 'text-lightGrey hover:text-white'}`}
            >
              {planet.name}
              {isActive && (
                <span 
                  className="absolute bottom-[-24px] left-0 right-0 h-[4px] transition-all duration-300" 
                  style={{ backgroundColor: `var(--color-${planetColor})` }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}