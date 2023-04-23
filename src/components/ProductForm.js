import styles from './ProductForm.module.css'
import { useState, useContext } from 'react'
import CartContext from '../context/CartContext'
import NumberButton from '../UI/NumberButton'
import Button from '../UI/Button'

function ProductForm({name, price, id}) {
    const [numberInCart, setNumberInCart] = useState(0)
    const cartData = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('dis dat cart', numberInCart, name, id)

        cartData.addProduct({
            name: name,
            price: price,
            amount: numberInCart,
            total: numberInCart * price,
            id: id
        })
    }

    function increment(){
        setNumberInCart(() => numberInCart + 1)
        // return numberInCart
    }

    function decrement() {
        setNumberInCart(() => numberInCart - 1)
        // return numberInCart
    }
 
    console.log(numberInCart)
    

    return <form>
        <div>
            <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputGroup__btn}>
                        <span className={styles.numBtn} id='down' onClick={decrement}><span>-</span></span>
                    </div>
                    <input type='text' id='amount' value={numberInCart} />
                    <div className={styles.inputGroup__btn}>
                        <span className={styles.numBtn} id='up' onClick={increment}><span>+</span></span>
                    </div>
                </div>
            </div>
        </div>
        <Button onClick={handleSubmit} >add to cart</Button>
    </form>
}

export default ProductForm
