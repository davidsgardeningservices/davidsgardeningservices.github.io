import './ImageHeader.css'

import garden from '../images/Homepage-Garden.jpg'

import { Button } from '@mui/material';

export default function ImageHeader() {
    return (
        <div className='homepage-picture'>
            <img src={garden} alt="" />
            <p className='homepage-picture-header'>David's Gardening Services
                <br /><span className='homepage-picture-text'>Gardening in Medway</span>
                <br /><Button variant="contained" style={{ backgroundColor: '#649c2c' }}>Contact Us</Button>
            </p>
        </div>
    )
}