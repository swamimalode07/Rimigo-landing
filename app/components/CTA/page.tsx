import React from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const CTA = () => {
    const stats = [
        { count: 242, label: 'Vacations' },
        { count: 242, label: 'Vacations' },
        { count: 242, label: 'Vacations' },
        { count: 242, label: 'Vacations' },
    ];
    return (
    <div>
    <section className="w-full px-4 py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[25px] border-4 border-[#7011F6] bg-white p-8 md:p-12 lg:p-12">

            <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-3xl lg:text-5xl">
                Ready for your best vacation yet?
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-md md:mt-6">
                Submit your travel details below and get personalized vacation options designed just for you. Expert assistance awaits at every step.
            </p>

            <button className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#7011F6] pl-4 pr-2 py-1.5 text-base font-semibold text-white transition-all duration-200 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 md:mt-8">
                Plan my Trip
                <span className="rounded-full bg-white p-1 transition-transform duration-300">
                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 text-black transition-transform duration-300 group-hover:rotate-45" />
                </span>
            </button>

            </div>

            <div className="mt-12 md:mt-6">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-0">
    
                <div className="flex-shrink-0 text-center">
                <p className="text-5xl font-bold text-gray-900 md:text-2xl">242</p>
                <p className="mt-1 text-base font-normal text-gray-700 md:text-lg">Vacations</p>
                </div>
                <div className="hidden h-16 w-px bg-gray-300 md:mx-12 md:block lg:mx-16" />

              <div className="flex-shrink-0 text-center">
                <p className="text-5xl font-bold text-gray-900 md:text-2xl">242</p>
                <p className="mt-1 text-base font-normal text-gray-700 md:text-lg">Vacations</p>
              </div>

              <div className="hidden h-16 w-px bg-gray-300 md:mx-12 md:block lg:mx-16" />


              <div className="flex-shrink-0 text-center">
                <p className="text-5xl font-bold text-gray-900 md:text-2xl">242</p>
                <p className="mt-1 text-base font-normal text-gray-700 md:text-lg">Vacations</p>
              </div>

              <div className="hidden h-16 w-px bg-gray-300 md:mx-12 md:block lg:mx-16" />

              <div className="flex-shrink-0 text-center">
                <p className="text-5xl font-bold text-gray-900 md:text-2xl">242</p>
                <p className="mt-1 text-base font-normal text-gray-700 md:text-lg">Vacations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default CTA