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
import Swal from 'sweetalert2';

const handleBookNowClick = () => {
  Swal.fire({
    title: 'Booking Confirmed! Vroom💨',
    text: 'Thank you for booking with us. We will contact you shortly.',
    icon: 'success',
    confirmButtonText: 'OK',
  });
};


const cars = [
  {
    id: 1,
    name: 'Porsche 911',
    image: car1,
    description: 'Experience the thrill of driving the iconic Porsche 911. Known for its distinctive design and exceptional performance, this luxury sports car is available for rent to elevate your driving experience. Whether for a special occasion or just to enjoy a high-performance ride, the Porsche 911 is the perfect choice.',
  },
  {
    id: 2,
    name: 'Nissan GT-R Skyline',
    image: car2,
    description: 'Rent the legendary Nissan GT-R Skyline, renowned for its powerful twin-turbo V6 engine and precise handling. Perfect for enthusiasts and thrill-seekers, the GT-R Skyline delivers an unforgettable driving experience with advanced technology and racing heritage.',
  },
  {
    id: 3,
    name: 'BMW M8 Coupe',
    image: car3,
    description: 'The BMW M8 Coupe is available for rent, offering a blend of luxury and high performance. With its twin-turbo V8 engine and refined handling, the M8 Coupe ensures a premium driving experience, making it ideal for business trips, weddings, or weekend getaways.',
  },
  {
    id: 4,
    name: 'Ferrari 458 Spider',
    image: car4,
    description: 'Indulge in the ultimate driving experience with the Ferrari 458 Spider. This stunning convertible sports car, equipped with a powerful V8 engine, is perfect for open-air excitement and dynamic handling. Rent it for a special event or a luxurious drive.',
  },
  {
    id: 5,
    name: 'Lamborghini Aventador',
    image: car5,
    description: 'Rent the Lamborghini Aventador for an unparalleled driving experience. With its roaring V12 engine and striking design, the Aventador offers blistering performance and dynamic handling. Perfect for making a statement at any event or just enjoying the thrill of a supercar.',
  },
  {
    id: 6,
    name: 'Vintage Range Rover',
    image: car6,
    description: 'Step back in time and enjoy the classic elegance of a vintage Range Rover. Known for its rugged off-road capability and refined design, this luxury SUV is perfect for those looking to combine nostalgia with adventure. Rent it for a unique and stylish ride.',
  },
];

