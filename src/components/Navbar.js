import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { ReactComponent as Burger } from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import NavDropdown from '../UI/NavDropdown'

import Modal from '../UI/Modal'

import Zx9Thumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import ShopBtn from '../UI/ShopBtn'



function Navbar({ show, drop }) {

    const navigate = useNavigate()

    return (

        <nav className={styles.navBar}>
            <Burger onClick={drop} className={styles.burger} />
            <Logo className={styles.logo} />
            <ul>
                <li onClick={() => navigate('/')} >home</li>
                <li onClick={() => navigate('/headphones')}>headphones</li>
                <li onClick={() => navigate('/speakers')}>speakers</li>
                <li onClick={() => navigate('/earphones')}>earphones</li>
            </ul>
            <CartIcon onClick={show} className={styles.cart} />

        </nav>


    )
}

export default Navbar
