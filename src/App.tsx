import './App.css';
import logo from './images/Davids-Gardening-Logo.svg'
import garden from './images/Homepage-Garden.jpg'
import Container from '@mui/material/Container';

import ContactInformation from './components/ContactInformation';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Location from './components/Location';
import Services from './components/Services';
import WhyUs from './components/WhyUs';

import NewNavBar from './New/NavBar';

function App() {
  return (
    <div id='homepage'>
      <NewNavBar />
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
        <div id='homepage-services'>
          <Services />
        </div>
        <NavBar />
        <div id='homepage-location'>
          <Location />
        </div>
        <NavBar />
        <div id='homepage-why-us'>
          <WhyUs />
        </div>
        <NavBar />
        <div id='homepage-testimonial'>
          <Testimonials />
        </div>
        <NavBar />
        <div id='homepage-footer'>
          <Footer />
        </div>
        <NavBar />
      </Container>
    </div>
  );
}

export default App;
