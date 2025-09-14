import AnalyticsImg from '../assets/analytics.png'

export default function Analytics() {
  return (
    <section className="w-full bg-indigo-400 pb-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="size-[300px] md:size-[400px] mx-auto" src={AnalyticsImg} alt="analytics" />
        <div className="flex flex-col justify-center">
          <p className="text-black font-bold">DATA ANALYTICS DASHBOARD</p>
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</p>
          <p className="text-justify text-indigo-900">
            The Data Analytics Dashboard provides a centralized view of key performance indicators, trends, and
            real-time insights. It allows users to monitor activity across multiple data sources, transform raw
            information into visual stories, and quickly identify patterns that drive decision-making.
          </p>
          <button className="bg-black w-[200px] rounded-md font-bold my-6 py-3 text-indigo-400">Get Started</button>
        </div>
      </div>
    </section>
  )
}
