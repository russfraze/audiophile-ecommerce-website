import {useContext} from 'react'
import styles from './CartItem.module.css'
import CartForm from './CartForm'

function CartItem({ image, name, total, id, amount, onRemove, onAdd }) {

    return (
        <li className={styles.cartItem}>
            <img src={image} />
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.total}>{total}</p>
            </div>

            {/* <CartForm name={name} amount={amount} id={id}/> */}

            <div className={styles.inputGroup}>
                <div className={styles.inputGroup__btn}>
                    <button className={styles.numBtn} id='down' onClick={onRemove}><span>-</span></button>
                </div>
                <input type='text' id='amount' value={amount} />
                <div className={styles.inputGroup__btn}>
                    <button className={styles.numBtn} id='up' onClick={onAdd}><span>+</span></button>
                </div>
            </div>
        </li>
    )
}

export default CartItem
