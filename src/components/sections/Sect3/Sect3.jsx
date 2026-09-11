import styles from './Sect3.module.css'
import SwapBtn from '../../common/SwapBtn/SwapBtn.jsx'
import ProductCards from '../../common/ProductCards/ProductCards.jsx'
import { useState, useEffect } from 'react'


function Sect3() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const cards = [
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: '/IceCream/src/assets/bread1.png'
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: '/IceCream/src/assets/bread2.png'
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: '/IceCream/src/assets/bread3.png'
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: '/IceCream/src/assets/bread4.png'
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: '/IceCream/src/assets/bread5.png'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 4));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    console.log('Оновлений currentIndex:', currentIndex);
  }, [currentIndex]);
  return (
    <>
        <section className={`${styles.section3} container-fluid col-12 d-flex flex-column position-relative gap-5`}>
            <h1 className={`${styles.title}`}>Our Product</h1>
            <div className={`d-flex gap-3 ${styles.swapper}`} role="group" aria-label="Product swapper">
              <SwapBtn src="/IceCream/src/assets/left.png" alt="left" onClick={handlePrev} />
              <SwapBtn src="/IceCream/src/assets/right.png" alt="right" onClick={handleNext} />
            </div>
            <ProductCards cards={cards} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </section>
    </>
  )
}

export default Sect3