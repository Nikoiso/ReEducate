import { useEffect, useState } from 'react'
import { citiesData } from './citiesData'
import LiveTracker from './Components/LiveTracker'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [activeCity, setActiveCity] = useState({citiesData})
  const [isLive, setIsLive] = useState(false)
useEffect(() =>{
console.log("ამინდის აპლიკაცია წარმატებით ჩაიტვირთა")
},[])

useEffect(() => {
  if (activeCity && activeCity.name) {
    document.title = `ამინდი: ${activeCity.name}`
  }
},[activeCity])

  return (
    <div>
<div>
  
  {isLive ? <LiveTracker/>: null}
  
  <button onClick={() => setIsLive(!isLive)}>
  {isLive ? "გათიშე Live რეჟიმი" : "ჩართე Live რეჟიმი"}
  </button>
</div>
    <div>
<h1> {activeCity.name} </h1>
<p> ტემპერატურა: {activeCity.temp}</p>
<p> მდგომარეობა: {activeCity.condition}</p>
    </div>
<div>
{citiesData.map((city) => (
  <button key={city.id} onClick={() => setActiveCity(city)}>
{city.name}
  </button>
))}
</div>
</div>
  )
}

export default App
