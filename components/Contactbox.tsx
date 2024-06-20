import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaMobileAlt, FaMailBulk } from 'react-icons/fa';
import Typography from './Typography';
import Link from 'next/link';
import styles from './styles/Contactbox.module.css'
import React from 'react';


type contactData = {
    platform: string,
    link: string,
}

interface ContactboxProps {
    contacts: contactData[];
    phone?: string;
    email?: string;
}

const getIcon = (platform: string) => {
    switch (platform) {
        case 'Facebook':
            return <FaFacebook className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'32px'} />
        case 'Instagram':
            return <FaInstagram className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'32px'} />
        case 'Twitter':
            return <FaTwitter className={styles.contactbox}  color='var(--nxp-primary-color)' fontSize={'32px'} />
        case 'Github':
            return <FaGithub className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'32px'} />
        case 'Linkedin':
            return <FaLinkedin  className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'32px'} />
        default:
            return <FaFacebook className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'32px'} />
    }
}


const Contactbox = ({ contacts, phone, email }: ContactboxProps) => {
    return (
        <div style={{ padding: '32px' }}>
            {
                contacts.map((contact, index) => {
                    return (
                        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                            {getIcon(contact.platform)}
                            <Link href={contact.link} style={{ textDecoration: 'none', color: 'var(--nxp-background-color)', margin: '0.8rem', marginLeft: '3rem' }}>
                                <li style={{ listStyle: 'none', color : 'var(--nxp-primary-color)', fontSize : '14px'  }}>{contact.platform}</li>
                            </Link>
                        </div>
                    )
                })
            }
            {phone ?
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <FaMobileAlt className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'32px'} />
                    <Typography type='light' style={{ margin: '0.8rem', marginLeft: '3rem', color : 'var(--nxp-primary-color)', fontSize : '14px' }}>{phone}</Typography>
                </div> : null
            }
            {
                email ?
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FaMailBulk className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'32px'} />
                        <div style={{overflow : 'auto'}}> 
                        <Typography type='light' style={{ margin: '0.8rem', marginLeft: '3rem', color : 'var(--nxp-primary-color)', fontSize : '14px'  }}>{email}</Typography>

                        </div>

                    </div> : null
            }

        </div>
    );
}

export default Contactbox;