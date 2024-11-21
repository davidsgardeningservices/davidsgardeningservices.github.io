import './Services.css'

import { Grid2 } from '@mui/material';

import hedge from '../images/Hedge.jpg'
import grass from '../images/Grass.jpg'
import patio from '../images/Patio.jpg'
import guttering from '../images/Guttering.jpg'

export default function Services() {
    return (
        <div className='services'>
            <Grid2 container spacing={2}>
                <Grid2 size={3}>
                    <div className='service-card'>
                        <p className='service-heading'>Garden Maintenance</p>
                        <img src={grass} alt="" />
                        <p className='service-text'>Planting, trimming, cutting, organising, and everything in-between.</p>
                    </div>
                </Grid2>
                <Grid2 size={3}>
                    <div className='service-card'>
                        <p className='service-heading'>Hedge and Tree Services</p>
                        <img src={hedge} alt="" />
                        <p className='service-text'>Planting, pruning, cutting, and maintaining.</p>
                    </div>
                </Grid2>
                <Grid2 size={3}>
                    <div className='service-card'>
                        <p className='service-heading'>Pressure Washing</p>
                        <img src={patio} alt="" />
                        <p className='service-text'>Decking, patios, driveways, pavements, and more.</p>
                    </div>
                </Grid2>
                <Grid2 size={3}>
                    <div className='service-card'>
                        <p className='service-heading'>Gutter Clearing</p>
                        <img src={guttering} alt="" />
                        <p className='service-text'>Debris clearance and gutter maintanence.</p>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    )
}