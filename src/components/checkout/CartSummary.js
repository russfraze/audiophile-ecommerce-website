import styles from './CartSummary.module.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CheckoutItem from '../checkout/ CheckoutItem'

function CartSummary() {
    const cartData = useContext(CartContext)

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const totalFormat = numberWithCommas(cartData.totalAmount)
    const grandTotal = numberWithCommas(cartData.totalAmount + 50)

    return (
        <div>
            <div className={styles.summaryItems}>
                {cartData.products.map(item =>
                    <CheckoutItem
                        name={item.name}
                        id={item.id}
                        total={item.total}
                        amount={item.amount}
                    />)}
            </div>
            <div className={styles.totals}>
                <div className={styles.total__item}>
                    <p className='black50'>TOTAL</p> <h6 className='black'>{`$${totalFormat}`}</h6>
                </div>
                <div className={styles.total__item}>
                    <p className='black50'>SHIPPING</p> <h6 className='black'>$50</h6>
                </div>
                <div className={styles.total__grand}>
                    <p className='black50'>GRAND TOTAL</p> <h6 className='coral'>{`$${grandTotal}`}</h6>
                </div>
            </div>
        </div>
    )
}

export default CartSummary
