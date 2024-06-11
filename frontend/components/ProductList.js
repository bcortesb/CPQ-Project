import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'

export default function ProductList({ token }) {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [token])

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8000/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setProducts(response.data)
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    fetchProducts()
  }

  const handleEdit = (product) => {
    setSelectedProduct(product)
    setShowForm(true)
  }

  const handleSave = () => {
    fetchProducts()
    setShowForm(false)
    setSelectedProduct(null)
  }

  return (
    <div>
      <button onClick={() => setShowForm(true)} className="mb-4 py-2 px-4 bg-green-600 text-white">
        Add Product
      </button>
      {showForm && (
        <ProductForm token={token} product={selectedProduct} onSave={handleSave} />
      )}
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-2 p-2 border rounded">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                {product.subproducts && (
                  <div className="mt-4">
                    <h4 className="text-md font-bold">Subproducts:</h4>
                    <ul className="ml-4">
                      {product.subproducts.map(subproduct => (
                        <li key={subproduct.id}>
                          <p>{subproduct.name} - ${subproduct.price.toFixed(2)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(product)} className="py-1 px-2 bg-yellow-600 text-white">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="py-1 px-2 bg-red-600 text-white">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
