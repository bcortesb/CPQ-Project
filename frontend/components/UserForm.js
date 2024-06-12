import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function UserForm({ type }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = type === 'register' ? 'http://localhost:8000/auth/register' : 'http://localhost:8000/auth/login'
      const response = await axios.post(url, { username, password })
      setMessage(response.data.message)
      if (type === 'register') router.push('/login')
    } catch (error) {
      setMessage(error.response.data.detail || `${type} failed`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 capitalize">{type}</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          {type}
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </form>
    </div>
  )
}
