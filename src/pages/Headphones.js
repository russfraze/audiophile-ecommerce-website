import styles from '../pages/Headphones.module.css'
import { useNavigate } from 'react-router-dom'
import markTwo from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import markOne from '../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import xx59 from '../assets/product-xx59-headphones/mobile/image-product.jpg'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'
import Button from '../UI/Button'






function Headphones() {

    const navigate = useNavigate()

    return (
        <>
            <header className={styles.headphonesHeader}>
                <h2>headphones</h2>
            </header>
            <main className={styles.headphones}>

                <section className={styles.product}>
                    <picture>
                        <source media="(min-width:1440px)" srcset={''} />
                        <source media="(min-width:768px)" srcset={''} />
                        <img src={markTwo} />
                    </picture>

                    <div className={styles.product__info}>
                        <p className='overline coral'>new product</p>
                        <h2 className='black'>xx99 mark II headphones</h2>
                        <p className='black50'>The new XX99 Mark II headphones is the pinnacle of pristine audio.
                        It redefines your premium headphone experience by reproducing the
                        balanced depth and precision of studio-quality sound.
                        </p>

                        <Button onClick={() => navigate('/headphones/markII')}>see product</Button>
                    </div>
                </section>

                <section className={styles.product}>
                    <picture>
                        <source media="(min-width:1440px)" srcset={''} />
                        <source media="(min-width:768px)" srcset={''} />
                        <img src={markOne} />
                    </picture>

                    <div className={styles.product__info}>
                        <h2 className='black'>xx99 mark I headphones</h2>
                        <p className='black50'>As the gold standard for headphones, the classic XX99 Mark I offers
                        detailed and accurate audio reproduction for audiophiles, mixing engineers,
                        and music aficionados alike in studios and on the go.
                    </p>

                        <Button onClick={() => navigate('/headphones/markI')}>see product</Button>
                    </div>
                </section>

                <section className={styles.product}>
                    <picture>
                        <source media="(min-width:1440px)" srcset={''} />
                        <source media="(min-width:768px)" srcset={''} />
                        <img src={xx59} />
                    </picture>

                    <div className={styles.product__info}>
                        <h2 className='black'>xx59 headphones</h2>
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
