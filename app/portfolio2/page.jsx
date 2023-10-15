import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mt-4 text-center mb-4 font-bold">Portfolio2</h1>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://cleck-auth-ufpa.vercel.app/"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          Portfolio2 cleck-auth
        </Link>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/leetaeyeon11111/cleck-auth"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          leetaeyeon11111 cleck-auth GitHub site
        </Link>
        <p className="mb-2"> https://github.com/leetaeyeon11111/cleck-auth </p>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="/pagee"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          Back to Original Page
        </Link>
        <p className="mb-2"> </p>
      </div>
    </>
  )
}
