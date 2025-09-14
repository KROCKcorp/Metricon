import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full py-16 px-10">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8 mx-auto">
        <div>
          <h6 className="text-3xl font-bold text-indigo-400">Metricon.</h6>
          <p className="text-justify">
            Unauthorized duplication or distribution of this material is prohibited. Data provided through this platform
            is for informational purposes only and subject to our Terms of Service and Privacy Policy. InsightSphere
            Analytics is committed to protecting your data and delivering accurate insights.
          </p>
          <div className="flex md:w-[75%] my-6 justify-between">
            <FaDribbbleSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-around mt-8">
          <div>
            <h6 className="font-medium text-lg text-indigo-200">Solutions</h6>
            <ul className="mt-2">
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-lg text-indigo-200">Support</h6>
            <ul className="mt-2">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-lg text-indigo-200">Company</h6>
            <ul className="mt-2">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-lg text-indigo-200">Legal</h6>
            <ul className="mt-2">
              <li>Claim</li>
              <li>Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
