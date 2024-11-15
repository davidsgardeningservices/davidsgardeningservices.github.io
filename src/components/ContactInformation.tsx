import './ContactInformation.css'

import IconButton from '@mui/material/IconButton';
import { Email, Phone, Facebook, Instagram, X } from '@mui/icons-material';

export default function ContactInformation() {
    return (
        <div id='contact-information'>
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