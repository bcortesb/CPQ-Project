import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold">Welcome to the CPQ Project</h1>
        <Link href="/register">
          <a className="text-blue-500">Register</a>
        </Link>
        <Link href="/login">
          <a className="text-blue-500 ml-4">Login</a>
        </Link>
      </div>
    </div>
  )
}
