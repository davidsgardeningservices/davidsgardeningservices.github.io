import './App.css';
import logo from './images/Davids-Gardening-Logo.svg'
import garden from './images/Homepage-Garden.jpg'
import Container from '@mui/material/Container';

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
      <Container id="container">
        <NewNavBar />
        <div className='homepage-picture'>
          <img src={garden} alt="" />
          <p className='homepage-picture-header'>David's Gardening Services</p>
          <p className='homepage-picture-text'>Gardening in Medway</p>
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
        <div id='homepage-footer'>
          <Footer />
        </div>
      </Container>
    </div>
  );
}

export default App;
