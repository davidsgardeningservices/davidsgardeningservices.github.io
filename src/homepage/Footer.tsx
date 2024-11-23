import './Footer.css'
import IconButton from '@mui/material/IconButton';
import { Facebook, Instagram, X } from '@mui/icons-material';

export default function Footer() {
    return (
        <div>
            <div id='footer'>
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
                <div id='copyright'>
                    &copy; Dr J. Guscott 2024
                </div>
            </ div>
        </div>
    )
}