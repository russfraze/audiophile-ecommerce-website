import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Cart.module.css'
import Modal from '../../UI/Modal'
import Button from '../../UI/Button'
import CartItem from '../cart/CartItem'
import CartContext from '../../context/CartContext'

function Cart(props) {
    const cartData = useContext(CartContext)

    // const navigate = useNavigate()

    const cartProductRemoveHandler = (id) => {
        cartData.removeProduct(id)
    }

    const cartProductAddHandler = (item) => {
        cartData.addProduct(item)
    }

    return (
        <Modal hide={props.hide}>
            <div className={styles.numRemove}>
                <p>Cart(3)</p>
                <p>Remove all</p>
            </div>
            {cartData.products.map(item =>
                <CartItem
                    name={item.name}
                    id={item.id}
                    total={item.total}
                    amount={item.amount}
                    onRemove={cartProductRemoveHandler.bind(null, item.id)}
                    onAdd={cartProductAddHandler.bind(null, item)}
                />)}
            <div className={styles.total}>
                <p></p>
                <p></p>
            </div>

            <a href='/checkout'>
                <Button  stretch={true}>checkout</Button>
            </a>

        </Modal>
    )
}

export default Cart
