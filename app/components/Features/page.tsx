import React from 'react'
import PreferencesSection from '@/components/landing/FeaturesComponent'

const Features = () => {
    return (
    <div>
         <div className="w-full text-center py-4 px-8">
      <h2 className="text-3xl md:text-5xl font-semibold  mt-8 text-[#7011F6]">
        By your side at every step of the journey
      </h2>

      <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        Stitching together a seamless vacation where your preferences guide everything.
      </p>
    </div>
        <PreferencesSection
            title="Share your preferences"
            subtitle="From flights to activities, capture your preferences in real-time and get personalized options instantly."
            imageSrc="/assets/shareyourpreferences.png"
            imagePosition="right"
        />
        <PreferencesSection
            title="Get handpicked options"
            subtitle="Review shortlisted options curated just for you"
            imageSrc="/assets/handpicked.png"
            imagePosition="left"
        />
        <PreferencesSection
            title="Travel confidently"
            subtitle="Get instant support whenever and wherever you need it."
            imageSrc="/assets/travel.png"
            imagePosition="right"
        />
    </div>
  )
}

export default Features