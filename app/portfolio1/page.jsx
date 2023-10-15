import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mt-4 text-center mb-4 font-bold">Portfolio1</h1>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://web-pg.vercel.app"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          Portfolio1 Webdemo
        </Link>
      </div>

      <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg">
        <Link
          href="https://github.com/leetaeyeon11111/webPG"
          className="text-xl hover:text-blue-300  text-blue-700 font-bold"
        >
          leetaeyeon11111 Webdemo GitHub site
        </Link>
        <p className="mb-2"> https://github.com/leetaeyeon11111/webPG </p>
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
