import { useState } from 'react'
import axios from 'axios'

export default function ProductForm({ product, onSave }) {
  const [name, setName] = useState(product ? product.name : '')
  const [price, setPrice] = useState(product ? product.price : '')
  const [description, setDescription] = useState(product ? product.description : '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const productData = { name, price, description }
    try {
      if (product) {
        await axios.put(`http://localhost:8000/products/${product.id}`, productData)
      } else {
        await axios.post('http://localhost:8000/products', productData)
      }
      onSave()
    } catch (error) {
      console.error('Error saving product:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4">{product ? 'Edit Product' : 'Add Product'}</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          className="w-full px-3 py-2 border rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          className="w-full px-3 py-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Save
      </button>
    </form>
  )
}
