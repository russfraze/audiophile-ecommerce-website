import styles from './CheckoutItem.module.css'
import yx1Cart from '../../assets/cart/image-yx1-earphones.jpg'
import xx59Cart from '../../assets/cart/image-xx59-headphones.jpg'
import mark1Cart from '../../assets/cart/image-xx99-mark-one-headphones.jpg'
import mark2Cart from '../../assets/cart/image-xx99-mark-two-headphones.jpg'
import zx7Cart from '../../assets/cart/image-zx7-speaker.jpg'
import zx9Cart from '../../assets/cart/image-zx9-speaker.jpg'
import numberWithCommas from '../../helpers/NumberFormat'

const cartImages = [
    {
        image: yx1Cart,
        name: 'YX1'
    },
    {
        image: xx59Cart,
        name: 'XX59'
    },
    {
        image: mark1Cart,
        name: 'XX99 MK I'
    },
    {
        image: mark2Cart,
        name: 'XX99 MK II'
    },
    {
        image: zx7Cart,
        name: 'ZX7'
    },
    {
        image: zx9Cart,
        name: 'ZX9'
    },
]

function CheckoutItem({ total, id, amount }) {

    let cartImage
    let cartName

    console.log('rrr', cartImages[1].name)
    console.log('sss', id)

    const totalFormat = numberWithCommas(total)

    if (id === 1) {
        cartImage = yx1Cart
        cartName = cartImages[0].name
    }
    if (id === 2) {
        cartImage = xx59Cart
        cartName = cartImages[1].name
    }
    if (id === 3) {
        cartImage = mark1Cart
        cartName = cartImages[2].name
    }
    if (id === 4) {
        cartImage = mark2Cart
        cartName = cartImages[3].name
    }
    if (id === 5) {
        cartImage = zx7Cart
        cartName = cartImages[4].name
    }
    if (id === 6) {
        cartImage = zx9Cart
        cartName = cartImages[5].name
    }

    return (
        <li className={styles.cartItem}>

            <div className={styles.imageName}>
                <img className={styles.cartItem__image} src={cartImage} alt='' />
                <div>
                    <p className={styles.name}>{cartName}</p>
                    <p className={styles.total}>{`$${totalFormat}`}</p>
                </div>
            </div>

            <p className='black50'>{`X${amount}`}</p>
        </li>
    )
}

export default CheckoutItem
