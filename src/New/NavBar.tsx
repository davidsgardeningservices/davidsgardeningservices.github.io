import './NavBar.css'
import { Container, Toolbar } from '@mui/material/'

import logo from '../images/Davids-Gardening-Logo.svg'
import { Email, Phone } from '@mui/icons-material'

export default function NewNavBar() {
    return (
        <Container className='NewNavBarContainer'>
            <div className='NewAppBar'>
                <Toolbar>
                    <div className='NewNavBarBusinessName'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='NewNavBarContact'>
                        <Phone color='success' className='NewNavBarPhone' />
                        <p className='NewNavBarPhoneNumber'>07955108558</p>
                        <br />
                        <Email color='success' className='NewNavBarEmail' />
                        <p className='NewNavBarEmailAddress'>DavidsGardeningServicesMedway@gmail.com</p>
                    </div>
                </Toolbar>
            </div>
        </Container>
    )
}