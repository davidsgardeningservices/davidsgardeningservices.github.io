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
    <div>
      <Container id="container" maxWidth={false} disableGutters>
        <ImageHeader />
        <Services />
        <div id='homepage-footer'>
          <Footer />
        </div>
      </Container>
    </div>
  );
}

export default App;
