import IconButton from '@mui/material/IconButton';
import { Email, Phone, Facebook, Instagram, X } from '@mui/icons-material';
import './TopSection.css';

function ContactInfo() {
    return (
        <div className='Contact-Info-Top'>
            <IconButton>
                <Phone color='success' />
            </IconButton>
            07955108558
            <br />
            <IconButton>
                <Email color='success' />
            </IconButton>
            DavidsGardeningServicesMedway@gmail.com
            <br />
            <IconButton>
                <Facebook color='success' />
            </IconButton>
            <IconButton>
                <Instagram color='success' />
            </IconButton>
            <IconButton>
                <X color='success' />
            </IconButton>
        </div>
    )
}

export default function TopSection() {
    return (
        <>
            <div className='Top-section'>
                <ContactInfo />
            </div>
        </>
    )
}