import styles from '../pages/Headphones.module.css'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakerZx9 from '../assets/home/mobile/image-speaker-zx9.png'
import ShopBtn from '../UI/ShopBtn'

function Headphones() {
    return (
        <article>
            <div className={styles.container}>
                <div className={`${styles.headphones} ${'bG_grey'} ${'flex_group_column'}`}>
                    <img className={styles.headphonesImage} src={headphonesOne} />
                    <h6>headphones</h6>
                    <ShopBtn />
                </div>
            </div>
            <div className={styles.container}>
                <div className={`${styles.speakers} ${'bG_grey'} ${'flex_group_column'}`}>
                    <img className={styles.speakersImage} src={speakerZx9} />
                    <h6>speakers</h6>
                    <ShopBtn />
                </div>
            </div>
            <div className={styles.container}>
                <div className={`${styles.earphones} ${'bG_grey'} ${'flex_group_column'}`}>
                    <img className={styles.earphonesCase} src={earphonesCase} />
                    <h6>earphones</h6>
                    <ShopBtn />
                </div>
            </div>


        </article>
    )
}

export default Headphones
