import styles from '../../pages/Checkout.module.css'
import { ReactComponent as CashDel } from '../../assets/checkout/icon-cash-on-delivery.svg'

function PaymentDetails(props) {

    const methodChangeHandler = (e) => {

        if (e.target.value === 'cash') {
            props.setPayCash(true)
        } else {
            props.setPayCash(false)
        }

    }

    const moneyNumInputChangeHandler = (e) => {
        props.setNumber(e.target.value)
    }

    const moneyNumInputBlurHandler = () => {
        props.numberTouched(true)
    }

    const moneyPinInputChangeHandler = (e) => {
        props.setPin(e.target.value)
    }

    const moneyPinInputBlurHandeler = () => {
        props.pinTouched(true)
    }
    console.log('invalid from PDC', props.numberInvalid)
    return (
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

                {!props.payCash ? <div className={styles.moneyNums}>
                    <div className={props.numberInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                        <div className={styles.checkout__labelError}>
                            <label className='black' htmlFor='name'>e-Money Number</label>
                            {props.numberInvalid && <p className={styles.error}>number error</p>}
                        </div>
                        <input onBlur={moneyNumInputBlurHandler} onChange={moneyNumInputChangeHandler} value={props.enteredNumber} type='text' />
                    </div>

                    <div className={props.pinInvalid ? `${styles['checkout__inputGroup--error']}` : `${styles.checkout__inputGroup}`}>
                        <div className={styles.checkout__labelError}>
                            <label className='black' htmlFor='name'>e-Money PIN</label>
                            {props.pinInvalid && <p className={styles.error}>enter 4 digit pin</p>}
                        </div>
                        <input onBlur={moneyPinInputBlurHandeler} onChange={moneyPinInputChangeHandler} value={props.enteredPin} type='text' />
                    </div>
                </div> :
                    <div className={styles.cashDel}>
                        <CashDel />
                        <p className='black50'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                                        arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>}

            </div>
        </div>
    )
}

export default PaymentDetails
