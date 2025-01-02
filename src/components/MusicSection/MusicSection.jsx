import { motion } from 'framer-motion'
import './MusicSection.css'

const releases = [
  {
    id: 1,
    title: "Latest Single",
    image: "/path-to-album-cover.jpg",
    streamLink: "#"
  },
  // Add more releases as needed
]

function MusicSection() {
  return (
    <section className="music" id="music">
      <div className="music__container">
        <h2 className="music__title">Latest Music</h2>
        <div className="music__grid">
          {releases.map((release, index) => (
            <motion.div
              key={release.id}
              className="music__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="music__card-image">
                <img src={release.image} alt={release.title} />
                <div className="music__card-overlay">
                  <a href={release.streamLink} className="music__card-play">
                    Stream Now
                  </a>
                </div>
              </div>
              <h3 className="music__card-title">{release.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MusicSection
