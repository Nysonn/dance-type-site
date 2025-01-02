import { motion } from 'framer-motion'
import './TourDates.css'

const tourDates = [
  {
    id: 1,
    date: "Mar 15, 2024",
    venue: "Ultra Music Festival",
    location: "Miami, FL",
    ticketLink: "#"
  },
  // Add more tour dates as needed
]

function TourDates() {
  return (
    <section className="tour" id="tour">
      <div className="tour__container">
        <h2 className="tour__title">Tour Dates</h2>
        <div className="tour__list">
          {tourDates.map((show, index) => (
            <motion.div
              key={show.id}
              className="tour__item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="tour__info">
                <div className="tour__date">{show.date}</div>
                <div className="tour__details">
                  <h3 className="tour__venue">{show.venue}</h3>
                  <p className="tour__location">{show.location}</p>
                </div>
              </div>
              <a href={show.ticketLink} className="tour__button">
                Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourDates
