import styles from './Speakers.module.css'
import { useNavigate } from 'react-router-dom'
import zx9 from '../assets/product-zx9-speaker/mobile/image-product.jpg'
import zx7 from '../assets/product-zx7-speaker/mobile/image-product.jpg'
import Button from '../UI/Button'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'

function Speakers() {
    const navigate = useNavigate()

    return (
        <>
            <header className={styles.speakersHeader}>
                <h2>speakers</h2>
            </header>
            <main>
                <img src={zx9} />
                <p>new product</p>
                <h2>zx9 speaker</h2>
                <p>Upgrade your sound system with the all new ZX9 active speaker. 
                    It’s a bookshelf speaker system that offers truly wireless connectivity -- 
                    creating new possibilities for more pleasing and practical audio setups.
                </p>
                <Button onClick={() => navigate('/speakers/zx9')}>see product</Button>

                <img src={zx7} />
                <h2>zx7 speaker</h2>
                <p>Stream high quality sound wirelessly with minimal loss. 
                    The ZX7 bookshelf speaker uses high-end audiophile components that represents 
                    the top of the line powered speakers for home or studio use.
                </p>
                <Button onClick={() => navigate('/speakers/zx7')}>see product</Button>
                <Categories />
                <BestAudio />
            </main>
        </>
    )
}

export default Speakers
