import './App.css';

import Container from '@mui/material/Container';

import LocationBar from './components/LocationBar';
import Footer from './homepage/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Location from './components/Location';
import Services from './homepage/Services';
import WhyUs from './components/WhyUs';

import NavBar from './homepage/NavBar';

import ImageHeader from './homepage/ImageHeader';

function App() {
  return (
    <div id='homepage'>
      <Container id="container">
        <NavBar />
        <ImageHeader />
        <h3>Services</h3>
        <Services />
        <div id='homepage-location'>
          <Location />
        </div>
        <div id='homepage-why-us'>
          <WhyUs />
        </div>
        <LocationBar />
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
