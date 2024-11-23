import './Services.css'

import grass from '../images/Grass.jpg'

export default function Services() {
    return (
        <div className='homepage-services'>
            <div className='services-text'>
                <h3>Services</h3>
                <p>Currently, we offer the following services: </p>
                <ul>
                    <li>Full garden maintenance</li>
                    <li>Hedge planting, pruning, and cutting</li>
                    <li>Tree planting, pruning, and cutting</li>
                    <li>Driveway pressure washing </li>
                    <li>Patio pressure washing</li>
                    <li>Gutter clearance</li>
                </ul>
                <p>Contact us for a free quote</p>
            </div>
            <img className='services-image' src={grass} alt="" />

        </div >
    )
}