import styles from './NavDropdown.module.css'
import Modal from '../UI/Modal'

import Zx9Thumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesOne from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesCase from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import ShopBtn from '../UI/ShopBtn'

function NavDropdown() {
    return (
        <Modal isNavDrop={true} isCart={false} isThank={false}>
            <article className={styles.categories}>
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


            </article>
        </Modal>
    )
}

export default NavDropdown
