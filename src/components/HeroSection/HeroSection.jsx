import { motion } from 'framer-motion'
import './HeroSection.css'
import HeroSectionVideo from '../../../public/images/dibby-duos-vid.mp4'

function HeroSection() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={HeroSectionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero__overlay"></div>
      <motion.div 
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* <h1 className="hero__title">Dibby Duos</h1>
        <p className="hero__subtitle">Latest Release</p>
        <button className="hero__cta">Listen Now</button> */}
      </motion.div>
    </section>
  )
}

export default HeroSection
