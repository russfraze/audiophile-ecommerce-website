import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './Speakers.module.css'
import zx9 from '../assets/product-zx9-speaker/mobile/image-product.jpg'
import zx9Tab from '../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx9Desk from '../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx7 from '../assets/product-zx7-speaker/mobile/image-product.jpg'
import zx7Tab from '../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx7Desk from '../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import Button from '../UI/Button'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'

function Speakers() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            <header className={styles.speakersHeader}>
                <h2>speakers</h2>
            </header>
            <main className={styles.speakers}>

                <section className={styles.product}>
                    <picture>
                        <source media="(min-width:1440px)" srcSet={zx9Desk} />
                        <source media="(min-width:768px)" srcSet={zx9Tab} />
                        <img src={zx9} />
                    </picture>

                    <div className={styles.product__info}>
                        <p className='overline coral'>new product</p>
                        <h2 className='black'>zx9 speaker</h2>
                        <p className='black50'>Upgrade your sound system with the all new ZX9 active speaker.
                        It’s a bookshelf speaker system that offers truly wireless connectivity --
                        creating new possibilities for more pleasing and practical audio setups.
                        </p>
                        <Button onClick={() => navigate('/speakers/zx9')}>see product</Button>
                    </div>
                </section>

                <section className={styles.product__b}>
                    <picture className={styles.imageB}>
                        <source media="(min-width:1440px)" srcset={zx7Desk} />
                        <source media="(min-width:768px)" srcset={zx7Tab} />
                        <img src={zx7} />
                    </picture>

                    <div className={styles.product__infoB}>
                        <h2 className='black'>zx7 speaker</h2>
                        <p className='black50'>Stream high quality sound wirelessly with minimal loss.
                        The ZX7 bookshelf speaker uses high-end audiophile components that represents
                        the top of the line powered speakers for home or studio use.
                        </p>
                        <Button onClick={() => navigate('/speakers/zx7')}>see product</Button>
                    </div>
                </section>

                <Categories />
                <BestAudio />
            </main>
        </>
    )
}

export default Speakers
