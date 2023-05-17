import styles from '../../pages/Checkout.module.css'

function ShippingInfo(props) {
    const addressInputChangeHandler = (e) => {
        props.setAddress(e.target.value)
    }

    const addressInputBlurHandler = () => {
        props.addressTouched(true)
    }

    const zipInputChangeHandler = (e) => {
        props.setZip(e.target.value)
    }

    const zipInputBlurHandler = () => {
        props.zipTouched(true)
    }

    const cityInputChangeHandeler = (e) => {
        props.setCity(e.target.value)
    }

    const cityInputBlurHandler = () => {
        props.cityTouched(true)
    }

    const countryInputChangeHandeler = (e) => {
        props.setCountry(e.target.value)
    }

    const countryInputBlurHandeler = () => {
        props.countryTouched(true)
    }

    return (
        <div className={styles.formGroup}>
            <p className='coral'>SHIPPING INFO</p>
            <div className={props.addressInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                <div className={styles.checkout__labelError}>
                    <label className='black' htmlFor='name'>Your Address</label>
                    {props.addressInvalid && <p className={styles.error}>Please enter valid address</p>}
                </div>
                <input onBlur={addressInputBlurHandler} onChange={addressInputChangeHandler} value={props.enteredAddress} type='text' />
            </div>
            <div className={styles.shipping__formGroup}>

                <div className={props.zipInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                    <div className={styles.checkout__labelError}>
                        <label className='black' htmlFor='name'>ZIP code</label>
                        {props.zipInvalid && <p className={styles.error}>Please enter valid zipcode</p>}
                    </div>
                    <input onBlur={zipInputBlurHandler} onChange={zipInputChangeHandler} value={props.enteredZip} type='text' />
                </div>

                <div className={props.cityInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                    <div className={styles.checkout__labelError}>
                        <label className='black' htmlFor='name'>City</label>
                        {props.cityInvalid && <p className={styles.error}>Please enter valid city</p>}
                    </div>
                    <input onBlur={cityInputBlurHandler} onChange={cityInputChangeHandeler} value={props.enteredCity} type='text' />
                </div>

                <div className={props.countryInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                    <div className={styles.checkout__labelError}>
                        <label className='black' htmlFor='name'>Country</label>
                        {props.countryInvalid && <p className={styles.error}>Please enter valid country</p>}
                    </div>
                    <input onBlur={countryInputBlurHandeler} onChange={countryInputChangeHandeler} value={props.enteredCountry} type='text' />
                </div>
            </div>
        </div>
    )
}

export default ShippingInfo
