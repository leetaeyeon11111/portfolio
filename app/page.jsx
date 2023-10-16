import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100">
        <h1 className="text-4xl mb-10 mt-6 text-center font-bold">
          Taeyeon Lee Portfolio
        </h1>

        <div className="mb-4 bg-white p-4 m-4 rounded-lg hover:bg-gray-300">
          <Link
            href="/portfolio1"
            className="text-xl text-green-400 font-bold hover:text-blue-300"
          >
            Portfolio1- WebDemo
          </Link>

          <p className="mb-2">실습 과제 1 </p>
        </div>

        <div className="mb-4 bg-white p-4 m-4 rounded-lg hover:bg-gray-300">
          <Link
            href="/portfolio2"
            className="text-xl text-green-400 font-bold hover:text-blue-300"
          >
            Portfolio2- clerk-auth
          </Link>
          <p className="mb-2"> 실습 과제 2 </p>
        </div>

        <div className="mb-4 bg-white p-4 m-4 rounded-lg hover:bg-gray-300">
          <Link
            href="/portfolio3"
            className="text-xl text-green-400 font-bold hover:text-blue-300"
          >
            Portfolio3- middleWeb
          </Link>
          <p className="mb-2"> 웹사이트 </p>
        </div>

        <div className="mb-4 bg-white p-4 m-4 rounded-lg hover:bg-gray-300">
          <Link
            href="/portfolio4"
            className="text-xl text-green-400 font-bold hover:text-blue-300"
          >
            Portfolio4- dapara-shopping
          </Link>
          <p className="mb-2"> 실습 과제 3</p>
        </div>

        <div className="mb-4 bg-gray-300 p-4 m-4 rounded-lg hover:bg-gray-500">
          <Link
            href="https://github.com/leetaeyeon11111"
            className="text-xl text-black font-bold
          hover:text-blue-300"
          >
            leetaeyeon11111 GitHub page
          </Link>
        </div>
      </div>
    </>
  )
}
