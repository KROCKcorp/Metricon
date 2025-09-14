import {ReactTyped} from 'react-typed'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black to-indigo-400">
      <div className="max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4 ">
        <p className="md:text-7xl sm:text-5xl text-3xl font-bold">Unlock the Power of Your Data</p>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-2xl text-xl font-bold">Fast, Flexible, Financing for</p>
          <ReactTyped
            className="md:text-4xl sm:text-2xl text-xl font-bold pl-2 text-indigo-400"
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
        <p className="text-md pt-2 sm:text-xl sm:pt-4 font-bold text-indigo-200 ">
          Transform complex information into clear insights with our intelligent analytics dashboard. Make faster
          decisions, spot hidden trends, and drive growth — all from one powerful platform.
        </p>
        <button className="bg-indigo-400 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </section>
  )
}
