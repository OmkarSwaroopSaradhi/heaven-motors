// src/AppContent.js
import React, { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import car1 from './images/car1.jpg';
import car2 from './images/car2.jpg';
import car3 from './images/car3.jpg';
import car4 from './images/car4.jpg';
import car5 from './images/car5.jpg';
import car6 from './images/car6.jpg';
import logo from './images/logo.png';
import { Link } from 'react-scroll';

const cars = [
  // Car objects as before
];

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="App">
        <nav className="navbar">
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="logo-link">
            <img src={logo} alt="Heaven Motors Logo" className="logo" />
          </Link>
          <div className="nav-links">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </Link>
            <Link
              to="why-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={activeSection === 'why-us' ? 'active' : ''}
            >
              Why Us
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="bg-video-container" id="home" data-aos="fade-in">
          <video autoPlay muted loop className="bg-video">
            <source src={process.env.PUBLIC_URL + '/background-video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <header className="App-header">
            <h1 className="app-title">Heaven Motors</h1>
          </header>
        </div>

        <section className="section" id="why-us" data-aos="fade-up">
          <h2>Why Us</h2>
          <p>Why Choose Heaven Motors for Your Luxury Car Rental Needs?</p>
          <ul className="content-list">
            {/* Why Us list items */}
          </ul>
        </section>

        <section className="section" id="our-fleet" data-aos="fade-up">
          <h2>Our Exquisite Fleet</h2>
          <div className="car-list">
            {cars.map((car, index) => (
              <Parallax
                key={car.id}
                className="car-item"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
                data-aos="fade-up"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  style={{ transition: `opacity 0.5s ease-in-out`, opacity: 1, transitionDelay: `${index * 0.1}s` }}
                  className="car-image"
                />
                <div className="car-details">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                  <a href={`/book/${car.id}`} className="book-now-button">
                    Book Now
                  </a>
                </div>
              </Parallax>
            ))}
          </div>
        </section>

        <section className="section" id="about" data-aos="fade-up">
          <h2>About</h2>
          <p><strong>Welcome to Heaven Motors</strong>, the premier destination for luxury car rentals. At Heaven Motors, we believe in delivering not just a car, but an experience that exudes elegance, sophistication, and unparalleled performance. Our fleet is meticulously curated to include the finest luxury vehicles from the world's most prestigious brands, ensuring that our clients drive away in nothing short of excellence.</p>
          <p><strong>Our Mission:</strong> Our mission is to provide an exceptional car rental experience that combines convenience, style, and top-notch customer service. Whether it's for a special occasion, a business trip, or simply a desire to indulge in the ultimate driving experience, Heaven Motors is dedicated to making every journey memorable.</p>
        </section>

        <section className="section" id="contact" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Get in touch with us for bookings or inquiries.</p>
          <form className="contact-form">
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Heaven Motors. All rights reserved.</p>
        </footer>
      </div>
    </ParallaxProvider>
  );
}

export default AppContent;
