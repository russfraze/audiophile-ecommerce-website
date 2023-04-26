import styles from './NumberButton.module.css'
import {useState} from 'react'

function NumberButton() {
    const [numberInCart, setNumberInCart] = useState(0)

    function increment(){
        setNumberInCart(() => numberInCart + 1)
        return numberInCart
    }

    function decrement() {
        setNumberInCart(() => numberInCart - 1)
        return numberInCart
    }
 
    console.log(numberInCart)

    return (
        <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
                <div className={styles.inputGroup__btn}>
                    <button className={styles.numBtn} id='down' onClick={decrement}><span>-</span></button>
                </div>
                <input className={styles.formGroup__input} type='text' id='amount' defaultValue={0} />
                <div className={styles.inputGroup__btn}>
                    <button className={styles.numBtn} id='up' onClick={increment}><span>+</span></button>
                </div>
            </div>
        </div>
    )
}

export default NumberButton
