import { useState } from 'react'
import styles from './Checkout.module.css'
import Button from '../UI/Button'
function Checkout() {


    const [enteredName, setEnteredName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const nameIsValid = enteredName.trim() !== ''
    const enteredNameIsInvalid = !nameIsValid && nameTouched

    const [enteredEmail, setEnteredEmail] = useState('')
    const [emailTouched, setEmailTouched] = useState(false)
    const emailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')
    const enteredEmailIsInvalid = !emailIsValid && emailTouched

    const [enteredPhone, setEnteredPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState(false)
    const phoneIsValid = enteredPhone.trim().length == 10
    const enteredPhoneIsInvalid = !phoneIsValid && phoneTouched




    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value)

    }

    const nameInputBlurHandler = (e) => {
        setNameTouched(true)
    }


    //email handeler fucntions:

    const emailInputChangeHandeler = (e) => {
        setEnteredEmail(e.target.value)
    }

    const emailInputBlurHandeler = (e) => {
        setEmailTouched(true)
    }

    //phone handeler functions:

    const phoneInputChangeHandeler = (e) => {
        setEnteredPhone(e.target.value)
    }

    const phoneInputBlurHandeler = (e) => {
        setPhoneTouched(true)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setNameTouched(true)
        setEmailTouched(true)

        if (!nameIsValid) {
            return
        }
        setEnteredName('')

        if (!emailIsValid) {
            return
        }
        setEnteredEmail('')


        console.log(enteredName)
        console.log(enteredEmail)




        setNameTouched(false)
        setEmailTouched(false)
    }


    return (
        <main className={styles.checkout}>

            <div className={styles.checkout__panel}>
                <h3 className='black'>Checkout</h3>
                <form>
                    <div>
                        <p className='coral'>BILLING DETAILS</p>

                        <div className={enteredNameIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                            <div className={styles.checkout__labelError}>
                                <label className='black' htmlFor='name'>Name</label>
                                {enteredNameIsInvalid && <p className={styles.error}>Please enter your name</p>}
                            </div>
                            <input onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} type='text' value={enteredName} />
                        </div>

                        <div className={styles.checkout__inputGroup}>
                            <label className='black' htmlFor='name'>Email Address</label>
                            {enteredEmailIsInvalid && <p className={styles.error}>Please enter valid email</p>}
                            <input onBlur={emailInputBlurHandeler} type='text' onChange={emailInputChangeHandeler} value={enteredEmail} />
                        </div>

                        <div className={styles.checkout__inputGroup}>
                            <label className='black' htmlFor='name'>Phone Number</label>
                            {enteredPhoneIsInvalid && <p className={styles.error}>Please enter valid number</p>}
                            <input onBlur={phoneInputBlurHandeler} type='text' onChange={phoneInputChangeHandeler} value={enteredPhone} />
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
