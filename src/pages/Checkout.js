import { useState } from 'react'
import styles from './Checkout.module.css'

function Checkout() {
    const [nameIsValid, setNameIsValid] = useState(false)
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [phoneIsValid, setPhoneIsValid] = useState(false)

    return (
        <main className={styles.checkout}>
            <h3>Checkout</h3>
            <form>
                <div>
                    <p className='coral'>BILLING DETAILS</p>

                    <div className={styles.checkout__inputGroup}>
                        <label className='black' htmlFor='name'>Name</label>
                        <input type='text' />
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
                <label htmlFor='name'>Email Address</label>
                <input type='text' />



                <p className='coral'>PAYMENT DETAILS</p>
                <label htmlFor='name'></label>
                <input type='text' />

            </form>
        </main>
    )
}

export default Checkout
