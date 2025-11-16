import { Button } from '@/components/ui/button'
import { ArrowUpRight, MapPin, Calendar, Users, Sliders, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='pt-4 md:pt-12 px-4 md:pl-12 md:pr-12 rounded-lg mt-4 md:mt-8'>
        <div className="min-h-[85vh] flex items-center justify-center p-4 md:p-8 rounded-xl relative overflow-hidden" style={{
      background: 'radial-gradient(ellipse at top, #fff 0%, #fff 54%, #7011F6 100%)'
    }}>
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      <div className="w-full max-w-6xl flex flex-col justify-between h-full relative z-10">

        <div className="text-center mb-8 md:mb-24 mt-32 md:mt-0 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight px-4">
            Your vacation made easy<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>with end-to-end assistance
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto px-4">
            Plan with expert help, save more, and get support anytime—<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>your trip stays smooth from start to finish.
          </p>
          <Button className='bg-[#7011F6] hover:bg-[#7011F6]/90 text-base md:text-lg rounded-full p-5 md:p-6 pr-2'>
            Start your trip
            <span className='rounded-full bg-white p-2'><ArrowUpRight className='h-5 w-5 md:h-6 md:w-6 text-black'/></span>
          </Button>
        </div>

        <div className="hidden lg:block bg-white rounded-[25px] p-3 absolute -bottom-18 left-1/2 transform -translate-x-1/2 shadow-lg w-full max-w-5xl z-20">
          <div className="flex items-center gap-4">
            {/* Where */}
            <div className="flex items-center gap-4 flex-1 border-r border-gray-200 pr-6">
              <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center text-2xl flex-shrink-0">
                <Image src="/assets/house.png" alt="Location Icon" width={40} height={40} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 mb-1">Where</div>
                <input 
                  type="text" 
                  placeholder="Search cities" 
                  className="text-gray-600 bg-transparent outline-none w-full"
                />
              </div>
            </div>

            <div className="flex-1 border-r border-gray-200 pr-6">
              <div className="text-sm font-semibold text-gray-900 mb-1">When</div>
              <button className="text-gray-600 text-left w-full">Add Dates</button>
            </div>

            <div className="flex-1 border-r border-gray-200 pr-6">
              <div className="text-sm font-semibold text-gray-900 mb-1">Guests</div>
              <button className="text-gray-600 text-left w-full">1 Guest</button>
            </div>

            <div className="flex-1 pr-6">
              <div className="text-sm font-semibold text-gray-900 mb-1">Preferences</div>
              <button className="text-gray-600 text-left w-full">Add preferences</button>
            </div>

            <button className="w-14 h-14 bg-[#7011F6] hover:bg-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:hidden bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto mb-12">
          {/* Where Input */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Image src="/assets/house.png" alt="Location Icon" width={30} height={30} />
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="text-gray-900 bg-transparent outline-none w-full placeholder:text-gray-400 font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-gray-100">
            <button className="p-4 flex items-center gap-3 border-r border-gray-100 text-left">
              <Calendar className="w-5 h-5 text-[#7011F6] flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-500">When</div>
                <div className="text-gray-900 font-medium text-sm">Add dates</div>
              </div>
            </button>
            <button className="p-4 flex items-center gap-3 text-left">
              <Users className="w-5 h-5 text-[#7011F6] flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-500">Guests</div>
                <div className="text-gray-900 font-medium text-sm">1 Guest</div>
              </div>
            </button>
          </div>

          <div className="p-4 flex items-center gap-3">
            <button className="flex-1 flex items-center gap-3 text-left">
              <Sliders className="w-5 h-5 text-[#7011F6] flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-500">Preferences</div>
                <div className="text-gray-900 font-medium text-sm">Add preferences</div>
              </div>
            </button>
            <button className="w-12 h-12 bg-[#7011F6] hover:bg-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection