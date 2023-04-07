import styles from './NumberButton.module.css'

function NumberButton() {
    return (
        <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
                <div className={styles.inputGroup__btn}>
                    <button id='down' onClick={''}><span>-</span></button>
                </div>
                <input type='text' id='amount' value='1' />
                <div className={styles.inputGroup__btn}>
                    <button id='up' onClick={''}><span>+</span></button>
                </div>
            </div>
        </div>
    )
}

export default NumberButton
