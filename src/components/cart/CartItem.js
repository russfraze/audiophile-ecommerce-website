import styles from './CartItem.module.css'
import CartForm from './CartForm'

function CartItem({ image, name, total, id }) {
    return (
        <li className={styles.cartItem}>
            <img src={image} />
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.total}>{total}</p>
            </div>
            <p>{id}</p>
            <CartForm />
        </li>
    )
}

export default CartItem
