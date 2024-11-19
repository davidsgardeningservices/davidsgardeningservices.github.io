import './NavBar.css'
import { Container, Toolbar } from '@mui/material/'

import logo from '../images/Davids-Gardening-Logo.svg'

export default function NewNavBar() {
    return (
        <Container className='NewNavBarContainer'>
            <div className='NewAppBar'>
                <Toolbar>
                    <div className='NewNavBarBusinessName'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='NewNavBarContact'>
                        Tel: 07955108558
                        <br />
                        <br />
                        Email: DavidsGardeningServicesMedway@gmail.com
                    </div>
                </Toolbar>
            </div>
        </Container>
    )
}