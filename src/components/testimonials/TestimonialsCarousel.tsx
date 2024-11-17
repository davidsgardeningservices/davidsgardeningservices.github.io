import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from './Testimonials';
import './TestimonialCarousel.css'
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

interface iTestimonials {
    key: number
    name: string,
    message: string
}

function TestimonialCard(testimonials: iTestimonials) {
    return (
        <div id='testimonial-card'>
            <div id='testimonial-card-text'>
                <p>
                    <span>&ldquo;</span>
                    {testimonials.message}
                    <span>&rdquo;</span>
                </p>
                <p>
                    {testimonials.name}
                </p>
            </div>
        </div>
    )
}

function setTestimonialText(testimonials: iTestimonials) {
    return (
        <TestimonialCard
            key={testimonials.key}
            name={testimonials.name}
            message={testimonials.message}
        />
    )
}

export default function TestimonialCarousel() {
    const settings = {
        dots: false,
        arrows: true,
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <ArrowCircleRight sx={{ color: '#649c2c', '&:hover': { color: '#649c2c' } }} />,
        prevArrow: <ArrowCircleLeft sx={{ color: '#649c2c', '&:hover': { color: '#649c2c' } }} />
    };
    return (
        <div id='testimonial-carousel'>
            <Slider {...settings}>{testimonials.map(setTestimonialText)}</Slider>
        </div>

    );
}