"use client"
import React, { useState } from "react";
import Image from "next/image";
import { data } from "./data";
import Header from "./Components/Header";
import HeroWeather from "./Components/HeroWeather";
import WeatherDetails from "./Components/WeatherDetails";

import bgRain from "./Images/bg-weather (1).png";
import bgClear from "./Images/bg-weather.png";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const foundCity = data.cities.find((c) =>
    c.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );
  const city = foundCity || data.cities[0];

  const isRainy =
    city.current.description.toUpperCase().includes("DRIZZLE") ||
    city.current.description.toUpperCase().includes("RAIN");

  const currentBg = isRainy ? bgRain : bgClear;

  return (
    <main className="min-h-screen w-full relative flex flex-col lg:flex-row text-white font-sans overflow-hidden">
      <Image
        src={currentBg}
        alt="Weather Background"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 flex-1 p-6 md:p-12 flex flex-col justify-between min-h-87.5 lg:min-h-screen">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <HeroWeather temp={city.current.temperature} name={city.name} />
      </div>

      <div className="relative z-10 w-full lg:w-105 shrink-0">
        <WeatherDetails
          details={city.details}
          description={city.current.description}
          windUnit={data.app.windUnit}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </main>
  );
}
