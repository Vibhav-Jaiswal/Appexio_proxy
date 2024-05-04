import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Locations from '../components/Locations'
import Customers from '../components/Customers'
import Resources from '../components/Resources'

const Home = () => {
  return (
    <>
     <Hero />
     <About />
     <Locations />
     <Customers />
     <Resources />
    </>
  )
}

export default Home