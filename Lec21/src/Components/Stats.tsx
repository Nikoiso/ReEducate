import type { Planet } from './Planets';

interface StatsProps {
  planet: Planet;
}

export default function Stats({ planet }: StatsProps) {
  const statsData = [
    { label: 'ROTATION TIME', value: planet.rotation },
    { label: 'REVOLUTION TIME', value: planet.revolution },
    { label: 'RADIUS', value: planet.radius },
    { label: 'AVERAGE TEMP.', value: planet.temperature },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-7 w-full">
      {statsData.map((stat, index) => (
        <div 
          key={index} 
          className="border border-darkGrey py-4 px-6 md:py-6 md:px-8 flex md:flex-col justify-between items-center md:items-start gap-2 bg-transparent"
        >
          <span className="text-[8px] md:text-[11px] tracking-[1px] md:tracking-[2px] font-bold text-lightGrey uppercase">
            {stat.label}
          </span>
          <span className="font-antonio text-2xl md:text-4xl font-medium uppercase">
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
}