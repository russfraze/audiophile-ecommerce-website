import styles from './ProductForm.module.css'
import { useState, useContext } from 'react'
import CartContext from '../context/CartContext'
import Button from '../UI/Button'

function ProductForm({ name, price, id }) {
    const [numberInCart, setNumberInCart] = useState(1)
    const cartData = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        cartData.addProduct({
            name: name,
            price: price,
            amount: numberInCart,
            total: numberInCart * price,
            id: id
        })
    }

    function increment() {
        setNumberInCart(() => numberInCart + 1)
        // return numberInCart
    }

    function decrement() {
        
        if(numberInCart > 1){
            setNumberInCart(() => numberInCart - 1)
        }
    }

    console.log(numberInCart)


    return <form>
        <div className={styles.formGroup}>

            <div className={styles.inputGroup}>
                <div className={styles.inputGroup__btn}>
                    <span className={styles.numBtn} id='down' onClick={decrement}><span>-</span></span>
                </div>
                <input className={styles.formGroup__input} type='text' id='amount' value={numberInCart} readOnly={true} />
                <div className={styles.inputGroup__btn}>
                    <span className={styles.numBtn} id='up' onClick={increment}><span>+</span></span>
                </div>
            </div>

            <Button onClick={handleSubmit} >add to cart</Button>
        </div>
    </form>
}

export default ProductForm
