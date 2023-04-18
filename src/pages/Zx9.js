import { useNavigate } from 'react-router-dom'
import styles from './Zx9.module.css'
import zx9Image from '../assets/product-zx9-speaker/mobile/image-product.jpg'
import zx9ImageTab from '../assets/product-zx9-speaker/tablet/image-product.jpg'
import zx9ImageDesk from '../assets/product-zx9-speaker/desktop/image-product.jpg'
import gallery1 from '../assets/product-zx9-speaker/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-zx9-speaker/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-zx9-speaker/mobile/image-gallery-3.jpg'
import gallery1Tab from '../assets/product-zx9-speaker/tablet/image-gallery-1.jpg'
import gallery2Tab from '../assets/product-zx9-speaker/tablet/image-gallery-2.jpg'
import gallery3Tab from '../assets/product-zx9-speaker/tablet/image-gallery-3.jpg'
import gallery1Desk from '../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import gallery2Desk from '../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import gallery3Desk from '../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
import markI from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import markITab from '../assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import markIDesk from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import zx7 from '../assets/shared/mobile/image-zx7-speaker.jpg'
import zx7Tab from '../assets/shared/tablet/image-zx7-speaker.jpg'
import zx7Desk from '../assets/shared/desktop/image-zx7-speaker.jpg'
import xx59 from '../assets/shared/mobile/image-xx59-headphones.jpg'
import xx59Tab from '../assets/shared/tablet/image-xx59-headphones.jpg'
import xx59Desk from '../assets/shared/desktop/image-xx59-headphones.jpg'
import Button from '../UI/Button'
import NumberButton from '../UI/NumberButton'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import { productData } from '../data'

function Zx9() {
    const navigate = useNavigate()
    console.log(productData[1].image.tablet)

    return (
        <main className={styles.zx9}>
            <p onClick={() => navigate('/headphones')} className={`${styles.goBack} ${'black50'}`} >Go Back</p>

            <div className={styles.purchaseInfo}>
                <picture>
                    <source media="(min-width:1440px)" srcset={zx9ImageDesk} />
                    <source media="(min-width:768px)" srcset={zx9ImageTab} />
                    <img className={styles.zx9__image} src={zx9Image} />
                </picture>

                <div className={styles.addToCart}>
                    <p className='overline coral'>new product</p>
                    <h2 className='black'>{productData[5].name}</h2>
                    <p className='black50'>Upgrade your sound system with the all new ZX9 active speaker.
                    It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new
                    possibilities for more pleasing and practical audio setups.
                    </p>
                    <h6 className='black'>$ 4,500</h6>

                    <div className={styles.btnGroup}>
                        <NumberButton />

                        <Button>add to cart</Button>
                    </div>
                </div>
            </div>

            <div className={styles.productDetails}>

                <section className={styles.features}>
                    <h3 className='black'>FEATURES</h3>
                    <p className='black50'>Connect via Bluetooth or nearly any wired source.
                    This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs,
                    allowing you to have up to five wired source devices connected for easy switching.
                    Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).<br /><br />

                    Discover clear, more natural sounding highs than the competition with ZX9’s signature
                    planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy
                    of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether
                    in a large room or small den. Furthermore, you will experience new sensations from old songs
                    since it can respond to even the subtle waveforms.
                    </p>
                </section>



                <section className={styles.inBox}>
                    <h3 className='black'>In the box</h3>
                    <div className={styles.inBox__list}>

                        <div className='flex_group'>
                            <p className={styles.amount}>2x</p>
                            <p className='black50'>Speaker Unit</p>
                        </div>
                        <div className='flex_group'>
                            <p className={styles.amount}>2x</p>
                            <p className='black50'>Speaker Cloth Panel</p>
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
                            <p className='black50'>10m Optical Cable</p>
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
                            <source media="(min-width:1440px)" srcset={zx7Desk} />
                            <source media="(min-width:768px)" srcset={zx7Tab} />
                            <img className='card' src={zx7} />
                        </picture>
                        <h5 className='black'>zx7 speaker</h5>
                        <Button>see product</Button>
                    </div>

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
                </div>
            </section>

            <Categories />
            <BestAudio />



        </main>
    )
}

export default Zx9
