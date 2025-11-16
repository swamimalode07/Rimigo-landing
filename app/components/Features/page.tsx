import React from 'react'
import PreferencesSection from '@/components/landing/FeaturesComponent'

const Features = () => {
    return (
    <div>
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