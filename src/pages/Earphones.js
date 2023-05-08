import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './Earphones.module.css'
import yx1 from '../assets/product-yx1-earphones/mobile/image-product.jpg'
import yx1Tab from '../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import yx1Desk from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import Button from '../UI/Button'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'


function Earphones() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[])

    return (
        <>
            <header className={styles.earphonesHeader}>
                <h2>earphones</h2>
            </header>

            <main className={styles.earphones}>

                <section className={styles.product}>
                    <picture>
                        <source media="(min-width:1440px)" srcset={yx1Desk} />
                        <source media="(min-width:768px)" srcset={yx1Tab} />
                        <img src={yx1} alt='yx1 earphones'/>
                    </picture>

                    <div className={styles.product__info}>
                        <p className='overline coral'>new product</p>
                        <h2 className='black'>yx1 wireless earphones</h2>
                        <p className='black50'>Tailor your listening experience with bespoke dynamic drivers from the new
                        YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy
                        environments with its active noise cancellation feature.
                        </p>
                        <Button onClick={() => navigate('/earphones/yx1')}>see product</Button>
                    </div>
                </section>
                <Categories />
                <BestAudio />

            </main>

        </>
    )
}

export default Earphones
