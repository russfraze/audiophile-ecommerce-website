import { useContext, useState } from 'react'
import styles from './ThankYou.module.css'
import Modal from '../../UI/Modal'
import Button from '../../UI/Button'
import CheckoutItem from '../checkout/ CheckoutItem'
import CartContext from '../../context/CartContext'
import { ReactComponent as CheckIcon } from '../../assets/checkout/icon-order-confirmation.svg'

function ThankYou(props) {
    const cartData = useContext(CartContext)
    const [viewLess, setViewLess] = useState(true)

    const showOther = cartData.products.length > 1
    const otherCount = cartData.products.length - 1
    console.log('SHOW_OTHER', showOther)

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const totalFormat = numberWithCommas(cartData.totalAmount + 50)

    return (
        <Modal hide={props.hide} isCart={props.isCart} isThank={props.isThank} isDropNav={props.isDropNav} >
            {/* <div className={styles.numRemove}>
                <p className={`${styles.cartLength} black`}>{`CART (${cartLength})`}</p>
                <p className={`${styles.removeAll} black50`}>Remove all</p>
            </div> */}
            <CheckIcon />
            <h3 className='black'>Thank you<br /> for your order</h3>
            <p className='black50'>You will receive an email confirmation shortly.</p>

            <div className={styles.yourOrder}>

                <div className={styles.yourOrder__list}>

                    {!viewLess && cartData.products.map(item =>
                        <CheckoutItem
                            name={item.name}
                            id={item.id}
                            key={item.id}
                            total={item.total}
                            amount={item.amount}

                        />)}
                    {viewLess && <CheckoutItem
                        name={cartData.products[0].name}
                        id={cartData.products[0].id}
                        total={cartData.products[0].total}
                        amount={cartData.products[0].amount}
                    />}
                    <div className={styles.line}></div>
                    {showOther && <div className={styles.yourOrder__otherList}>
                        <p onClick={() => setViewLess(false)}className='black50'>and {otherCount} other item(s)</p>

                        {/* fix this feature later */}
                        {/* { viewLess ? <p onClick={() => setViewLess(false)}className='black50'>and {otherCount} other item(s)</p>
                        : <p onClick={() => setViewLess(true)}className='black50'>View less</p>} */}

                    </div>}
                </div>
                <div className={styles.yourOrder__total}>
                    <p>GRAND TOTAL</p>
                    <h6>{`$${totalFormat}`}</h6>
                </div>
            </div>

            <a href='/'>
                <Button stretch={true}>back to home</Button>
            </a>

        </Modal>
    )
}

export default ThankYou
