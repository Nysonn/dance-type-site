// Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-background">
        <div className="contact-overlay">
          <div className="contact-content">
            <h1 className="contact-title">CONTACT</h1>
            <div className="contact-section">
              <h2 className="contact-heading">BOOKINGS</h2>
              <div className="contact-info">
                <p>THE WORLD (EX NORTH AMERICA)</p>
                <a href="mailto:panos@connectedartists.com">panos@connectedartists.com</a>
                <a href="mailto:leon@connectedartists.com">leon@connectedartists.com</a>
              </div>
              <div className="contact-info">
                <p>NORTH AMERICA</p>
                <a href="mailto:ferry.rais@caa.com">ferry.rais@caa.com</a>
                <a href="mailto:phil.quist@caa.com">phil.quist@caa.com</a>
              </div>
            </div>

            <div className="contact-section">
              <h2 className="contact-heading">MANAGEMENT / LABEL</h2>
              <a href="mailto:kate@cyb3rpvnk.com">kate@cyb3rpvnk.com</a>
            </div>

            <div className="contact-section">
              <h2 className="contact-heading">TOUR & PRODUCTION MANAGER</h2>
              <a href="mailto:wisa@cyb3rpvnk.com">wisa@cyb3rpvnk.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
