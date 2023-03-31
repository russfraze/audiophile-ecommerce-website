import styles from './Footer.module.css'
import '../vars.css'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as Facebook } from '../assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as Twitter } from '../assets/shared/desktop/icon-twitter.svg'
import { ReactComponent as Instagram } from '../assets/shared/desktop/icon-instagram.svg'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    return (
        <footer className={`${styles.footer} ${'flex_group_column'}`}>
            <Logo className={styles.logo} />
            <ul>
                <li className='subtitle'>Home</li>
                <li className='subtitle' onClick={() => navigate('/headphones')}>Headphones</li>
                <li className='subtitle'>Speakers</li>
                <li className='subtitle'>Earphones</li>
            </ul>
            <p className={` ${'white50'}`}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
            and sound specialists who are devoted to helping you get the most out of personal audio. Come and
            visit our demo facility - we’re open 7 days a week.</p>
            <p className={`${styles.copyRight} ${'white50'}`}>Copyright 2021. All Rights Reserved</p>
            <div className={`${styles.socialIcons} ${'flex_group'}`}>
                <Facebook />
                <Twitter />
                <Instagram />
            </div>

        </footer>
    )
}

export default Footer