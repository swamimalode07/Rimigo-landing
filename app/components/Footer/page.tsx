import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-200 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Refunds</a></li>
            </ul>
        </div>

        <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm space-y-1">
            <span className="block">Viareel Travel Private Limited</span>
            <span className="block">contact@rimigo.com</span>
            <span className="block">CIN: U73100KA2024PTC192855</span>
            <span className="block">GST: 29AAKCV4267D1Z0</span>
            </p>
        </div>

        <div>
            <h3 className="font-semibold mb-4">Office</h3>
            <p className="text-sm">
            Vaishnavi Signature<br />
            Marathahalli-Sarjapur Outer Ring Road<br />
            Bangalore, Karnataka-560103<br />
            India
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-300">
        <p className="text-sm">© Rimigo. All rights reserved. 2025</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer