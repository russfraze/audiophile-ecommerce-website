import styles from './BestAudio.module.css'
import bestGear from '../assets/shared/mobile/image-best-gear.jpg'
import bestGearTab from '../assets/shared/tablet/image-best-gear.jpg'
import bestGearDesk from '../assets/shared/desktop/image-best-gear.jpg'


function BestAudio() {
    return (
        <section className={styles.bestAudio}>

            <div className={styles.bestAudio__image}>
                <picture>
                    <source media="(min-width:1440px)" srcset={bestGearDesk} />
                    <source media="(min-width:768px)" srcset={bestGearTab} />
                    <img src={bestGear} />
                </picture>
            </div>

            <div className={`${styles.bestAudio__text} ${'flex_group_column'}`}>
                <h2 className='black'>Bringing you the <span className={styles.wordPop}>best</span> audio gear</h2>
                <p className='black50'> Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of our products. Stop by our store
                to meet some of the fantastic people who make Audiophile the best place to buy your portable
                    audio equipment.</p>
            </div>

        </section>
    )
}

export default BestAudio
