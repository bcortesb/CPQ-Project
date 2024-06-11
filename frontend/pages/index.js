import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to CPQ System</h1>
      <nav className="mt-4">
        <Link href="/products">
          <a className="text-blue-600">Manage Products</a>
        </Link>
      </nav>
    </div>
  )
}
