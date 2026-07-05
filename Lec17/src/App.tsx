import { useEffect, useState } from 'react'
import { type IUser } from './interfaces'
import axios from 'axios'
import UserCard from './Components/UserCard'
import './App.css'

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  async function fetchUsers() {
    const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="app">
      <input
        className="search-input"
        type="text"
        placeholder="მოძებნე მომხმარებელი..."
        value={searchQuery}
        onChange={(el) => setSearchQuery(el.target.value)}
      />

      <div className="user-cards">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App
