import styles from './ShopBtn.module.css'
import arrow from '../assets/shared/desktop/icon-arrow-right.svg'

function ShopBtn(props) {
    return (
        <button className={styles.ShopBtn} onClick={props.onClick}>
            <p>shop</p>
            <img src={arrow} />
        </button>
    )
}

export default ShopBtn
