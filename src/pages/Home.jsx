import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Companies from './Companies'
import PeopleStories from './PeopleStories'
import Mentorship from './Mentorship'

import WhoStartupWallah from './WhoStartupwallah'
import BenefitsSection from './BenefitsSection'
const Home = () => {
  return (
    <div className=''>
      <Hero />
      <AboutUs />
      <Companies />
      <Mentorship />
      <WhoStartupWallah />
      <BenefitsSection/>
      <PeopleStories />
    </div>
  )
}

export default Home
