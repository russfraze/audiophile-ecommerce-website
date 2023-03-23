import styles from './Home.module.css'
import Button from '../UI/Button'
import headerImage from '../assets/home/mobile/image-header.jpg'


function Home() {


    return (

        <div className={`${styles.headerImage} ${'flex_group_column'}`}>
            <img src={headerImage} />
            <div className={styles.headerImage_content}>
                <p className='overline'>New product</p>
                <h3>XX99 Mark II Headphones</h3>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Button className={'buttonMain'}>see product</Button>
            </div>

        </div>

    )
}

export default Home
