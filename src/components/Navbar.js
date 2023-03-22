import styles from './Navbar.module.css'
import { ReactComponent as CartIcon} from '../assets/shared/desktop/icon-cart.svg'
import { ReactComponent as Burger} from '../assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as Logo} from '../assets/shared/desktop/logo.svg'

function Navbar() {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Burger />
            <Logo />
            <CartIcon />
            
        </nav>
    )
}

export default Navbar
