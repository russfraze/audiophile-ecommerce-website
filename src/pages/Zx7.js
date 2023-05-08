import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Zx7.module.css'
import zx7Image from '../assets/product-zx7-speaker/mobile/image-product.jpg'
import zx7ImageTab from '../assets/product-zx7-speaker/tablet/image-product.jpg'
import zx7ImageDesk from '../assets/product-zx7-speaker/desktop/image-product.jpg'
import gallery1 from '../assets/product-zx7-speaker/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-zx7-speaker/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-zx7-speaker/mobile/image-gallery-3.jpg'
import gallery1Tab from '../assets/product-zx7-speaker/tablet/image-gallery-1.jpg'
import gallery2Tab from '../assets/product-zx7-speaker/tablet/image-gallery-2.jpg'
import gallery3Tab from '../assets/product-zx7-speaker/tablet/image-gallery-3.jpg'
import gallery1Desk from '../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import gallery2Desk from '../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import gallery3Desk from '../assets/product-zx7-speaker/desktop/image-gallery-3.jpg'
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
import NumberButton from '../UI/NumberButton'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import { productData } from '../data'
import ProductForm from '../components/ProductForm'

function Zx7() {
    const navigate = useNavigate()
    console.log(productData[1].image.tablet)

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[])

    return (
        <main className={styles.zx7}>
            <p onClick={() => navigate('/speakers')} className={`${styles.goBack} ${'black50'}`} >Go Back</p>

            <div className={styles.purchaseInfo}>
                <picture>
                    <source media="(min-width:1440px)" srcset={zx7ImageDesk} />
                    <source media="(min-width:768px)" srcset={zx7ImageTab} />
                    <img className={styles.zx7__image} src={zx7Image} />
                </picture>

                <div className={styles.addToCart}> 
                    <h2 className='black'>zx7 <br/> speaker</h2>
                    <p className='black50'>Stream high quality sound wirelessly with minimal to no loss. 
                    The ZX7 speaker uses high-end audiophile components that represents the top of the line 
                    powered speakers for home or studio use.
                    </p>
                    <h6 className='black'>$ 3,500</h6>

                    <ProductForm name={productData[4].name} price={productData[4].price} id={productData[4].id}/>
                </div>
            </div>

            <div className={styles.productDetails}>

                <section className={styles.features}>
                    <h3 className='black'>FEATURES</h3>
                    <p className='black50'>Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response 
                    rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are 
                    made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for 
                    more advanced usage.<br /><br />

                    The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF 
                    wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth 
                    or traditional optical and RCA input. Switch input sources and control volume at your finger tips with 
                    the included wireless remote. This versatile speaker is equipped to deliver an authentic 
                    listening experience.
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
                            <p className='black50'>3.5mm 7.5m Audio Cable</p>
                        </div>
                        <div className='flex_group'>
                            <p className={styles.amount}>1x</p>
                            <p className='black50'>7.5m Optical Cable</p>
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
                            <source media="(min-width:1440px)" srcset={zx9Desk} />
                            <source media="(min-width:768px)" srcset={zx9Tab} />
                            <img className='card' src={zx9} />
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

export default Zx7
