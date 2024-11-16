import './ContactInformation.css'

import IconButton from '@mui/material/IconButton';
import { Email, Phone, Facebook, Instagram, X } from '@mui/icons-material';

export default function ContactInformation() {
    return (
        <div id='contact-information'>
            <div id='contact-information-phone'>
                <IconButton>
                    <Phone color='success' />
                </IconButton>
                07955108558
            </div>
            <div id='contact-information-email'>
                <IconButton>
                    <Email color='success' />
                </IconButton>
                DavidsGardeningServicesMedway@gmail.com
            </div>
            <div id='social-media'>
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
        </div>
    )

}