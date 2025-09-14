export default function Newsletter() {
  return (
    <section className="w-full py-20 p-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold py-2 text-indigo-400">
            Want tips & tricks to optimize your flow?
          </p>
          <p className="text-lg font-bold">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex items-center">
            <input
              className="p-3 w-full rounded-md bg-indigo-200 text-black placeholder:text-gray-600 
              focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Enter Email"
            />
            <button className="bg-indigo-400 w-[200px] rounded-md font-bold ml-4 my-6 mx-auto py-3 text-black">
              Notify Me
            </button>
          </div>
          <p className="">
            We care about the protection of your data. Read our <span className="text-indigo-400">Privacy Policy</span>
          </p>
        </div>
      </div>
    </section>
  )
}
