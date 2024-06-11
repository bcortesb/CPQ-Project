import { useState } from 'react'
import ProductList from '../components/ProductList'
import Login from '../components/Login'

export default function ProductsPage() {
  const [token, setToken] = useState(null)

  return (
    <div className="p-4">
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <ProductList token={token} />
      )}
    </div>
  )
}
