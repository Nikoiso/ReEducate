import { useState } from 'react'
import UserCard from './Components/UserCard'
import './App.css'


function App() {


  const users = [
  { id:1,
    name:"Nick",
    age:19,
    role:"User",
    skills:["React","JavaScript"],
    photo:"https://picsum.photos/200/300"
  },
  { id:2,
    name:"Saba",
    age:22,
    role:"Manager",
    skills:["React","JavaScript","HTML"],
    photo:"https://picsum.photos/250/300"
  },
  { id:3,
    name:"Luka",
    age:20,
    role:"Admin",
    skills:["React","C++"],
    photo:"https://picsum.photos/200/350"
  },
  { id:4,
    name:"Mariam",
    age:34,
    role:"Admin",
    skills:["C#","JavaScript","HTML"],
    photo:"https://picsum.photos/100/300"
  }
]

  return (
    <>
      <h1> Momxmareblis Sia: </h1>
      {
        users.map((props) => (
        <UserCard key={props.id} props={props} />
      ))}
    </>
  )
}

export default App
