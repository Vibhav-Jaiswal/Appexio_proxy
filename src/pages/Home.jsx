import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Locations from '../components/Locations'
import Customers from '../components/Customers'
import Resources from '../components/Resources'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
     <Hero />
     <About />
     <Locations />
     <Customers />
     <Resources />
     <Services />
    </>
  )
}

export default Home