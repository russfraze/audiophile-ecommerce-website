import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick} />
}

const ModalOverlay = (props) => {
    const isCart = props.isCart
    return <div className={ !isCart ? `${styles.modalThankYou}` : `${styles.modal}`}>
        <div className={ !isCart && `${styles.contentThankYou}`}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.hide}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay isCart={props.isCart}>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal
