import styles from './CartForm.module.css'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'




function CartForm({name, price, id, amount }) {
    const [numberInCart, setNumberInCart] = useState(0)
    const cartData = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('dis dat cart', numberInCart, name, id)

      

        // cartData.removeProduct(id)
    }

    function increment(){
        setNumberInCart(() => numberInCart + 1)
        cartData.addProduct({
            name: name,
            price: price,
            amount: numberInCart,
            id: id
        })
        return numberInCart
    }

    function decrement() {
        setNumberInCart(() => numberInCart - 1)
        cartData.removeProduct(id)
        return numberInCart
    }
 
    console.log('NUMBER IN CART FORM',numberInCart)
    

    return <form onSubmit={handleSubmit}>
        <div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputGroup__btn}>
                        <button className={styles.numBtn} id='down' onClick={decrement}><span>-</span></button>
                    </div>
                    <input type='text' id='amount' value={amount} />
                    <div className={styles.inputGroup__btn}>
                        <button className={styles.numBtn} id='up' onClick={increment}><span>+</span></button>
                    </div>
                </div>
            </div>
        </div>
        
    </form>
}

export default CartForm
