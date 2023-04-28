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


    const [enteredAddress, setEnteredAddress] = useState('')
    const [addressTouched, setAddressTouched] = useState(false)
    const addressIsValid = enteredAddress.trim() !== ''
    const enteredAddressIsInvalid = !addressIsValid && addressTouched

    const [enteredZip, setEnteredZip] = useState('')
    const [zipTouched, setZipTouched] = useState(false)
    const zipIsValid = enteredZip.trim().length == 5
    const enteredZipIsInvalid = !zipIsValid && zipTouched

    const [enteredCity, setEnteredCity] = useState('')
    const [cityTouched, setCityTouched] = useState(false)
    const cityIsValid = enteredCity.trim() !== ''
    const enteredCityIsInvalid = !cityIsValid && cityTouched

    const [enteredCountry, setEnteredCountry] = useState('')
    const [countryTouched, setCountryTouched] = useState(false)
    const countryIsValid = enteredCountry.trim() !== ''
    const enteredCountryIsInvalid = !countryIsValid && countryTouched






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

    //  --------------------- SHIPPING INFO --------------

    const addressInputChangeHandler = (e) => {
        setEnteredAddress(e.target.value)
    }

    const addressInputBlurHandler = () => {
        setAddressTouched(true)
    }

    const zipInputChangeHandler = (e) => {
        setEnteredZip(e.target.value)
    }

    const zipInputBlurHandler = () => {
        setZipTouched(true)
    }

    const cityInputChangeHandeler = (e) => {
        setEnteredCity(e.target.value)
    }

    const cityInputBlurHandler = () => {
        setCityTouched(true)
    }

    const countryInputChangeHandeler = (e) => {
        setEnteredCountry(e.target.value)
    }

    const countryInputBlurHandeler = () => {
        setCountryTouched(true)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setNameTouched(true)
        setEmailTouched(true)
        setPhoneTouched(true)
        setAddressTouched(true)
        setZipTouched(true)
        setCityTouched(true)
        setCountryTouched(true)

        if (!nameIsValid) {
            return
        }
        setEnteredName('')

        if (!emailIsValid) {
            return
        }
        setEnteredEmail('')

        if (!phoneIsValid) {
            return
        }
        setEnteredPhone('')

        if (!addressIsValid) {
            return
        }
        setEnteredAddress('')
        
        if (!cityIsValid) {
            return
        }
        setEnteredCity('')

        if (!zipIsValid) {
            return
        }
        setEnteredZip('')

        if (!countryIsValid) {
            return
        }
        setEnteredCountry('')
        
        console.log(enteredName)
        console.log(enteredEmail)
        console.log(enteredPhone)
        console.log(enteredAddress)
        console.log(enteredCity)
        console.log(enteredZip)
        console.log(enteredCountry)

        setNameTouched(false)
        setEmailTouched(false)
        setPhoneTouched(false)
        setAddressTouched(false)
        setCityTouched(false)
        setZipTouched(false)
        setCountryTouched(false)
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

                        <div className={enteredEmailIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                            <div className={styles.checkout__labelError}>
                                <label className='black' htmlFor='name'>Email Address</label>
                                {enteredEmailIsInvalid && <p className={styles.error}>Please enter valid email</p>}
                            </div>
                            <input onBlur={emailInputBlurHandeler} type='text' onChange={emailInputChangeHandeler} value={enteredEmail} />
                        </div>

                        <div className={enteredPhoneIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                            <div className={styles.checkout__labelError}>
                                <label className='black' htmlFor='name'>Phone Number</label>
                                {enteredPhoneIsInvalid && <p className={styles.error}>enter valid number</p>}
                            </div>
                            <input onBlur={phoneInputBlurHandeler} type='text' onChange={phoneInputChangeHandeler} value={enteredPhone} />
                        </div>
                    </div>


                    <p className='coral'>SHIPPING INFO</p>
                    <div className={enteredAddressIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                        <div className={styles.checkout__labelError}>
                            <label className='black' htmlFor='name'>Your Address</label>
                            {enteredAddressIsInvalid && <p className={styles.error}>Please enter valid address</p>}
                        </div>
                        <input onBlur={addressInputBlurHandler} onChange={addressInputChangeHandler} value={enteredAddress} type='text' />
                    </div>

                    <div className={enteredZipIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                        <div className={styles.checkout__labelError}>
                            <label className='black' htmlFor='name'>ZIP code</label>
                            {enteredZipIsInvalid && <p className={styles.error}>Please enter valid zipcode</p>}
                        </div>
                        <input onBlur={zipInputBlurHandler} onChange={zipInputChangeHandler} value={enteredZip} type='text' />
                    </div>

                    <div className={enteredCityIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                        <div className={styles.checkout__labelError}>
                            <label className='black' htmlFor='name'>City</label>
                            {enteredCityIsInvalid && <p className={styles.error}>Please enter valid city</p>}
                        </div>
                        <input onBlur={cityInputBlurHandler} onChange={cityInputChangeHandeler} value={enteredCity} type='text' />
                    </div>

                    <div className={enteredCountryIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                        <div className={styles.checkout__labelError}>
                            <label className='black' htmlFor='name'>Country</label>
                            {enteredCountryIsInvalid && <p className={styles.error}>Please enter valid country</p>}
                        </div>
                        <input onBlur={countryInputBlurHandeler} onChange={countryInputChangeHandeler} value={enteredCountry} type='text' />
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
