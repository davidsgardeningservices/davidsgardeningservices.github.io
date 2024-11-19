import './App.css';
import logo from './images/Davids-Gardening-Logo.svg'
import garden from './images/Homepage-Garden.jpg'
import Container from '@mui/material/Container';

import ContactInformation from './components/ContactInformation';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Location from './components/Location';

function App() {
  return (
    <div id='homepage'>
      <Container id="container">
        <NavBar />
        <div id='logo-homepage'>
          <img src={logo} alt="" />
        </div>
        <NavBar />
        <ContactInformation />
        <div id='homepage-picture'>
          <img src={garden} alt="" />
        </div>
        <h3>Services</h3>
        <NavBar />
        <Location />
        <NavBar />
        <h3>Why Choose Us</h3>
        <NavBar />
        <div id='homepage-testimonial'>
          <Testimonials />
        </div>
        <NavBar />
        <Footer />
        <NavBar />
      </Container>
    </div>
  );
}

export default App;
