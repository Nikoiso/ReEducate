import React from "react";
import Image from "next/image";
import cloudIcon from "../Images/outline (1).png";

interface HeroWeatherProps {
  temp: number;
  name: string;
  time?: string;
  date?: string;
}

export default function HeroWeather({temp, name, time = "06:09",date = "Monday, 9 Sep '23"}: HeroWeatherProps) {
  return (
    <div className="flex items-center justify-between px-2 lg:px-0">
      <div className="flex items-baseline gap-3 lg:gap-4">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none">
          {Math.round(temp)}°
        </h1>

        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            {name}
          </h2>
          <span className="text-[10px] md:text-xs text-gray-300 tracking-tight">
            {time} - {date}
          </span>
        </div>
      </div>

      <div className="w-10 h-10 md:w-14 md:h-14 text-white">
        <Image
          src={cloudIcon}
          alt="Cloud"
          width={48}
          height={48}
          className="w-10 h-10 md:w-14 md:h-14 object-contain"
        />
      </div>
    </div>
  );
}
