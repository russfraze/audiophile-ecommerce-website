import styles from './Earphones.module.css'
import { useNavigate } from 'react-router-dom'
import yx1 from '../assets/product-yx1-earphones/mobile/image-product.jpg'
import Button from '../UI/Button'
import Categories from '../components/Categories'
import BestAudio from '../components/BestAudio'


function Earphones() {
    const navigate = useNavigate()

    return (
        <>
            <header>
                <h2>earphones</h2>
            </header>

            <main>
                <img src={yx1} />
                <p>new product</p>
                <h2>yx1 wireless earphones</h2>
                <p>Tailor your listening experience with bespoke dynamic drivers from the new 
                    YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy 
                    environments with its active noise cancellation feature.
                </p>
                <Button onClick={() => navigate('/earphones/yx1')}>see product</Button>

                <Categories />
                <BestAudio />

            </main>

        </>
    )
}

export default Earphones
