import styles from '../pages/Headphones.module.css'

function Headphones() {
    return (
        <article>

            <div className={`${styles.headphones} ${'card'} ${'bG_grey'}`}></div>
            <div className={`${styles.speakers} ${'card'} ${'bG_grey'}`}></div>
            <div className={`${styles.earphones} ${'card'} ${'bG_grey'}`}></div>


        </article>
    )
}

export default Headphones
