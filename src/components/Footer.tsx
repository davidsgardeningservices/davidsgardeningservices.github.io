import './Footer.css'
import Container from '@mui/material/Container';
import logo from '../images/Davids-Gardening-Logo.svg'
import IconButton from '@mui/material/IconButton';
import { Facebook, Instagram, X } from '@mui/icons-material';

export default function Footer() {
    return (
        <div>
            <div id='social-media'>
                <IconButton>
                    <Facebook color='success' style={{ color: '#649c2c' }} />
                </IconButton>
                <IconButton>
                    <Instagram color='success' style={{ color: '#649c2c' }} />
                </IconButton>
                <IconButton>
                    <X color='success' style={{ color: '#649c2c' }} />
                </IconButton>
            </div>
            <Container id='footer'>
                <div id='logo'>
                    <img src={logo} alt="" />
                </div>
            </ Container>
            <div id='copyright'>
                &copy; Dr J. Guscott 2024
            </div>
        </div>
    )
}