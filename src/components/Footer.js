import styles from './Footer.module.css'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as Facebook } from '../assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as Twitter } from '../assets/shared/desktop/icon-twitter.svg'
import { ReactComponent as Instagram } from '../assets/shared/desktop/icon-instagram.svg'

function Footer() {
    return (
        <footer className={styles.footer}>
            <Logo />
            <p className='subtitle'>Home</p>
            <p className='subtitle'>Headphones</p>
            <p className='subtitle'>Speakers</p>
            <p className='subtitle'>Earphones</p>
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
            and sound specialists who are devoted to helping you get the most out of personal audio. Come and
            visit our demo facility - we’re open 7 days a week.</p>
            <p>Copyright 2021. All Rights Reserved</p>
            <Facebook />
            <Twitter />
            <Instagram />
        </footer>
    )
}

export default Footer
