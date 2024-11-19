import './NavBar.css'
import { AppBar, Container, Toolbar } from '@mui/material/'

import logo from '../images/Davids-Gardening-Logo.svg'

export default function NewNavBar() {
    return (
        <Container className='NewNavBarContainer'>
            <AppBar className='NewAppBar'>
                <Toolbar>
                    <div className='NewNavBarBusinessName'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='NewNavBarContact'>
                        Tel: 07955108558
                        <br />
                        Email: DavidsGardeningServicesMedway@gmail.com
                    </div>
                </Toolbar>
            </AppBar>
        </Container>
    )
}