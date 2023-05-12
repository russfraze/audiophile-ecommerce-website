import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import Button from '../UI/Button'
import headerImage from '../assets/home/mobile/image-header.jpg'
import headerImageTab from '../assets/home/tablet/image-header.jpg'
import headerImageDesk from '../assets/home/desktop/image-hero.jpg'
import earphones from '../assets/home/mobile/image-earphones-yx1.jpg'
import earphonesTab from '../assets/home/tablet/image-earphones-yx1.jpg'
import earphonesDesk from '../assets/home/desktop/image-earphones-yx1.jpg'
import speakerZx7 from '../assets/home/mobile/image-speaker-zx7.jpg'
import speakerZx7Tab from '../assets/home/tablet/image-speaker-zx7.jpg'
import speakerZx7Desktop from '../assets/home/desktop/image-speaker-zx7.jpg'
import speakerZx9 from '../assets/home/mobile/image-speaker-zx9.png'
import speakerZx9Desktop from '../assets/home/desktop/image-speaker-zx9.png'
import circles from '../assets/home/desktop/pattern-circles.svg'
import BestAudio from '../components/BestAudio'
import Categories from '../components/Categories'


function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            <header className={styles.headerImage}>
                <picture>
                    <source media="(min-width:1440px)" srcSet={headerImageDesk} />
                    <source media="(min-width:768px)" srcSet={headerImageTab} />
                    <img className={styles.headerImage__hide} src={headerImage} alt='Mark 2 headphones' />
                </picture>
                <div className={styles.header_center}>
                    <div className={styles.headerImage_content}>
                        <p className='overline'>New product</p>
                        <h1>XX99 Mark II Headphones</h1>
                        <p className={`${styles.headerBody} ${'white75'}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Button className={'buttonMain'} onClick={() => navigate('/headphones/markII')}>see product</Button>
                    </div>
                </div>

            </header>

            <main>

                <Categories />

                <div className={`${styles.zx9Speaker} ${'card'} ${'bG_coral'}`}>
                    <div className={styles.zx9Speaker__content}>
                        <picture>
                            <source media="(min-width:1440px)" srcSet={speakerZx9Desktop} />
                            <img className={styles.zx9Speaker__image} src={speakerZx9} alt='zx9 speaker' />
                        </picture>
                        <div className={styles.zx9Speaker__Txt}>
                            <h1>zx9<br />speaker</h1>
                            <p className={'white75'}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Button rev={true} onClick={() => navigate('/speakers/zx9')} >see product</Button>
                        </div>
                        <img className={styles.circles} src={circles} alt='' />
                    </div>
                </div>


                <div className={`${styles.zx7Speaker}`}>
                    <picture>
                        <source media="(min-width:1440px)" srcSet={speakerZx7Desktop} />
                        <source media="(min-width:768px)" srcSet={speakerZx7Tab} />
                        <img src={speakerZx7} alt='zx7 speaker' />
                    </picture>
                    <div className={styles.zx7Speaker__content}>
                        <h4>zx7 speaker</h4>
                        <Button alt={true} onClick={() => navigate('/speakers/zx7')}>see product</Button>
                    </div>
                </div>

                <section className={styles.yx1earphones}>

                    <picture className={styles.earphonesImage}>
                        <source media="(min-width:1440px)" srcSet={earphonesDesk} />
                        <source media="(min-width:768px)" srcSet={earphonesTab} />
                        <img src={earphones} alt='yx1 earphones' />
                    </picture>

                    <div className={`${styles.earphones__content} ${'card'} ${'bG_grey'}`}>
                        <h4>YX1 earphones</h4>
                        <Button alt={true} onClick={() => navigate('/earphones/yx1')}>see product</Button>
                    </div>

                </section>

                <BestAudio />
            </main>
        </>
    )
}

export default Home
