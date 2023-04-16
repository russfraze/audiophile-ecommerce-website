import styles from './Home.module.css'
import Button from '../UI/Button'
import ShopBtn from '../UI/ShopBtn'
import headerImage from '../assets/home/mobile/image-header.jpg'
import headerImageTab from '../assets/home/tablet/image-header.jpg'
import earphones from '../assets/home/mobile/image-earphones-yx1.jpg'
import earphonesTab from '../assets/home/tablet/image-earphones-yx1.jpg'
import speakerZx7 from '../assets/home/mobile/image-speaker-zx7.jpg'
import speakerZx7Tab from '../assets/home/tablet/image-speaker-zx7.jpg'
import speakerZx9 from '../assets/home/mobile/image-speaker-zx9.png'

import Zx9Thumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import circles from '../assets/home/desktop/pattern-circles.svg'
import BestAudio from '../components/BestAudio'
import Categories from '../components/Categories'


function Home() {


    return (
        <>
            <header className={`${styles.headerImage} `}>
                <picture>
                    <source media="(min-width:768px)" srcset={headerImageTab} />
                    <img className={styles.headerImage__hide} src={headerImage} />
                </picture>
                <div className={`${styles.headerImage_content} ${'flex_group_column'}`}>
                    <p className='overline'>New product</p>
                    <h1>XX99 Mark II Headphones</h1>
                    <p className={`${styles.footerBody} ${'white75'}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button className={'buttonMain'}>see product</Button>
                </div>

            </header>

            <main>

                <Categories />

                {/* <article>
                <div className={styles.container}>
                    <div className={`${styles.headphones} ${'bG_grey'} ${'flex_group_column'}`}>
                        <img className={styles.headphonesImage} src={headphonesOne} />
                        <h6 className='black'>headphones</h6>
                        <ShopBtn />
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.speakers} ${'bG_grey'} ${'flex_group_column'}`}>
                        <img className={styles.speakersImage} src={Zx9Thumb} />
                        <h6 className='black'>speakers</h6>
                        <ShopBtn />
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.earphones} ${'bG_grey'} ${'flex_group_column'}`}>
                        <img className={styles.earphonesCase} src={earphonesCase} />
                        <h6 className='black'>earphones</h6>
                        <ShopBtn />
                    </div>
                </div>


            </article> */}


                <div className={`${styles.zx9Speaker} ${'card'} ${'bG_coral'}`}>
                    <div className={`${styles.zx9Speaker__content} ${'flex_group_column'}`}>
                        <img className={styles.zx9Speaker__image} src={speakerZx9} />
                        <h1>zx9<br />speaker</h1>
                        <img className={styles.circles} src={circles} />
                        <p className={`${styles.zx9Body} ${'white75'}`}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <Button rev={true} >see product</Button>
                    </div>
                </div>


                <div className={`${styles.zx7Speaker}`}>
                    <picture>
                        <source media="(min-width:768px)" srcset={speakerZx7Tab} />
                        <img src={speakerZx7} />
                    </picture>
                    <div className={styles.zx7Speaker__content}>
                        <h4>zx7 speaker</h4>
                        <Button alt={true}>see product</Button>
                    </div>
                </div>

                <section className={styles.yx1earphones}>

                    <picture className={styles.earphonesImage}>
                        <source media="(min-width:768px)" srcset={earphonesTab} />
                        <img src={earphones} />
                    </picture>

                    <div className={`${styles.earphones__content} ${'card'} ${'bG_grey'}`}>
                        <h4>YX1 earphones</h4>
                        <Button alt={true}>see product</Button>
                    </div>

                </section>

                <BestAudio />
            </main>
        </>
    )
}

export default Home
