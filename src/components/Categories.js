import { useNavigate } from 'react-router-dom'
import styles from './Categories.module.css'
import Zx9Thumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import ShopBtn from '../UI/ShopBtn'

function Categories() {
    const navigate = useNavigate()
    return (
        <article className={styles.categories}>
                <div className={styles.container} onClick={() => navigate('/headphones')}>
                    <div className={`${styles.headphones} ${'bG_grey'} ${'flex_group_column'}`}>
                        <img className={styles.headphonesImage} src={headphonesOne} alt='headphones'/>
                        <h6 className='black'>headphones</h6>
                        <ShopBtn />
                    </div>
                </div>
                <div className={styles.container} onClick={() => navigate('/speakers')}>
                    <div className={`${styles.speakers} ${'bG_grey'} ${'flex_group_column'}`}>
                        <img className={styles.speakersImage} src={Zx9Thumb} alt='speakers'/>
                        <h6 className='black'>speakers</h6>
                        <ShopBtn />
                    </div>
                </div>
                <div className={styles.container} onClick={() => navigate('/earphones')}>
                    <div className={`${styles.earphones} ${'bG_grey'} ${'flex_group_column'}`}>
                        <img className={styles.earphonesCase} src={earphonesCase} alt='earphones'/>
                        <h6 className='black'>earphones</h6>
                        <ShopBtn />
                    </div>
                </div>


            </article>
    )
}

export default Categories
