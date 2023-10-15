import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mt-4 text-center mb-4 font-bold">Portfolio4</h1>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href=""
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          Portfolio3 dapara-shopping
        </Link>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href=""
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          leetaeyeon11111 dapara-shopping GitHub site
        </Link>
        <p className="mb-2"> </p>
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
