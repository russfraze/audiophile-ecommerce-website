import styles from './Home.module.css'
import Button from '../UI/Button'
import headerImage from '../assets/home/mobile/image-header.jpg'
import bestGear from '../assets/shared/mobile/image-best-gear.jpg'
import earphones from '../assets/home/mobile/image-earphones-yx1.jpg'
import speakerZx7 from '../assets/home/mobile/image-speaker-zx7.jpg'


function Home() {


    return (
        <div>
            <div className={`${styles.headerImage} ${'flex_group_column'}`}>
                <img className={styles.hideImage} src={headerImage} />
                <div className={styles.headerImage_content}>
                    <p className='overline'>New product</p>
                    <h3>XX99 Mark II Headphones</h3>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button className={'buttonMain'}>see product</Button>
                </div>

            </div>
            <img src={speakerZx7}/>
            <img src={earphones}/>

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
