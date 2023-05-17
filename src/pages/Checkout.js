import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Checkout.module.css'
import Button from '../UI/Button'
import CartSummary from '../components/checkout/CartSummary'
import BillingDetails from '../components/checkout/BillingDetails'
import ShippingInfo from '../components/checkout/ShippingInfo'
import PaymentDetails from '../components/checkout/PaymentDetails'

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

    return (
        <div className={styles.checkoutBody}>
            <main className={styles.checkout}>
                <div className={styles.checkout__panel}>
                    <p className={`${styles.goBack} ${'black50'}`} onClick={() => navigate(-1)}>Go Back</p>
                    <h3 className='black'>Checkout</h3>
                    <form>

                        <BillingDetails 
                        nameTouched={setNameTouched} 
                        setName={setEnteredName}
                        nameInvalid={enteredNameIsInvalid}
                        enteredName={enteredName} 
                        emailTouched={setEmailTouched} 
                        setEmail={setEnteredEmail}
                        emailInvalid={enteredEmailIsInvalid}
                        enteredEmail={enteredEmail}
                        phoneTouched={setPhoneTouched}
                        setPhone={setEnteredPhone}
                        phoneInvalid={enteredPhoneIsInvalid}
                        enteredPhone={enteredPhone}
                        />
                        <ShippingInfo
                            setAddress={setEnteredAddress}
                            enteredAddress={enteredAddress}
                            addressTouched={setAddressTouched}
                            addressInvalid={enteredAddressIsInvalid}
                            setZip={setEnteredZip}
                            enteredZip={enteredZip}
                            zipTouched={setZipTouched}
                            zipInvalid={enteredZipIsInvalid}
                            setCity={setEnteredCity}
                            enteredCity={enteredCity}
                            cityTouched={setCityTouched}
                            cityInvalid={enteredCityIsInvalid}
                            setCountry={setEnteredCountry}
                            enteredCountry={enteredCountry}
                            countryTouched={setCountryTouched}
                            countryInvalid={enteredCountryIsInvalid}
                        />
                        <PaymentDetails
                            setNumber={setEnteredMoneyNumber}
                            numberTouched={setMoneyNumberTouched}
                            numberInvalid={enteredMoneyNumberIsInvalid}
                            enteredNumber={enteredMoneyNumber}
                            setPin={setEnteredMoneyPin}
                            pinTouched={setMoneyPinTouched} 
                            pinInvalid={enteredMoneyPinIsInvalid}
                            enteredPin={enteredMoneyPin}
                            setPayCash={setPayMethodCash}
                            payCash={payMethodCash}
                        />
                    </form>
                </div>

                <div className={styles.checkout__panel}>
                    <h6 className='black'>Summary</h6>
                    <CartSummary />
                    {formIsValid && <Button disabled={!formIsValid} onClick={submitHandler} stretch={true}>continue & pay</Button>}

                </div>
            </main>
        </div>
    )
}

export default Checkout
