import './ImageHeader.css'

import garden from '../images/Homepage-Garden.jpg'
import logo from '../images/Davids-Gardening-Logo.svg'

export default function ImageHeader() {
    return (
        <>
            <div className='image-header-background'>
                <img src={garden} alt="" />
            </div>
            <img className='image-header-logo' src={logo} alt="" />
        </>
    )
}