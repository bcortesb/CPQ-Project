import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import Link from 'next/link'

export default function Products() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleEdit = (product) => {
    setSelectedProduct(product)
    setShowForm(true)
  }

  const handleAdd = () => {
    setSelectedProduct(null)
    setShowForm(true)
  }

  const handleSave = () => {
    setShowForm(false)
    fetchProducts()
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <button onClick={handleAdd} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Product</button>
      </div>
      {showForm ? (
        <ProductForm product={selectedProduct} onSave={handleSave} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <button onClick={() => handleEdit(product)} className="mt-2 bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">Edit</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
