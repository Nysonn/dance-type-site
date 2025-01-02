import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

// Component imports will go here once we create them
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import MusicSection from './components/MusicSection/MusicSection'
import TourDates from './components/TourDates/TourDates'
import Footer from './components/Footer/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useState(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="app"
    >
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <Header />
          <main className="main">
            <HeroSection />
            <MusicSection />
            <TourDates />
          </main>
          <Footer />
        </>
      )}
    </motion.div>
  )
}

export default App


