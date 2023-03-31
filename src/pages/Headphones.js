import styles from '../pages/Headphones.module.css'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakerZx9 from '../assets/home/mobile/image-speaker-zx9.png'

function Headphones() {
    return (
        <article>
            <div className={styles.container}>
                <img className={styles.headphonesImage} src={headphonesOne} />
                <div className={`${styles.headphones} ${'bG_grey'}`}></div>
            </div>
            <div className={styles.container}>
                <img className={styles.speakersImage} src={speakerZx9} />
                <div className={`${styles.speakers} ${'bG_grey'}`}></div>
            </div>
            <div className={styles.container}>
                <img className={styles.earphonesCase} src={earphonesCase} />
                <div className={`${styles.earphones} ${'bG_grey'}`}></div>
            </div>


        </article>
    )
}

export default Headphones
