import './App.css';

import Container from '@mui/material/Container';

import Footer from './homepage/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Location from './components/Location';
import Services from './homepage/Services';

import NavBar from './homepage/NavBar';

import ImageHeader from './homepage/ImageHeader';

function App() {
  return (
    <div id='homepage'>
      <Container id="container">
        <NavBar />
        <ImageHeader />
        <div id='homepage-location'>
          <Location />
        </div>
        <h3>Services</h3>
        <Services />
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
