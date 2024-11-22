import './App.css';

import Container from '@mui/material/Container';

import NavBar from './components/NavBar';
import Footer from './homepage/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Location from './components/Location';
import Services from './homepage/Services';
import WhyUs from './components/WhyUs';

import NewNavBar from './homepage/NavBar';

import ImageHeader from './homepage/ImageHeader';

function App() {
  return (
    <div id='homepage'>
      <Container id="container">
        <NewNavBar />
        <ImageHeader />
        <Services />
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
