import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div>
          <Link href="/">
            <a className="mr-4 hover:underline">Home</a>
          </Link>
          <Link href="/products">
            <a className="mr-4 hover:underline">Products</a>
          </Link>
          <Link href="/create-quote">
            <a className="hover:underline">Create Quote</a>
          </Link>
        </div>
        <div>
          <Link href="/register">
            <a className="mr-4 hover:underline">Register</a>
          </Link>
          <Link href="/login">
            <a className="hover:underline">Login</a>
          </Link>
        </div>
      </nav>
      <main className="p-4">
        {children}
      </main>
    </div>
  )
}
