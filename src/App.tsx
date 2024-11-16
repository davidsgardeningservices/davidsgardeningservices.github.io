import './App.css';
import logo from './images/Davids-Gardening-Logo.svg'
import garden from './images/Homepage-Garden.jpg'
import Container from '@mui/material/Container';

import ContactInformation from './components/ContactInformation';
import NavBar from './components/NavBar';
import TestimonialCarousel from './components/testimonials/TestimonialsCarousel';

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
        <div id='homepage-testimonial'>
          <TestimonialCarousel />
        </div>
        <div id='copyright'>
          Website designed and built by Dr Joseph Guscott
        </div>
      </Container>
    </div>
  );
}

export default App;
