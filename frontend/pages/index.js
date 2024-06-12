import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the CPQ Project</h1>
        <Link href="/register">
          <a className="text-blue-500 hover:underline">Register</a>
        </Link>
        <span className="mx-2">|</span>
        <Link href="/login">
          <a className="text-blue-500 hover:underline">Login</a>
        </Link>
      </div>
    </div>
  )
}
