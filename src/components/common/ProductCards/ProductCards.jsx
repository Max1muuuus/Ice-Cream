import styles from './ProductCards.module.css'
import { useState } from 'react'
import Card from '../Card/Card.jsx'

function ProductCards({ cards = [], currentIndex, setCurrentIndex }) {
  return (
    <>
        <div className={`d-flex ${styles.cards}`} role="group" aria-label="Product cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                text={card.text}
                price={card.price}
                lastPrice={card.lastPrice}
                src={card.src}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            ))}
        </div>
    </>
  )
}

export default ProductCards