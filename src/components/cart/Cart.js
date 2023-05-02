import { useContext } from 'react'
import styles from './Cart.module.css'
import Modal from '../../UI/Modal'
import Button from '../../UI/Button'
import CartItem from '../cart/CartItem'
import CartContext from '../../context/CartContext'




function Cart(props) {
    const cartData = useContext(CartContext)

    const cartLength = cartData.products.length

    // const navigate = useNavigate()

    const cartProductRemoveHandler = (id) => {
        cartData.removeProduct(id)
    }

    const cartProductAddHandler = (item) => {
        cartData.addProduct(item)
    }

    const cartRemoveAllHaldler = () => {
        cartData.removeAll()
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const totalFormat = numberWithCommas(cartData.totalAmount)
    return (
        <Modal hide={props.hide} isCart={props.isCart}>
            <div className={styles.numRemove}>
                <p className={`${styles.cartLength} black`}>{`CART (${cartLength})`}</p>
                <p className={`${styles.removeAll} black50`} onClick={cartRemoveAllHaldler}>Remove all</p>
            </div>
            {cartData.products.map(item =>
                <CartItem
                    name={item.name}
                    id={item.id}
                    key={item.id}
                    total={item.total}
                    amount={item.amount}
                    onRemove={cartProductRemoveHandler.bind(null, item.id)}
                    onAdd={cartProductAddHandler.bind(null, item)}
                />)}
            <div className={styles.total}>
                <p className='black50'>TOTAL</p>
                <p className='black'>{`$${totalFormat}`}</p>
            </div>

            <a href='/checkout'>
                <Button  stretch={true}>checkout</Button>
            </a>

        </Modal>
    )
}

export default Cart
