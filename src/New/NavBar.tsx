import './NavBar.css'
import { Toolbar } from '@mui/material/'

import logo from '../images/Davids-Gardening-Logo.svg'
import { Email, Phone } from '@mui/icons-material'

export default function NewNavBar() {
    return (
        <div className='NewAppBar'>
            <Toolbar >
                <div className='NewNavBarLogo'>
                    <img src={logo} alt="" />
                </div>
                <div className='NewNavBarContact'>
                    <Phone color='success' style={{ color: '#649c2c' }} className='NewNavBarPhone' />
                    <p className='NewNavBarPhoneNumber'>07955108558</p>
                    <br />
                    <Email color='success' style={{ color: '#649c2c' }} className='NewNavBarEmail' />
                    <p className='NewNavBarEmailAddress'>DavidsGardeningServicesMedway@gmail.com</p>
                </div>
            </Toolbar>
        </div>
    )
}