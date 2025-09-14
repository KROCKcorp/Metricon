import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Team from '../assets/team.png'

export default function Cards() {
  return (
    <section className="w-full py-20 px-10 bg-indigo-400">
      <h2 className="text-center text-4xl font-bold text-black">Choose the plan that suits your company's needs</h2>
      <div className="mt-20 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full bg-indigo-200 rounded-lg shadow-lg py-4 px-4 hover:scale-105 duration-200 cursor-pointer text-center">
          <img className="w-20 mx-auto" src={Single} alt="single" />
          <h4 className="text-2xl font-bold text-indigo-900">Single User</h4>
          <p className="text-center text-4xl font-bold text-indigo-400 py-4">$149</p>
          <div className="text-indigo-900 font-medium">
            <p>500 GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2 GB</p>
          </div>
          <button className="bg-indigo-400 w-[200px] rounded-md font-bold mx-auto mt-8 py-3 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full bg-indigo-200 rounded-lg shadow-lg py-4 px-4 hover:scale-105 duration-200 cursor-pointer text-center">
          <img className="w-20 mx-auto" src={Double} alt="double" />
          <h4 className="text-2xl font-bold text-indigo-900">Partnership</h4>
          <p className="text-center text-4xl font-bold text-indigo-400 py-4">$199</p>
          <div className="text-indigo-900 font-medium">
            <p>1 TB Storage</p>
            <p>3 Granted Users</p>
            <p>Send up to 10 GB</p>
          </div>
          <button className="bg-indigo-400 w-[200px] rounded-md font-bold mx-auto mt-8 py-3 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full bg-indigo-200 rounded-lg shadow-lg py-4 px-4 hover:scale-105 duration-200 cursor-pointer text-center">
          <img className="w-20 mx-auto" src={Team} alt="team" />
          <h4 className="text-2xl font-bold text-indigo-900">Team</h4>
          <p className="text-center text-4xl font-bold text-indigo-400 py-4">$299</p>
          <div className="text-indigo-900 font-medium">
            <p>5 TB Storage</p>
            <p>10 Granted Users</p>
            <p>Send up to 20 GB</p>
          </div>
          <button className="bg-indigo-400 w-[200px] rounded-md font-bold mx-auto mt-8 py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </section>
  )
}
