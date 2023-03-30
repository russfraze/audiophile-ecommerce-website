import styles from './Navbar.module.css'
import { ReactComponent as CartIcon} from '../assets/shared/desktop/icon-cart.svg'
import { ReactComponent as Burger} from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Logo} from '../assets/shared/desktop/logo.svg'

function Navbar() {
    return (
        <nav className={styles.navBar}>
            <Burger className={styles.burger}/>
            <Logo className={styles.logo}/>
            <ul>
                <li>home</li>
                <li>headphones</li>
                <li>speakers</li>
                <li>earphones</li>
            </ul>
            <CartIcon className={styles.cart}/>
            
        </nav>
    )
}

export default Navbar
