import './NavBar.css'
import { Toolbar } from '@mui/material/'

import logo from '../images/Davids-Gardening-Logo.svg'
import { Email, Phone } from '@mui/icons-material'

export default function NavBar() {
    return (
        <div className='NewAppBar'>
            <Toolbar >
                <div className='NavBarLogo'>
                    <img src={logo} alt="" />
                </div>
                <div className='NavBarContact'>
                    <Phone color='success' style={{ color: '#649c2c' }} className='NavBarPhone' />
                    <p className='NavBarPhoneNumber'>07955108558</p>
                    <br />
                    <Email color='success' style={{ color: '#649c2c' }} className='NavBarEmail' />
                    <p className='NavBarEmailAddress'>DavidsGardeningServicesMedway@gmail.com</p>
                </div>
            </Toolbar>
        </div>
    )
}