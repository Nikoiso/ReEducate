import React from "react";
import Image from "next/image";

import tempMaxIcon from "../Images/Vector.png";
import tempMinIcon from "../Images/Vector (1).png";
import humidityIcon from "../Images/outline.png";
import cloudyIcon from "../Images/outline (1).png";
import windIcon from "../Images/outline (2).png";

interface DetailsType {
  tempMax: number;
  tempMin: number;
  humidity: number;
  cloudiness: number;
  wind: number;
  precipitation?: number;
  visibility?: number;
}

interface WeatherDetailsProps {
  details: DetailsType;
  description: string;
  windUnit: string;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function WeatherDetails({
  details,
  description,
  windUnit,
  searchQuery,
  setSearchQuery,
}: WeatherDetailsProps) {
  const detailsList = [
    {
      label: "Temp max",
      value: `${details.tempMax}°`,
      iconSrc: tempMaxIcon,
      alt: "temp max",
    },
    {
      label: "Temp min",
      value: `${details.tempMin}°`,
      iconSrc: tempMinIcon,
      alt: "temp min",
    },
    {
      label: "Humadity",
      value: `${details.humidity}%`,
      iconSrc: humidityIcon,
      alt: "humidity",
    },
    {
      label: "Cloudy",
      value: `${details.cloudiness}%`,
      iconSrc: cloudyIcon,
      alt: "cloudy",
    },
    {
      label: "Wind",
      value: `${details.wind}${windUnit}`,
      iconSrc: windIcon,
      alt: "wind",
    },
  ];

  return (
    <div className="w-full h-full backdrop-blur-2xl bg-black/20 p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 rounded-t-3xl lg:rounded-none">
      <div>
        <div className="hidden lg:flex items-center border-b border-white/60 pb-2 mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Location..."
            className="bg-transparent text-sm text-white placeholder-gray-300 focus:outline-none w-full pr-2"
          />
          <svg
            className="w-4 h-4 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <h3 className="text-center lg:text-left text-xs font-light text-gray-200 tracking-wider mb-8">
          Weather Details...
        </h3>

        <h2 className="text-center lg:text-left text-xs font-bold uppercase tracking-widest text-white mb-10">
          {description}
        </h2>

        <div className="flex flex-col gap-6 px-4 lg:px-0">
          {detailsList.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm"
            >
              <span className="text-gray-200 font-light">{item.label}</span>
              <div className="flex items-center gap-3">
                <span className="font-medium text-white">{item.value}</span>
                <Image
                  src={item.iconSrc}
                  alt={item.alt}
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-b border-white/30 w-full mx-auto" />
    </div>
  );
}
