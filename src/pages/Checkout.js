import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Checkout.module.css'
import Button from '../UI/Button'
import CartSummary from '../components/checkout/CartSummary'
import { ReactComponent as CashDel } from '../assets/checkout/icon-cash-on-delivery.svg'

function Checkout(props) {
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
    const phoneIsValid = enteredPhone.trim().length === 10
    const enteredPhoneIsInvalid = !phoneIsValid && phoneTouched


    const [enteredAddress, setEnteredAddress] = useState('')
    const [addressTouched, setAddressTouched] = useState(false)
    const addressIsValid = enteredAddress.trim() !== ''
    const enteredAddressIsInvalid = !addressIsValid && addressTouched

    const [enteredZip, setEnteredZip] = useState('')
    const [zipTouched, setZipTouched] = useState(false)
    const zipIsValid = enteredZip.trim().length === 5
    const enteredZipIsInvalid = !zipIsValid && zipTouched

    const [enteredCity, setEnteredCity] = useState('')
    const [cityTouched, setCityTouched] = useState(false)
    const cityIsValid = enteredCity.trim() !== ''
    const enteredCityIsInvalid = !cityIsValid && cityTouched

    const [enteredCountry, setEnteredCountry] = useState('')
    const [countryTouched, setCountryTouched] = useState(false)
    const countryIsValid = enteredCountry.trim() !== ''
    const enteredCountryIsInvalid = !countryIsValid && countryTouched

    const [payMethodCash, setPayMethodCash] = useState(false)

    const [enteredMoneyNumber, setEnteredMoneyNumber] = useState('')
    const [moneyNumberTouched, setMoneyNumberTouched] = useState(false)
    const moneyNumberIsValid = enteredMoneyNumber.trim().length === 9 || payMethodCash
    const enteredMoneyNumberIsInvalid = !moneyNumberIsValid && moneyNumberTouched

    const [payMethod, setPayMethod] = useState('')

    const [enteredMoneyPin, setEnteredMoneyPin] = useState('')
    const [moneyPinTouched, setMoneyPinTouched] = useState(false)
    const moneyPinIsValid = enteredMoneyPin.trim().length === 4 || payMethodCash
    const enteredMoneyPinIsInvalid = !moneyPinIsValid && moneyPinTouched

    const [formIsValid, setFormIsValid] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[])

    useEffect(() => {
        if (nameIsValid && emailIsValid && phoneIsValid && addressIsValid && zipIsValid
            && cityIsValid && countryIsValid && moneyNumberIsValid && moneyPinIsValid) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [nameIsValid, emailIsValid, phoneIsValid, addressIsValid, zipIsValid, cityIsValid,
        countryIsValid, moneyNumberIsValid, moneyPinIsValid])

    console.log('FORM IS VALID', formIsValid)


    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value)
    }

    const nameInputBlurHandler = () => {
        setNameTouched(true)
    }

    //email handeler fucntions:

    const emailInputChangeHandeler = (e) => {
        setEnteredEmail(e.target.value)
    }

    const emailInputBlurHandeler = () => {
        setEmailTouched(true)
    }

    //phone handeler functions:

    const phoneInputChangeHandeler = (e) => {
        setEnteredPhone(e.target.value)
    }

    const phoneInputBlurHandeler = () => {
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

    //------------------------------------------PAYMENT


    const methodChangeHandler = (e) => {

        setPayMethod(e.target.value)

        if (e.target.value === 'cash') {
            setPayMethodCash(true)
        } else {
            setPayMethodCash(false)
        }

    }


    const moneyNumInputChangeHandler = (e) => {
        setEnteredMoneyNumber(e.target.value)
    }

    const moneyNumInputBlurHandler = () => {
        setMoneyNumberTouched(true)
    }

    const moneyPinInputChangeHandler = (e) => {
        setEnteredMoneyPin(e.target.value)
    }

    const moneyPinInputBlurHandeler = () => {
        setMoneyPinTouched(true)
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
        setMoneyPinTouched(true)
        setMoneyNumberTouched(true)

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

        if (!moneyNumberIsValid) {
            return
        }
        setEnteredMoneyNumber('')

        if (!moneyPinIsValid) {
            return
        }
        setEnteredMoneyPin('')

        console.log(enteredName)
        console.log(enteredEmail)
        console.log(enteredPhone)
        console.log(enteredAddress)
        console.log(enteredCity)
        console.log(enteredZip)
        console.log(enteredCountry)
        console.log(enteredMoneyNumber)
        console.log(enteredMoneyPin)

        setNameTouched(false)
        setEmailTouched(false)
        setPhoneTouched(false)
        setAddressTouched(false)
        setCityTouched(false)
        setZipTouched(false)
        setCountryTouched(false)
        setMoneyNumberTouched(false)
        setMoneyPinTouched(false)

        props.show()
    }

    console.log('value from event', payMethod)
    return (
        <body className={styles.checkoutBody}>

            <main className={styles.checkout}>




                {/* add the goback css properties in module */}

                <div className={styles.checkout__panel}>
                    <p className={`${styles.goBack} ${'black50'}`} onClick={() => navigate(-1)}>Go Back</p>
                    <h3 className='black'>Checkout</h3>
                    <form>
                        <div className={styles.formGroup}>
                            <p className='coral'>BILLING DETAILS</p>
                            <div className={styles.billing__formGroup}>

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
                        </div>

                        <div className={styles.formGroup}>
                            <p className='coral'>SHIPPING INFO</p>
                            <div className={enteredAddressIsInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                                <div className={styles.checkout__labelError}>
                                    <label className='black' htmlFor='name'>Your Address</label>
                                    {enteredAddressIsInvalid && <p className={styles.error}>Please enter valid address</p>}
                                </div>
                                <input onBlur={addressInputBlurHandler} onChange={addressInputChangeHandler} value={enteredAddress} type='text' />
                            </div>
                            <div className={styles.shipping__formGroup}>

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
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <p className='coral'>PAYMENT DETAILS</p>
                            <div className={styles.payment__formGroup}>
                                <legend className='black' htmlFor='name'>Payment Method</legend>


                                <fieldset className={styles.radioSet} onChange={methodChangeHandler}>
                                    <div className={styles.radial__field}>
                                        <input type='radio' value='e-money' name='method' id='method1' />
                                        <p className='black'>e-Money</p>
                                    </div>
                                    <div className={styles.radial__field}>
                                        <input type='radio' value='cash' name='method' id='method2' />
                                        <p className='black'>Cash on Delivery</p>
                                    </div>
                                </fieldset>

                                {!payMethodCash ? <div className={styles.moneyNums}>
                                    <div className={styles.checkout__inputGroup}>
                                        <div className={styles.checkout__labelError}>
                                            <label className='black' htmlFor='name'>e-Money Number</label>
                                            {enteredMoneyNumberIsInvalid && <p className={styles.error}>number error</p>}
                                        </div>
                                        <input onBlur={moneyNumInputBlurHandler} onChange={moneyNumInputChangeHandler} value={enteredMoneyNumber} type='text' />
                                    </div>

                                    <div className={styles.checkout__inputGroup}>
                                        <div className={styles.checkout__labelError}>
                                            <label className='black' htmlFor='name'>e-Money PIN</label>
                                            {enteredMoneyPinIsInvalid && <p className={styles.error}>Please enter valid country</p>}
                                        </div>
                                        <input onBlur={moneyPinInputBlurHandeler} onChange={moneyPinInputChangeHandler} value={enteredMoneyPin} type='text' />
                                    </div>
                                </div> :
                                    <div className={styles.cashDel}>
                                        <CashDel />
                                        <p className='black50'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier 
                                        arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                    </div> }

                            </div>
                        </div>
                    </form>
                </div>

                <div className={styles.checkout__panel}>
                    <h6 className='black'>Summary</h6>
                    <CartSummary />
                    {formIsValid && <Button disabled={!formIsValid} onClick={submitHandler} stretch={true}>continue & pay</Button>}

                </div>
            </main>
        </body>
    )
}

export default Checkout
