import { useNavigate } from 'react-router-dom'
import styles from './Mark2.module.css'
import Mark2Image from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import Mark2ImageTab from '../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import Mark2ImageDesk from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
import gallery1 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
import gallery1Tab from '../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
import gallery2Tab from '../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
import gallery3Tab from '../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
import gallery1Desk from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import gallery2Desk from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import gallery3Desk from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import markI from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import xx59 from '../assets/shared/mobile/image-xx59-headphones.jpg'
import zx7 from '../assets/shared/mobile/image-zx9-speaker.jpg'
import markITab from '../assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import xx59Tab from '../assets/shared/tablet/image-xx59-headphones.jpg'
import zx7Tab from '../assets/shared/tablet/image-zx9-speaker.jpg'
import markIDesk from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import xx59Desk from '../assets/shared/desktop/image-xx59-headphones.jpg'
import zx7Desk from '../assets/shared/desktop/image-zx9-speaker.jpg'
import Button from '../UI/Button'
import NumberButton from '../UI/NumberButton'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import { productData } from '../data'

function Mark2() {
    console.log(productData[3])
    const navigate = useNavigate()
    return (
        <main className={styles.mark2}>
            <p onClick={() => navigate('/headphones')}className={`${styles.goBack} ${'black50'}`}>Go Back</p>

            <div className={styles.purchaseInfo}>
                <picture>
                    <source media="(min-width:1440px)" srcset={Mark2ImageDesk} />
                    <source media="(min-width:768px)" srcset={Mark2ImageTab} />
                    <img className='card' src={Mark2Image} />
                </picture>

                <div className={styles.addToCart}>
                    <p className='overline coral'>new product</p>
                    <h2 className='black'>{productData[3].name}</h2>
                    <p className='black50'>The new XX99 Mark II headphones is the pinnacle of pristine audio.
                    It redefines your premium headphone experience by reproducing the
                    balanced depth and precision of studio-quality sound.
                    </p>
                    <h6 className='black'>$ 2,999</h6>

                    <div className={styles.btnGroup}>
                        <NumberButton />

                        <Button>add to cart</Button>
                    </div>
                </div>
            </div>


            <div className={styles.productDetails}>

                <section className={styles.features}>
                    <h3 className='black'>FEATURES</h3>
                    <p className='black50'>Featuring a genuine leather head strap and premium earcups, these
                    headphones deliver superior comfort for those who like to enjoy endless
                    listening. It includes intuitive controls designed for any situation.
                    Whether you’re taking a business call or just in your own personal space,
                    the auto on/off and pause features ensure that you’ll never miss a beat.<br /><br />

                    The advanced Active Noise Cancellation with built-in equalizer allow you
                    to experience your audio world on your terms. It lets you enjoy your audio
                    in peace, but quickly interact with your surroundings when you need to.
                    Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery
                    life, the XX99 Mark II headphones gives you superior sound, cutting-edge
                    technology, and a modern design aesthetic.
                    </p>
                </section>



                <section className={styles.inBox}>
                    <h3 className='black'>In the box</h3>
                    <div className={styles.inBox__list}>

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
                </section>

            </div>

            <section className={styles.gallery}>

                <div className={styles.gallery__lifestyle}>
                    <picture>
                        <source media="(min-width:1440px)" srcset={gallery1Desk} />
                        <source media="(min-width:768px)" srcset={gallery1Tab} />
                        <img className='card' src={gallery1} />
                    </picture>

                    <picture>
                        <source media="(min-width:1440px)" srcset={gallery2Desk} />
                        <source media="(min-width:768px)" srcset={gallery2Tab} />
                        <img className='card' src={gallery2} />
                    </picture>

                </div>

                <picture>
                    <source media="(min-width:1440px)" srcset={gallery3Desk} />
                    <source media="(min-width:768px)" srcset={gallery3Tab} />
                    <img className='card' src={gallery3} />
                </picture>
            </section>

            <section className={`${styles.alsoLike} ${'flex_group_column'}`}>
                <h3 className='black'>you may also like</h3>
                <div className={styles.alsoLike__products}>
                    <div className={styles.alsoLike__product}>
                        <picture>
                            <source media="(min-width:1440px)" srcset={markIDesk} />
                            <source media="(min-width:768px)" srcset={markITab} />
                            <img className='card' src={markI} />
                        </picture>
                        <h5 className='black'>xx99 mark I</h5>
                        <Button>see product</Button>
                    </div>

                    <div className={styles.alsoLike__product}>
                        <picture>
                            <source media="(min-width:1440px)" srcset={xx59Desk} />
                            <source media="(min-width:768px)" srcset={xx59Tab} />
                            <img className='card' src={xx59} />
                        </picture>
                        <h5 className='black'>xx59</h5>
                        <Button>see product</Button>
                    </div>

                    <div className={styles.alsoLike__product}>
                        <picture>
                            <source media="(min-width:1440px)" srcset={zx7Desk} />
                            <source media="(min-width:768px)" srcset={zx7Tab} />
                            <img className='card' src={zx7} />
                        </picture>
                        <h5 className='black'>zx9 speaker</h5>
                        <Button>see product</Button>
                    </div>
                </div>
            </section>

            <Categories />
            <BestAudio />

        </main>
    )
}

export default Mark2
