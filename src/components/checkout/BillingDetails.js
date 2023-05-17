import styles from '../../pages/Checkout.module.css'

function BillingDetails(props) {

    const nameInputChangeHandler = (e) => {
        props.setName(e.target.value)
    }

    const nameInputBlurHandler = () => {
        props.nameTouched(true)
    }

    //email handeler fucntions:

    const emailInputChangeHandeler = (e) => {
        props.setEmail(e.target.value)
    }

    const emailInputBlurHandeler = () => {
        props.emailTouched(true)
    }

    //phone handeler functions:

    const phoneInputChangeHandeler = (e) => {
        props.setPhone(e.target.value)
    }

    const phoneInputBlurHandeler = () => {
        props.phoneTouched(true)
    }

    return (
        <div className={styles.formGroup}>
            <p className='coral'>BILLING DETAILS</p>
            <div className={styles.billing__formGroup}>

                <div className={props.nameInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                    <div className={styles.checkout__labelError}>
                        <label className='black' htmlFor='name'>Name</label>
                        {props.nameInvalid && <p className={styles.error}>Please enter your name</p>}
                    </div>
                    <input onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} type='text' value={props.enteredName} />
                </div>

                <div className={props.emailInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                    <div className={styles.checkout__labelError}>
                        <label className='black' htmlFor='name'>Email Address</label>
                        {props.emailInvalid && <p className={styles.error}>Please enter valid email</p>}
                    </div>
                    <input onBlur={emailInputBlurHandeler} type='text' onChange={emailInputChangeHandeler} value={props.enteredEmail} />
                </div>

                <div className={props.phoneInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                    <div className={styles.checkout__labelError}>
                        <label className='black' htmlFor='name'>Phone Number</label>
                        {props.phoneInvalid && <p className={styles.error}>enter valid number</p>}
                    </div>
                    <input onBlur={phoneInputBlurHandeler} type='text' onChange={phoneInputChangeHandeler} value={props.enteredPhone} />
                </div>
            </div>
        </div>

    )
}

export default BillingDetails