const carRates = {
  1: { hourRate: 1000, dayRate: 8000 },
  2: { hourRate: 1200, dayRate: 9000 },
  3: { hourRate: 1500, dayRate: 10000 },
  4: { hourRate: 1800, dayRate: 12000 },
  5: { hourRate: 2500, dayRate: 15000 },
  6: { hourRate: 2000, dayRate: 13000 },
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headingStyle = {
    transform: `scale(${Math.max(1 - scrollPosition / 500, 0)})`,
    opacity: Math.max(1 - scrollPosition / 500, 0),
  };

  const handleBookNow = (carId) => {
    setSelectedCar(carId);
  };

  const calculatePrice = () => {
    const rates = carRates[selectedCar];
    if (rates) {
      const price = (hours * rates.hourRate) + (days * rates.dayRate);
      setTotalPrice(price);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    calculatePrice();
  };

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
              to="our-fleet"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={activeSection === 'our-fleet' ? 'active' : ''}
            >
              Our Fleet
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
            <h1 className="app-title" style={headingStyle}>Heaven Motors</h1>
          </header>
        </div>

  
  <section className="section" id="why-us" data-aos="fade-up">   
  <h2>Why Us</h2>
  <p>Why Choose Heaven Motors for Your Luxury Car Rental Needs?</p>
  <ul className="content-list">
    <li><strong>Unmatched Fleet of Luxury Vehicles:</strong> Our fleet boasts the latest models from the world’s most prestigious automotive brands. From sleek sports cars to elegant sedans and spacious SUVs, our vehicles are meticulously maintained and equipped with the latest features to ensure a seamless and luxurious ride.</li>
    <li><strong>Exceptional Customer Service:</strong> Our commitment to excellence extends beyond our vehicles. Our team of dedicated professionals is here to provide personalized service, ensuring every detail of your rental experience is tailored to your needs. Whether it's a special occasion or a business trip, we strive to exceed your expectations at every turn.</li>
    <li><strong>Exclusive Amenities and Extras:</strong> We offer a range of premium amenities to enhance your journey. From chauffeur services to bespoke travel itineraries, we go the extra mile to make your experience truly unforgettable. Enjoy complimentary Wi-Fi, luxury refreshments, and more, ensuring a first-class experience from start to finish.</li>
    <li><strong>Convenient and Flexible Rental Options:</strong> Heaven Motors understands the importance of flexibility. We offer convenient booking options, including short-term and long-term rentals, to suit your schedule. Our easy-to-use online reservation system and 24/7 customer support ensure a hassle-free experience.</li>
    <li><strong>Safety and Reliability:</strong> Your safety is our top priority. Our vehicles undergo rigorous inspections and regular maintenance to ensure they meet the highest safety standards. With Heaven Motors, you can drive with confidence, knowing you are in a vehicle that is as reliable as it is luxurious.</li>
    <li><strong>Competitive Pricing:</strong> Luxury doesn’t have to come at an exorbitant price. We offer competitive rates and transparent pricing with no hidden fees. Enjoy the ultimate in luxury and comfort without compromising on value.</li>
    <li><strong>Trusted Reputation:</strong> With years of experience in the luxury car rental industry, Heaven Motors has built a reputation for excellence and trust. Our loyal clientele and glowing reviews are a testament to our unwavering commitment to providing a premium rental experience.</li>
  </ul>
</section>

        <section className="section" id="our-fleet" data-aos="fade-up">
          <h2>Our Exquisite Fleet</h2>
          <div className="car-list">
            {cars.map((car) => (
              <div key={car.id} className="car-item">
                <img
                  src={car.image}
                  alt={car.name}
                  className="car-image"
                />
                <div className="car-details">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                  <button className="book-now-btn" onClick={() => handleBookNow(car.id)}>Book Now</button>
                </div>
              </div>
            ))}
          </div>

          {selectedCar && (
  <div className="booking-form">
    <h2>Book {cars.find(car => car.id === selectedCar)?.name}</h2>
    <form onSubmit={handleFormSubmit}>
      <label>
        Hours:
        <input type="number" value={hours } onChange={(e) => setHours(e.target.value)} min="0" />
      </label>
      <br />
      <label>
        Days:
        <input type="number" value={days } onChange={(e) => setDays(e.target.value)} min="0" />
      </label>
      <br />
      <button type="submit">Calculate Price</button>
    </form>
    {totalPrice > 0 && (
      <div>
        <p>Total Price: ₹{totalPrice}</p>
        <button className="book-now-btn" onClick={handleBookNowClick}>Book Now</button>
      </div>
    )}
  </div>
)}

</section>

          {/* {selectedCar && (
            <div className="booking-form">
              <h2>Book {cars.find(car => car.id === selectedCar)?.name}</h2>
              <form onSubmit={handleFormSubmit}>
                <label>
                  Hours:
                  <input type="number" value={hours } onChange={(e) => setHours(e.target.value)} min="0" />
                </label>
                <br />
                <label>
                  Days:
                  <input type="number" value={days } onChange={(e) => setDays(e.target.value)} min="0" />
                </label>
                <br />
                <button type="submit">Calculate Price</button>
              </form>
              {totalPrice > 0 && <p>Total Price: ₹{totalPrice}</p>}
            </div>
          )} */}
        

        <section className="section" id="about" data-aos="fade-up">
          <h2>About Us</h2>
          <p><strong>Welcome to Heaven Motors</strong>, the premier destination for luxury car rentals. At Heaven Motors, we believe in delivering not just a car, but an experience that exudes elegance, sophistication, and unparalleled performance. Our fleet is meticulously curated to include the finest luxury vehicles from the world's most prestigious brands, ensuring that our clients drive away in nothing short of excellence.</p>
          <p><strong>Our Mission:</strong> Our mission is to provide an exceptional car rental experience that combines convenience, style, and top-notch customer service. Whether it's for a special occasion, a business trip, or a leisurely drive, Heaven Motors is committed to meeting and exceeding your expectations.</p>
          <p><strong>Our Fleet:</strong> From sleek sports cars and powerful SUVs to elegant sedans and rare exotics, our diverse collection is designed to cater to every taste and preference. Each vehicle in our fleet is maintained to the highest standards, ensuring that you experience the ultimate in luxury and performance every time you get behind the wheel.</p>
        </section>

        <section className="section" id="contact" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance with your reservation, please don't hesitate to reach out to us. Our dedicated team is here to help you with any inquiries or special requests.</p>
          <ul className="contact-info">
            <li><strong>Email:</strong> <a href="mailto:info@heavenmotors.com">info@heavenmotors.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1234567890">+1 (123) 456-7890</a></li>
            <li><strong>Address:</strong> 123 Luxury Lane, Suite 100, Hyderabad, Telangana, </li>
          </ul>
          <p>Follow us on social media:</p>
          <div className="social-media">
            <a href="https://facebook.com/heavenmotors" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://instagram.com/heavenmotors" target="_blank" rel="noopener noreferrer">Instagram</a> |
            <a href="https://twitter.com/heavenmotors" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <footer className="App-footer" data-aos="fade-up">
            {/* <p>© 2024 Heaven Motors. All rights reserved.</p> */}
            <p>&copy; 2023 Heaven Motors. All rights reserved.</p>
          <a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a>
          </footer>
        </section>
      </div>
    </ParallaxProvider>
  );
}
export default App;

