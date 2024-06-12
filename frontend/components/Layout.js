import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <Link href="/">
          <a className="text-white mr-4">Home</a>
        </Link>
        <Link href="/register">
          <a className="text-white mr-4">Register</a>
        </Link>
        <Link href="/login">
          <a className="text-white mr-4">Login</a>
        </Link>
        <Link href="/products">
          <a className="text-white mr-4">Products</a>
        </Link>
        <Link href="/quotes">
          <a className="text-white">Quotes</a>
        </Link>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  )
}
