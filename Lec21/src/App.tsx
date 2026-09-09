import { useState } from 'react';
import { planets } from './Components/Planets'; 
import Header from './Components/Header/Header';
import PlanetDisplay, { type TabType } from './Components/PlanetDisplay';
import Stats from './Components/Stats';

function App() {
  const [currentPlanetName, setCurrentPlanetName] = useState<string>('Earth');
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const planetIndexInArray = planets.findIndex(
    (planet) => planet.name.toLowerCase() === currentPlanetName.toLowerCase()
  );

  const planetIndex = planetIndexInArray !== -1 ? planetIndexInArray + 1 : 3;

  const activePlanet = planets[planetIndex - 1] || planets[0];

  return (
    <div className="min-h-screen bg-darkBlue text-white font-spartan flex flex-col justify-between pb-12">
      <Header 
        planets={planets} 
        currentPlanet={activePlanet.name} 
        setCurrentPlanet={(name) => {
          setCurrentPlanetName(name);
          setActiveTab('overview');
        }} 
      />
      
      <main className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-12 lg:gap-20 my-auto">
        <PlanetDisplay 
          planet={activePlanet} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          planetIndex={planetIndex}
        />
        <Stats planet={activePlanet} />
      </main>
    </div>
  );
}

export default App;