import { useState } from 'react'
import axios from 'axios'

export default function Login({ setToken }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/auth/login', { username, password })
      setToken(response.data.access_token)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full"
        />
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white">Login</button>
    </form>
  )
}
