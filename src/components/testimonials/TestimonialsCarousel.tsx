import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialData from './TestimonialData';
import './TestimonialsCarousel.css'
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

interface iTestimonials {
    key: number
    name: string,
    message: string
}

function TestimonialCard(testimonialData: iTestimonials) {
    return (
        <div id='testimonial-card'>
            <div id='testimonial-card-text'>
                <p>
                    <span>&ldquo;</span>
                    {testimonialData.message}
                    <span>&rdquo;</span>
                </p>
                <p>
                    {testimonialData.name}
                </p>
            </div>
        </div>
    )
}

function setTestimonialText(testimonialData: iTestimonials) {
    return (
        <TestimonialCard
            key={testimonialData.key}
            name={testimonialData.name}
            message={testimonialData.message}
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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowCircleRight sx={{ color: '#649c2c', '&:hover': { color: '#649c2c' } }} />,
        prevArrow: <ArrowCircleLeft sx={{ color: '#649c2c', '&:hover': { color: '#649c2c' } }} />

    };
    return (
        <div id='testimonial-carousel'>
            <Slider {...settings}>{testimonialData.map(setTestimonialText)}</Slider>
        </div>

    );
}