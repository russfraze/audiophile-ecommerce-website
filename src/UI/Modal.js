import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    const isNavDrop = props.isNavDrop
    return <div className={isNavDrop ? `${styles.backdropNav}` : `${styles.backdrop}`} onClick={props.onClick} />
}

const ModalOverlay = (props) => {
    const isCart = props.isCart
    const isNavDrop = props.isNavDrop
    const isThank = props.isThank
    
    console.log('props check from inside ModalOverlay function', isCart, isNavDrop, isThank)
    
    return <div className={ isCart && `${styles.modal}` || isThank && `${styles.modalThankYou}` 
    || isNavDrop && `${styles.modalNavDrop}`}>

        <div className={ isThank && `${styles.contentThankYou}` || isNavDrop && `${styles.contentNavDrop}`}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.hide} isNavDrop={props.isNavDrop}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay isCart={props.isCart} isNavDrop={props.isNavDrop} isThank={props.isThank} >{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal
