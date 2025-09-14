import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(prev => !prev)
  }

  return (
    <nav className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-indigo-400">Metricon.</h1>
      <ul className="hidden md:flex">
        <li className="p-3 hover:text-shadow-md hover:text-shadow-indigo-400 transition-all ease-in-out duration-200">
          Home
        </li>
        <li className="p-3 hover:text-shadow-md hover:text-shadow-indigo-400 transition-all ease-in-out duration-200">
          Company
        </li>
        <li className="p-3 hover:text-shadow-md hover:text-shadow-indigo-400 transition-all ease-in-out duration-200">
          Resources
        </li>
        <li className="p-3 hover:text-shadow-md hover:text-shadow-indigo-400 transition-all ease-in-out duration-200">
          About
        </li>
        <li className="p-3 hover:text-shadow-md hover:text-shadow-indigo-400 transition-all ease-in-out duration-200">
          Contact
        </li>
      </ul>

      <div className="md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full bg-indigo-950 ease-in-out duration-300'
            : 'fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-300'
        }
      >
        <h1 className="w-full text-3xl font-bold text-indigo-400 mx-4 mt-7">Metricon.</h1>
        <ul className="uppercase p-4 text-indigo-300">
          <li className="p-4 border-b border-indigo-600">Home</li>
          <li className="p-4 border-b border-indigo-600">Company</li>
          <li className="p-4 border-b border-indigo-600">Resources</li>
          <li className="p-4 border-b border-indigo-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </nav>
  )
}
