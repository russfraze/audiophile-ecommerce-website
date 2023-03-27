import styles from './Home.module.css'
import Button from '../UI/Button'
import ShopBtn from '../UI/ShopBtn'
import headerImage from '../assets/home/mobile/image-header.jpg'
import bestGear from '../assets/shared/mobile/image-best-gear.jpg'
import earphones from '../assets/home/mobile/image-earphones-yx1.jpg'
import speakerZx7 from '../assets/home/mobile/image-speaker-zx7.jpg'
import speakerZx9 from '../assets/home/mobile/image-speaker-zx9.png'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import circles from '../assets/home/desktop/pattern-circles.svg'


function Home() {


    return (
        <div>
            <header className={`${styles.headerImage} `}>
                <img className={styles.headerImage__hide} src={headerImage} />
                <div className={`${styles.headerImage_content} ${'flex_group_column'}`}>
                    <p className='overline'>New product</p>
                    <h1>XX99 Mark II Headphones</h1>
                    <p className='white75'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button className={'buttonMain'}>see product</Button>
                </div>

            </header>

            <div className={styles.categories}>

                <div className={`${styles.categories__headphones} ${'card'} ${'bG_grey'} ${'flex_group_column'}`}>
                    <img className={styles.headphonesImage} src={headphonesOne} />
                    <h6>headphones</h6>
                    <ShopBtn />
                </div>

                <div className={`${styles.speakers} ${'card'} ${'bG_grey'} ${'flex_group_column'}`}>
                    <img className src={speakerZx9} />
                    <h6>speakers</h6>
                    <ShopBtn />
                </div>

                <div className={`${styles.earphones} ${'card'} ${'bG_grey'} ${'flex_group_column'}`}>
                    <img src={earphonesCase} />
                    <h6>earphones</h6>
                    <ShopBtn />
                </div>

            </div>

            <div className={`${styles.zx9Speaker} ${'card'} ${'bG_coral'}`}>
                <img src={speakerZx9} />
                <img src={circles} />
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button>see product</Button>
            </div>

            <div className={`${styles.zx7Speaker} `}>
                <h4>zx7 speaker</h4>
                <Button alt={true}>see product</Button>
                <img src={speakerZx7} />
            </div>
            <img src={earphones} />

            <div className='card'>
                <h4>YX1 earphones</h4>
                <Button alt={true}>see product</Button>
            </div>
            <img className={styles.bestImage} src={bestGear} />
            <h4>Bringing you the best audio gear</h4>
            <p> Located at the heart of New York City, Audiophile is the premier store for high end headphones,
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
            rooms available for you to browse and experience a wide range of our products. Stop by our store
            to meet some of the fantastic people who make Audiophile the best place to buy your portable
            audio equipment.</p>
        </div>

    )
}

export default Home
