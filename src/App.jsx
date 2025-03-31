import React from 'react'
import { useEffect } from 'react'
import "./App.css"
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import { useLenis } from './hook/UseLenis'
import Security from './sections/Security'
import FAQ from './sections/FAQ'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Community from './sections/Community'

const App = () => {

  useLenis();

  useEffect(() => {
    setTimeout(() => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    },100);
    
  }, []);


  return (
    <>
    <main className='overflow-x-hidden'>
      <Header />
      <Hero />
      <Features/>
      <Community/>
      <Security/>
      <FAQ/>
      <Subscribe/>
      <Footer/>
    </main>
    </>
  )
}

export default App