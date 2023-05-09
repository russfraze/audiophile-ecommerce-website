import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from '../pages/Headphones.module.css'
import markTwo from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import markTwoTab from '../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import markTwoDesk from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import markOne from '../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import markOneTab from '../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import markOneDesk from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx59 from '../assets/product-xx59-headphones/mobile/image-product.jpg'
import xx59Tab from '../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import xx59Desk from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import Button from '../UI/Button'
import { productData } from '../data'



function Headphones() {
    console.log(productData[3].categoryImage.tablet)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            <header className={styles.headphonesHeader}>
                <h2>headphones</h2>
            </header>
            <main className={styles.headphones}>

                <section className={styles.product}>
                    <picture>
                        <source media="(min-width:1440px)" srcSet={markTwoDesk} />
                        <source media="(min-width:768px)" srcSet={markTwoTab} />
                        <img src={markTwo} alt='mark 2 headphones'/>
                    </picture>

                    <div className={styles.product__info}>
                        <p className='overline coral'>new product</p>
                        <h2 className='black'>xx99 mark II <br/>headphones</h2>
                        <p className='black50'>The new XX99 Mark II headphones is the pinnacle of pristine audio.
                        It redefines your premium headphone experience by reproducing the
                        balanced depth and precision of studio-quality sound.
                        </p>

                        <Button onClick={() => navigate('/headphones/markII')}>see product</Button>
                    </div>
                </section>

                <section className={styles.product__b}>
                    <picture className={styles.imageB}>
                        <source media="(min-width:1440px)" srcSet={markOneDesk} />
                        <source media="(min-width:768px)" srcSet={markOneTab} />
                        <img  src={markOne} alt='mark one headphones'/>
                    </picture>

                    <div className={styles.product__infoB}>
                        <h2 className='black'>xx99 mark I<br/> headphones</h2>
                        <p className='black50'>As the gold standard for headphones, the classic XX99 Mark I offers
                        detailed and accurate audio reproduction for audiophiles, mixing engineers,
                        and music aficionados alike in studios and on the go.
                        </p>

                        <Button onClick={() => navigate('/headphones/markI')}>see product</Button>
                    </div>
                </section>

                <section className={styles.product}>
                    <picture>
                        <source media="(min-width:1440px)" srcSet={xx59Desk} />
                        <source media="(min-width:768px)" srcSet={xx59Tab} />
                        <img src={xx59} alt='xx59 headphones'/>
                    </picture>

                    <div className={styles.product__info}>
                        <h2 className='black'>xx59<br/> headphones</h2>
                        <p className='black50'>Enjoy your audio almost anywhere and customize it to your specific tastes
                        with the XX59 headphones. The stylish yet durable versatile wireless headset
                        is a brilliant companion at home or on the move.
                    </p>

                        <Button onClick={() => navigate('/headphones/xx59')}>see product</Button>
                    </div>
                </section>
                <Categories />
                <BestAudio />
            </main>
        </>
    )
}

export default Headphones
