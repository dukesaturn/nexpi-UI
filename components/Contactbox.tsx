import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaMobileAlt, FaMailBulk } from 'react-icons/fa';
import Typography from './Typography';
import Link from 'next/link';
import styles from './styles/Contactbox.module.css'

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
            return <FaFacebook className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'2rem'} />
        case 'Instagram':
            return <FaInstagram className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'2rem'} />
        case 'Twitter':
            return <FaTwitter className={styles.contactbox}  color='var(--nxp-primary-color)' fontSize={'2rem'} />
        case 'Github':
            return <FaGithub className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'2rem'} />
        case 'Linkedin':
            return <FaLinkedin  className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'2rem'} />
        default:
            return <FaFacebook className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'2rem'} />
    }
}


const Contactbox = ({ contacts, phone, email }: ContactboxProps) => {
    return (
        <div style={{ padding: '2rem' }}>
            {
                contacts.map((contact, index) => {
                    return (
                        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                            {getIcon(contact.platform)}
                            <Link href={contact.link} style={{ textDecoration: 'none', color: 'var(--nxp-background-color)', margin: '0.8rem', marginLeft: '3rem' }}>
                                <li style={{ listStyle: 'none', color : 'var(--nxp-primary-color)' }}>{contact.link}</li>
                            </Link>
                        </div>
                    )
                })
            }
            {phone ?
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <FaMobileAlt className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'2rem'} />
                    <Typography type='light' style={{ margin: '0.8rem', marginLeft: '3rem', color : 'var(--nxp-primary-color)' }}>{phone}</Typography>
                </div> : null
            }
            {
                email ?
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FaMailBulk className={styles.contactbox} color='var(--nxp-primary-color)' fontSize={'2rem'} />
                        <Typography type='light' style={{ margin: '0.8rem', marginLeft: '3rem', color : 'var(--nxp-primary-color)'  }}>{email}</Typography>
                    </div> : null
            }

        </div>
    );
}

export default Contactbox;