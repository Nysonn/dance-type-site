import { motion } from 'framer-motion'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <motion.div 
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="hero__title">R3HAB</h1>
        <p className="hero__subtitle">Latest Release</p>
        <button className="hero__cta">Listen Now</button>
      </motion.div>
    </section>
  )
}

export default HeroSection
