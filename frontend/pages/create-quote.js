import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CreateQuote() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)

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

  const handleProductChange = (e) => {
    const productId = e.target.value
    const product = products.find((product) => product.id === parseInt(productId))
    setSelectedProduct(product)
    setTotalPrice(product.price * quantity)
  }

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value
    setQuantity(newQuantity)
    setTotalPrice(selectedProduct.price * newQuantity)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/quotes', {
        product_id: selectedProduct.id,
        quantity,
        total_price: totalPrice,
      })
      alert('Quote created successfully!')
    } catch (error) {
      console.error('Error creating quote:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Create Quote</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Product</label>
          <select onChange={handleProductChange} className="w-full px-3 py-2 border rounded">
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full px-3 py-2 border rounded"
            min="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Total Price</label>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Create Quote
        </button>
      </form>
    </div>
  )
}
