import styles from '../pages/Headphones.module.css'

import markTwo from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import markOne from '../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import xx59 from '../assets/product-xx59-headphones/mobile/image-product.jpg'
import BestAudio from '../components/BestAudio'
import Button from '../UI/Button'






function Headphones() {
    return (
        <>
        <header>
            <h2>headphones</h2>
        </header>
        <main>
            <img src={markTwo} />
            <p>new product</p>
            <h2>xx99 mark II headphones</h2>
            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                It redefines your premium headphone experience by reproducing the 
                balanced depth and precision of studio-quality sound.
                </p>

            <Button>see product</Button>

            <img src={markOne} />
            <h2>xx99 mark I headphones</h2>
            <p>As the gold standard for headphones, the classic XX99 Mark I offers 
                detailed and accurate audio reproduction for audiophiles, mixing engineers, 
                and music aficionados alike in studios and on the go.
                </p>

            <Button>see product</Button>

            <img src={xx59} />
            <h2>xx59 headphones</h2>
            <p>Enjoy your audio almost anywhere and customize it to your specific tastes 
                with the XX59 headphones. The stylish yet durable versatile wireless headset 
                is a brilliant companion at home or on the move.
                </p>

            <Button>see product</Button>

            <BestAudio />
        </main>
        </>
    )
}

export default Headphones
