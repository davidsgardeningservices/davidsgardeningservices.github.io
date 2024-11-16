import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from './Testimonials';

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
        dots: true,
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id='testimonial-carousel'>
            <Slider {...settings}>{testimonials.map(setTestimonialText)}</Slider>
        </div>

    );
}