import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { ReactComponent as Burger } from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'

import Modal from '../UI/Modal'

import Zx9Thumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import ShopBtn from '../UI/ShopBtn'



function Navbar({ show }) {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const navigate = useNavigate()

    const burgerClick = () => {
        setNavIsOpen(!navIsOpen)
        console.log(navIsOpen)
    }

    return (
        <>
            <nav className={styles.navBar}>
                <Burger onClick={burgerClick} className={styles.burger} />
                <Logo className={styles.logo} />
                <ul>
                    <li onClick={() => navigate('/')} >home</li>
                    <li onClick={() => navigate('/headphones')}>headphones</li>
                    <li onClick={() => navigate('/speakers')}>speakers</li>
                    <li onClick={() => navigate('/earphones')}>earphones</li>
                </ul>
                <CartIcon onClick={show} className={styles.cart} />

            </nav>
            { navIsOpen ? <div className={styles.dropdown} >
                <Modal isNavDrop={true} isCart={false} isThank={false}>
                    <article className={styles.categories}>
                        <div className={styles.container}>
                            <div className={`${styles.headphones} ${'bG_grey'} ${'flex_group_column'}`}>
                                <img className={styles.headphonesImage} src={headphonesOne} />
                                <h6 className='black'>headphones</h6>
                                <ShopBtn />
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={`${styles.speakers} ${'bG_grey'} ${'flex_group_column'}`}>
                                <img className={styles.speakersImage} src={Zx9Thumb} />
                                <h6 className='black'>speakers</h6>
                                <ShopBtn />
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={`${styles.earphones} ${'bG_grey'} ${'flex_group_column'}`}>
                                <img className={styles.earphonesCase} src={earphonesCase} />
                                <h6 className='black'>earphones</h6>
                                <ShopBtn />
                            </div>
                        </div>


                    </article>
                </Modal>
            </div> : ''}
        </>
    )
}

export default Navbar
