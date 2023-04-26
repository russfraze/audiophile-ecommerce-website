import { useState, useRef } from 'react'
import styles from './Checkout.module.css'
import Button from '../UI/Button'
function Checkout() {
    const nameInputRef = useRef()
    const [enteredName, setEnteredName] = useState('')
    const [nameIsValid, setNameIsValid] = useState(false)
    const [nameTouched, setNameTouched] = useState(false)

    const [emailIsValid, setEmailIsValid] = useState(false)
    const [phoneIsValid, setPhoneIsValid] = useState(false)

    
 
    
    const nameInputChangeHandler = (e) => {
        
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        
        
        if(enteredNameValue.trim().length === 0){
            setNameIsValid(false)
            return
        }
        const enteredNameValue = nameInputRef.current.value

        console.log(enteredNameValue)

    }

    const nameInputBlurHandler = (e) => {
        setNameTouched(true)

        const enteredNameValue = nameInputRef.current.value
        
        if(enteredNameValue.trim().length === 0){
            setNameIsValid(false)
            return
        }
    }

    const enteredNameIsInvalid = !nameIsValid && nameTouched

    return (
        <main className={styles.checkout}>

            <div className={styles.checkout__panel}>
                <h3 className='black'>Checkout</h3>
                <form>
                    <div>
                        <p className='coral'>BILLING DETAILS</p>

                        <div className={ enteredNameIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}` }>
                            <div className={styles.checkout__labelError}>
                                <label className='black' htmlFor='name'>Name</label>
                                {enteredNameIsInvalid && <p className={styles.error}>Please enter your name</p>}
                            </div>
                            <input onBlur={nameInputBlurHandler} ref={nameInputRef} type='text' />
                        </div>

                        <div className={styles.checkout__inputGroup}>
                            <label className='black' htmlFor='name'>Email Address</label>
                            <input type='text' />
                        </div>

                        <div className={styles.checkout__inputGroup}>
                            <label className='black' htmlFor='name'>Phone Number</label>
                            <input type='text' />
                        </div>
                    </div>


                    <p className='coral'>SHIPPING INFO</p>
                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>Your Address</label>
                        <input type='text' />
                    </div>

                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>ZIP code</label>
                        <input type='text' />
                    </div>

                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>City</label>
                        <input type='text' />
                    </div>

                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>Country</label>
                        <input type='text' />
                    </div>



                    <p className='coral'>PAYMENT DETAILS</p>
                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>Payment Method</label>
                        <input type='text' />
                    </div>
                    <div className={styles.checkout__inputGroup}>
                        <input type='text' />
                    </div>

                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>e-Money Number</label>
                        <input type='text' />
                    </div>

                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>e-Money PIN</label>
                        <input type='text' />
                    </div>

                </form>
            </div>

            <div className={styles.checkout__panel}>
                <h3 className='black'>Summary</h3>
                <Button onClick={submitHandler} stretch={true}>continue & pay</Button>
            </div>
        </main>
    )
}

export default Checkout
