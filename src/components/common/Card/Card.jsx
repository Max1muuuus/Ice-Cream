import styles from './Card.module.css'

function Card({title, text, price, lastPrice, src, currentIndex, setCurrentIndex}) {
  return (
    <>
        <div className={`d-flex flex-column ${styles.card}`} style={{ transform: `translateX(-${currentIndex * (297+16)}px` }} >
            <img src={src} alt="Product" />
            <div className={`d-flex gap-2 flex-column ${styles.cardInfo}`}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
                <div className={`d-flex gap-2 align-items-center ${styles.cardPrice}`}>
                    <span className={styles.currentPrice}>${price.toFixed(2)}</span>
                    <span className={styles.lastPrice}><s>${lastPrice.toFixed(2)}</s></span>
                </div>
                <button className={styles.cardBtn}>Buy Now</button>
            </div>
        </div>
    </>
  )
}

export default Card