import { useState } from 'react'
import axios from 'axios'

export default function ProductForm({ token, product, onSave }) {
  const [name, setName] = useState(product ? product.name : '')
  const [price, setPrice] = useState(product ? product.price : '')
  const [description, setDescription] = useState(product ? product.description : '')
  const [subproducts, setSubproducts] = useState(product ? product.subproducts : [])

  const handleAddSubproduct = () => {
    setSubproducts([...subproducts, { name: '', description: '', price: '', image_url: '' }])
  }

  const handleSubproductChange = (index, field, value) => {
    const updatedSubproducts = subproducts.map((subproduct, i) => i === index ? { ...subproduct, [field]: value } : subproduct)
    setSubproducts(updatedSubproducts)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, price: parseFloat(price), description, subproducts }
    try {
      if (product) {
        await axios.put(`http://localhost:8000/products/${product.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      } else {
        await axios.post('http://localhost:8000/products', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      }
      onSave()
    } catch (error) {
      console.error('Error saving product:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Subproducts</h3>
        {subproducts.map((subproduct, index) => (
          <div key={index} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Subproduct Name</label>
              <input
                type="text"
                value={subproduct.name}
                onChange={(e) => handleSubproductChange(index, 'name', e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subproduct Description</label>
              <textarea
                value={subproduct.description}
                onChange={(e) => handleSubproductChange(index, 'description', e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subproduct Price</label>
              <input
                type="number"
                value={subproduct.price}
                onChange={(e) => handleSubproductChange(index, 'price', e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subproduct Image URL</label>
              <input
                type="text"
                value={subproduct.image_url}
                onChange={(e) => handleSubproductChange(index, 'image_url', e.target.value)}
                className="mt-1 block w-full"
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddSubproduct} className="mt-4 py-2 px-4 bg-green-600 text-white">Add Subproduct</button>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white">
        {product ? 'Update' : 'Add'} Product
      </button>
    </form>
  )
}
