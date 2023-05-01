import styles from './ThankYou.module.css'
import { useContext } from 'react'
import Modal from '../../UI/Modal'
import Button from '../../UI/Button'
import CartItem from '../cart/CartItem'
import CartContext from '../../context/CartContext'
import { ReactComponent as CheckIcon} from '../../assets/checkout/icon-order-confirmation.svg'

function ThankYou(props) {
    const cartData = useContext(CartContext)

    const cartLength = cartData.products.length

    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    return (
        <Modal hide={props.hide}>
            {/* <div className={styles.numRemove}>
                <p className={`${styles.cartLength} black`}>{`CART (${cartLength})`}</p>
                <p className={`${styles.removeAll} black50`}>Remove all</p>
            </div> */}
            <CheckIcon />
            <h3 className='black'>Thank you for your order</h3>
            <p className='black50'>You will receive an email confirmation shortly.</p>
            {cartData.products.map(item =>
                <CartItem
                    name={item.name}
                    id={item.id}
                    key={item.id}
                    total={item.total}
                    amount={item.amount}
                   
                />)}
            <div className={styles.total}>
                <p className='black50'>TOTAL</p>
                {/* <p className='black'>{`$${totalFormat}`}</p> */}
            </div>

            <a href='/checkout'>
                <Button  stretch={true}>checkout</Button>
            </a>

        </Modal>
    )
}

export default ThankYou
