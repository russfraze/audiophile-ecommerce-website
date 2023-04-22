import {useContext} from 'react'
import styles from './Cart.module.css'
import Modal from '../../UI/Modal'
import CartContext from '../../context/CartContext'

function Cart(props) {
    const cartData = useContext(CartContext)

    return (
        <Modal hide={props.hide}>
            <h1 className='black50'>da cart</h1>
            <h1 className='black50'>da cart</h1>
            <h1 className='black50'>da cart</h1>
            <h1 className='black50'>da cart</h1>
            <h1 className='black50'>da cart</h1>
            <h1 className='black50'>da cart</h1>
        </Modal>
    )
}

export default Cart
