import type { Planet } from './Planets';

export type TabType = 'overview' | 'structure';

interface PlanetDisplayProps {
  planet: Planet;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  planetIndex: number;
}

export default function PlanetDisplay({ planet, activeTab, setActiveTab, planetIndex }: PlanetDisplayProps) {
  
  if (!planet) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  const fileExtension = planetIndex === 6 ? 'svg' : 'png';
  const imageSrc = `/src/assets/${planetIndex}.${fileExtension}`;
  const planetColorClass = planet.name.toLowerCase();

  const tabs: { id: TabType; num: string; label: string }[] = [
    { id: 'overview', num: '01', label: 'OVERVIEW' },
    { id: 'structure', num: '02', label: 'INTERNAL STRUCTURE' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
      
      <div className="lg:col-span-7 flex justify-center items-center relative min-h-[300px] md:min-h-[450px]">
        <img 
          src={imageSrc} 
          alt={planet.name} 
          className="w-48 md:w-80 lg:w-[450px] object-contain transition-all duration-300"
        />
      </div>

      <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col justify-between gap-10 md:gap-16 lg:gap-8">
        
        <div className="md:w-1/2 lg:w-full flex flex-col justify-center text-center md:text-left">
          <h1 className="font-antonio text-5xl md:text-7xl uppercase mb-6 font-medium">
            {planet.name}
          </h1>
          <p className="text-lightGrey text-[14px] leading-relaxed mb-6 min-h-[110px]">
            {(planet[activeTab as keyof Planet] as { content: string })?.content}
          </p>
          <div className="text-lightGrey text-[12px] flex justify-center md:justify-start items-center gap-2">
            <span>Source :</span>
            <a 
              href={(planet[activeTab as keyof Planet] as { source: string })?.source} 
              target="_blank" 
              rel="noreferrer" 
              className="underline font-bold hover:text-white flex items-center gap-1"
            >
              Wikipedia
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M11.34 0H5.66a.66.66 0 0 0 0 1.32h4.05L4.41 6.62a.66.66 0 1 0 .93.93l5.34-5.3v4.05a.66.66 0 0 0 1.32 0V.66A.66.66 0 0 0 11.34 0z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 lg:w-full flex flex-col gap-4 justify-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-4 px-6 border border-darkGrey text-left text-[12px] tracking-[2.5px] font-bold uppercase transition-all duration-200 flex items-center gap-6 cursor-pointer
                  ${isActive 
                    ? 'border-transparent text-white' 
                    : 'hover:border-transparent text-lightGrey hover:text-white'
                  }`}
                style={isActive ? { backgroundColor: `var(--color-${planetColorClass})` } : {}}
              >
                <span className="text-lightGrey opacity-50">{tab.num}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}