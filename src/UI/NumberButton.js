import styles from './NumberButton.module.css'
import {useState} from 'react'

function NumberButton() {
    const [numberInCart, setNumberInCart] = useState(1)

    function increment(){
        setNumberInCart(() => numberInCart + 1)
    }

    function decrement() {
        setNumberInCart(() => numberInCart - 1)
    }
 
    console.log(numberInCart)

    return (
        <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
                <div className={styles.inputGroup__btn}>
                    <button className={styles.numBtn} id='down' onClick={decrement}><span>-</span></button>
                </div>
                <input type='text' id='amount' value={numberInCart} />
                <div className={styles.inputGroup__btn}>
                    <button className={styles.numBtn} id='up' onClick={increment}><span>+</span></button>
                </div>
            </div>
        </div>
    )
}

export default NumberButton
