import { useState } from 'react'
import { useNavigate} from 'react-router-dom' 
import styles from './Navbar.module.css'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { ReactComponent as Burger } from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'



function Navbar({show}) {
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
                <div className={styles.dummyObject}>

                </div>
                <div className={styles.dummyObject}>

                </div>
                <div className={styles.dummyObject}>

                </div>
            </div> : ''}
        </>
    )
}

export default Navbar
