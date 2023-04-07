import styles from './Mark2.module.css'
import Mark2Image from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import gallery1 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
import gallery1Tab from '../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
import gallery2Tab from '../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
import gallery3Tab from '../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
import gallery1Desk from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import gallery2Desk from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import gallery3Desk from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import Button from '../UI/Button'
import NumberButton from '../UI/NumberButton'

function Mark2() {
    return (
        <main>
            <img src={Mark2Image} />
            <p className='overline coral'>new product</p>
            <h2 className='black'>XX99 Mark II Headphones</h2>
            <p className='black50'>The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
                </p>
            <h6 className='black'>$ 2,999</h6>

            <div className={styles.btnGroup}>
                <NumberButton />

                <Button>add to cart</Button>
            </div>





            <h3 className='black'>FEATURES</h3>
            <p className='black50'>Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy endless
            listening. It includes intuitive controls designed for any situation.
            Whether you’re taking a business call or just in your own personal space,
            the auto on/off and pause features ensure that you’ll never miss a beat.

            The advanced Active Noise Cancellation with built-in equalizer allow you
            to experience your audio world on your terms. It lets you enjoy your audio
            in peace, but quickly interact with your surroundings when you need to.
            Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery
            life, the XX99 Mark II headphones gives you superior sound, cutting-edge
                    technology, and a modern design aesthetic.</p>

            <h3 className='black'>In the box</h3>


            <div className={styles.inBox}>

                <div className='flex_group'>
                    <p className={styles.amount}>1x</p>
                    <p className='black50'>Headphone Unit</p>
                </div>
                <div className='flex_group'>
                    <p className={styles.amount}>2x</p>
                    <p className='black50'>Replacement Earcups</p>
                </div>
                <div className='flex_group'>
                    <p className={styles.amount}>1x</p>
                    <p className='black50'>User Manual</p>
                </div>
                <div className='flex_group'>
                    <p className={styles.amount}>1x</p>
                    <p className='black50'>3.5mm 5m Audio Cable</p>
                </div>
                <div className='flex_group'>
                    <p className={styles.amount}>1x</p>
                    <p className='black50'>Travel Bag</p>
                </div>
            </div>

            <picture>
                <source media="(min-width:768px)" srcset={gallery1Tab} />
                <img src={gallery1} />
            </picture>

            <picture>
                <source media="(min-width:768px)" srcset={gallery2Tab} />
                <img src={gallery2} />
            </picture>

            <picture>
                <source media="(min-width:768px)" srcset={gallery3Tab} />
                <img src={gallery3} />
            </picture>

        </main>
    )
}

export default Mark2
