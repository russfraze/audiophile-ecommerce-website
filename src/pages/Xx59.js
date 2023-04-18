import { useNavigate } from 'react-router-dom'
import styles from './Xx59.module.css'
import Xx59Image from '../assets/product-xx59-headphones/mobile/image-product.jpg'
import Xx59ImageTab from '../assets/product-xx59-headphones/tablet/image-product.jpg'
import Xx59ImageDesk from '../assets/product-xx59-headphones/desktop/image-product.jpg'
import gallery1 from '../assets/product-xx59-headphones/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-xx59-headphones/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-xx59-headphones/mobile/image-gallery-3.jpg'
import gallery1Tab from '../assets/product-xx59-headphones/tablet/image-gallery-1.jpg'
import gallery2Tab from '../assets/product-xx59-headphones/tablet/image-gallery-2.jpg'
import gallery3Tab from '../assets/product-xx59-headphones/tablet/image-gallery-3.jpg'
import gallery1Desk from '../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import gallery2Desk from '../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import gallery3Desk from '../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
import markII from '../assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import markIITab from '../assets/shared/tablet/image-xx99-mark-two-headphones.jpg'
import markIIDesk from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import markI from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import markITab from '../assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import markIDesk from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import zx9 from '../assets/shared/mobile/image-zx9-speaker.jpg'
import zx9Tab from '../assets/shared/tablet/image-zx9-speaker.jpg'
import zx9Desk from '../assets/shared/desktop/image-zx9-speaker.jpg'
import Button from '../UI/Button'
import NumberButton from '../UI/NumberButton'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import { productData } from '../data'

function Xx59() {
    const navigate = useNavigate()
    console.log(productData[1].image.tablet)

    return (
        <main className={styles.xx59}>
            <p onClick={() => navigate('/headphones')} className={`${styles.goBack} ${'black50'}`} >Go Back</p>

            <div className={styles.purchaseInfo}>
                <picture>
                    <source media="(min-width:1440px)" srcset={Xx59ImageDesk} />
                    <source media="(min-width:768px)" srcset={Xx59ImageTab} />
                    <img className={styles.xx59__image} src={Xx59Image} />
                </picture>

                <div className={styles.addToCart}>
                    <h2 className='black'>{productData[1].name}</h2>
                    <p className='black50'>Enjoy your audio almost anywhere and customize it to your specific tastes 
                    with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion 
                    at home or on the move.
                    </p>
                    <h6 className='black'>$ 899</h6>

                    <div className={styles.btnGroup}>
                        <NumberButton />

                        <Button>add to cart</Button>
                    </div>
                </div>
            </div>

            <div className={styles.productDetails}>

                <section className={styles.features}>
                    <h3 className='black'>FEATURES</h3>
                    <p className='black50'>These headphones have been created from durable, high-quality materials tough 
                    enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it 
                    perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for 
                    audio synchronization with videos. <br /><br />

                    More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, 
                    hands-free calling when paired with a compatible smartphone. Controlling music and calls is also 
                    intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 
                    headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly 
                    recharged via USB-C.
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
                            <source media="(min-width:1440px)" srcset={markIIDesk} />
                            <source media="(min-width:768px)" srcset={markIITab} />
                            <img className='card' src={markII} />
                        </picture>
                        <h5 className='black'>xx99 mark II</h5>
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
                            <source media="(min-width:1440px)" srcset={zx9Desk} />
                            <source media="(min-width:768px)" srcset={zx9Tab} />
                            <img className='card' src={zx9} />
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

export default Xx59
