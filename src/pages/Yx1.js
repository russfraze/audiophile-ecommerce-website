import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Yx1.module.css'
import Yx1Image from '../assets/product-yx1-earphones/mobile/image-product.jpg'
import Yx1ImageTab from '../assets/product-yx1-earphones/tablet/image-product.jpg'
import Yx1ImageDesk from '../assets/product-yx1-earphones/desktop/image-product.jpg'
import gallery1 from '../assets/product-yx1-earphones/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-yx1-earphones/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-yx1-earphones/mobile/image-gallery-3.jpg'
import gallery1Tab from '../assets/product-yx1-earphones/tablet/image-gallery-1.jpg'
import gallery2Tab from '../assets/product-yx1-earphones/tablet/image-gallery-2.jpg'
import gallery3Tab from '../assets/product-yx1-earphones/tablet/image-gallery-3.jpg'
import gallery1Desk from '../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import gallery2Desk from '../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import gallery3Desk from '../assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
import zx9 from '../assets/shared/mobile/image-zx9-speaker.jpg'
import zx9Tab from '../assets/shared/tablet/image-zx9-speaker.jpg'
import zx9Desk from '../assets/shared/desktop/image-zx9-speaker.jpg'
import markI from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import markITab from '../assets/shared/tablet/image-xx99-mark-one-headphones.jpg'
import markIDesk from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import xx59 from '../assets/shared/mobile/image-xx59-headphones.jpg'
import xx59Tab from '../assets/shared/tablet/image-xx59-headphones.jpg'
import xx59Desk from '../assets/shared/desktop/image-xx59-headphones.jpg'
import Button from '../UI/Button'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import { productData } from '../data'
import ProductForm from '../components/ProductForm'

function Yx1() {
    const navigate = useNavigate()
    console.log(productData[0].name)
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[])

    return (
        <main className={styles.yx1}>
            <p onClick={() => navigate(-1)} className={`${styles.goBack} ${'black50'}`} >Go Back</p>

            <div className={styles.purchaseInfo}>
                <picture>
                    <source media="(min-width:1440px)" srcset={Yx1ImageDesk} />
                    <source media="(min-width:768px)" srcset={Yx1ImageTab} />
                    <img className={styles.zx7__image} src={Yx1Image} />
                </picture>

                <div className={styles.addToCart}>
                    <p className='overline coral'>new product</p>
                    <h2 className='black'>{productData[0].name}</h2>
                    <p className='black50'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 
                    Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active 
                    noise cancellation feature.
                    </p>
                    <h6 className='black'>$ 599</h6>

                    <ProductForm name={productData[0].name} price={productData[0].price} id={productData[0].id}/>
                </div>
            </div>

            <div className={styles.productDetails}>

                <section className={styles.features}>
                    <h3 className='black'>FEATURES</h3>
                    <p className='black50'>Experience unrivalled stereo sound thanks to innovative acoustic technology. 
                    With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely 
                    crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying 
                    exceptional noise isolation and truly immersive sound.<br /><br />

                    The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants 
                    built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, 
                    giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available 
                    in an all new white and grey color scheme as well as the popular classic black.
                    </p>
                </section>



                <section className={styles.inBox}>
                    <h3 className='black'>In the box</h3>
                    <div className={styles.inBox__list}>

                        <div className='flex_group'>
                            <p className={styles.amount}>2x</p>
                            <p className='black50'>Earphone Unit</p>
                        </div>
                        <div className='flex_group'>
                            <p className={styles.amount}>6x</p>
                            <p className='black50'>Multi-size Earplugs</p>
                        </div>
                        <div className='flex_group'>
                            <p className={styles.amount}>1x</p>
                            <p className='black50'>User Manual</p>
                        </div>
                        <div className='flex_group'>
                            <p className={styles.amount}>1x</p>
                            <p className='black50'>USB-C Charging Cable</p>
                        </div>
                        <div className='flex_group'>
                            <p className={styles.amount}>1x</p>
                            <p className='black50'>Travel Pouch</p>
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
                
                    <div className={styles.alsoLike__product} >
                        <picture>
                            <source media="(min-width:1440px)" srcset={markIDesk} />
                            <source media="(min-width:768px)" srcset={markITab} />
                            <img className='card' src={markI} />
                        </picture>
                        <h5 className='black'>xx99 mark I</h5>
                        <Button onClick={() => navigate('/headphones/markI')}>see product</Button>
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
                            <source media="(min-width:1440px)" srcset={zx9Desk} />
                            <source media="(min-width:768px)" srcset={zx9Tab} />
                            <img className='card' src={zx9} />
                        </picture>
                        <h5 className='black'>zx7 speaker</h5>
                        <Button onClick={() => navigate('/speakers/zx9')}>see product</Button>
                    </div>
                </div>
            </section>

            <Categories />
            <BestAudio />



        </main>
    )
}

export default Yx1
