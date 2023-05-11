import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { ReactComponent as Burger } from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'




function Navbar({ show, drop }) {

    const navigate = useNavigate()

    return (

        <nav className={styles.navBar}>
            <div className={styles.navBar__nav}>
                <Burger onClick={drop} className={styles.burger} />
                <Logo className={styles.logo} onClick={() => navigate('/')} />
                <ul>
                    <li onClick={() => navigate('/')} >home</li>
                    <li onClick={() => navigate('/headphones')}>headphones</li>
                    <li onClick={() => navigate('/speakers')}>speakers</li>
                    <li onClick={() => navigate('/earphones')}>earphones</li>
                </ul>
                <CartIcon onClick={show} className={styles.cart} />
            </div>

        </nav>


    )
}

export default Navbar
