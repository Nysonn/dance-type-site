import { motion } from 'framer-motion'
import './MusicSection.css'
import Artwork1 from '../../../public/images/dibby-duos-pic.jpg'
import Artwork2 from '../../../public/images/wendy-wel.jpg'
import Artwork3 from '../../../public/images/yan-krukau.jpg'

const releases = [
  {
    id: 1,
    title: "Rave Nights",
    image: Artwork1,
    streamLink: "#"
  },
  {
    id: 2,
    title: "Ibiza In Frames",
    image: Artwork2,
    streamLink: "#"
  },
  {
    id: 3,
    title: "Dance With Me",
    image: Artwork3,
    streamLink: "#"
  }
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
