import './Footer.css'
import Container from '@mui/material/Container';
import logo from '../images/Davids-Gardening-Logo.svg'

export default function Footer() {
    return (
        <div>
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