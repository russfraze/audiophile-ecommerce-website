import { useContext } from 'react'
import styles from './Cart.module.css'
import Modal from '../../UI/Modal'
import CartItem from '../cart/CartItem'
import CartContext from '../../context/CartContext'

function Cart(props) {
    const cartData = useContext(CartContext)
    console.log('CART', cartData.products)
    return (
        <Modal hide={props.hide}>
            <div className={styles.numRemove}>
                <p>Cart(3)</p>
                <p>Remove all</p>
            </div>
            {cartData.products.map(item => <CartItem name={item.name} id={item.id} total={item.price} />)}
            <div className={styles.total}>
                <p></p>
                <p></p>
            </div>
        </Modal>
    )
}

export default Cart
