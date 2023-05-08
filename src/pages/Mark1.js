import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './Mark1.module.css'
import Mark1Image from '../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import Mark1ImageTab from '../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import Mark1ImageDesk from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import gallery1 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
import gallery1Tab from '../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg'
import gallery2Tab from '../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg'
import gallery3Tab from '../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg'
import gallery1Desk from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import gallery2Desk from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import gallery3Desk from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import markII from '../assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import xx59 from '../assets/shared/mobile/image-xx59-headphones.jpg'
import zx7 from '../assets/shared/mobile/image-zx9-speaker.jpg'
import markIITab from '../assets/shared/tablet/image-xx99-mark-two-headphones.jpg'
import xx59Tab from '../assets/shared/tablet/image-xx59-headphones.jpg'
import zx7Tab from '../assets/shared/tablet/image-zx9-speaker.jpg'
import markIIDesk from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import xx59Desk from '../assets/shared/desktop/image-xx59-headphones.jpg'
import zx7Desk from '../assets/shared/desktop/image-zx9-speaker.jpg'
import Button from '../UI/Button'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import { productData } from '../data'
import ProductForm from '../components/ProductForm'


function Mark1() {
    const navigate = useNavigate()
    console.log(productData[2])

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[])
    
    return (
        <main className={styles.mark1}>
            <p onClick={() => navigate(-1)} className={`${styles.goBack} ${'black50'}`} >Go Back</p>

            <div className={styles.purchaseInfo}>
                <picture>
                    <source media="(min-width:1440px)" srcset={Mark1ImageDesk} />
                    <source media="(min-width:768px)" srcset={Mark1ImageTab} />
                    <img className={styles.mark1__image} src={Mark1Image} />
                </picture>

                <div className={styles.addToCart}>
                    <h2 className='black'>{productData[2].name}</h2>
                    <p className='black50'>As the gold standard for headphones, the classic XX99 Mark I
                    offers detailed and accurate audio reproduction for audiophiles, mixing engineers,
                    and music aficionados alike in studios and on the go.
                    </p>
                    <h6 className='black'>$ 1,750</h6>

                    <ProductForm name={productData[2].name} price={productData[2].price} id={productData[2].id}/>
                </div>
            </div>

            <div className={styles.productDetails}>

                <section className={styles.features}>
                    <h3 className='black'>FEATURES</h3>
                    <p className='black50'>As the headphones all others are measured against, the XX99 Mark I demonstrates
                    over five decades of audio expertise, redefining the critical listening experience.
                    This pair of closed-back headphones are made of industrial, aerospace-grade materials
                     emphasize durability at a relatively light weight of 11 oz. <br /><br />

                    From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element,
                    the components work together to deliver comfort and uncompromising sound. Its closed-back design
                    delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a
                    dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
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
                        <Button onClick={() => navigate('/headphones/markII')}>see product</Button>
                    </div>

                    <div className={styles.alsoLike__product}>
                        <picture>
                            <source media="(min-width:1440px)" srcset={xx59Desk} />
                            <source media="(min-width:768px)" srcset={xx59Tab} />
                            <img className='card' src={xx59} />
                        </picture>
                        <h5 className='black'>xx59</h5>
                        <Button onClick={() => navigate('/headphones/xx59')}>see product</Button>
                    </div>

                    <div className={styles.alsoLike__product}>
                        <picture>
                            <source media="(min-width:1440px)" srcset={zx7Desk} />
                            <source media="(min-width:768px)" srcset={zx7Tab} />
                            <img className='card' src={zx7} />
                        </picture>
                        <h5 className='black'>zx9 speaker</h5>
                        <Button onClick={() => navigate('/speakers/zx9')}>see product</Button>
                    </div>
                </div>
            </section>

            <Categories />
            <BestAudio />
        </main>
    )
}


export default Mark1
