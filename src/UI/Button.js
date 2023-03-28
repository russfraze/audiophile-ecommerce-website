import styles from './Button.module.css'


function Button(props) {
    return (
        <button 
        className={`${props.alt ? styles.buttonAlt : styles.buttonMain} || ${props.rev ? styles.buttonRev : styles.buttonMain}`} 
        onClick={props.onClick}
        type={props.type || 'button'}
        >
            {props.children}
        </button>
    )
}

export default Button
