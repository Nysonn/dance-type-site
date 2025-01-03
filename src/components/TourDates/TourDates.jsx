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
  {
    id: 2,
    date: "Apr 5, 2024",
    venue: "Coachella Valley Music and Arts Festival",
    location: "Indio, CA",
    ticketLink: "#"
  },
  {
    id: 3,
    date: "May 20, 2024",
    venue: "Tomorrowland Winter",
    location: "Alpe d'Huez, France",
    ticketLink: "#"
  },
  {
    id: 4,
    date: "Jun 8, 2024",
    venue: "Electric Daisy Carnival",
    location: "Las Vegas, NV",
    ticketLink: "#"
  },
  {
    id: 5,
    date: "Jul 14, 2024",
    venue: "Creamfields",
    location: "Daresbury, UK",
    ticketLink: "#"
  },
  {
    id: 6,
    date: "Aug 3, 2024",
    venue: "Lollapalooza",
    location: "Chicago, IL",
    ticketLink: "#"
  },
  {
    id: 7,
    date: "Sep 10, 2024",
    venue: "Electric Zoo",
    location: "New York, NY",
    ticketLink: "#"
  },
  {
    id: 8,
    date: "Oct 7, 2024",
    venue: "Amsterdam Dance Event",
    location: "Amsterdam, Netherlands",
    ticketLink: "#"
  },
  {
    id: 9,
    date: "Nov 11, 2024",
    venue: "Day Zero Festival",
    location: "Tulum, Mexico",
    ticketLink: "#"
  },
  {
    id: 10,
    date: "Dec 31, 2024",
    venue: "NYE Countdown Festival",
    location: "Sydney, Australia",
    ticketLink: "#"
  }
];

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
