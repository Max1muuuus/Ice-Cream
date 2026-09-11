import styles from './Sect3.module.css'
import SwapBtn from '../../common/SwapBtn/SwapBtn.jsx'
import ProductCards from '../../common/ProductCards/ProductCards.jsx'
import { useState, useEffect } from 'react'
import bread1 from '../../../assets/bread1.png'
import bread2 from '../../../assets/bread2.png'
import bread3 from '../../../assets/bread3.png'
import bread4 from '../../../assets/bread4.png'
import bread5 from '../../../assets/bread5.png'
import left from '../../../assets/left.png'
import right from '../../../assets/right.png'

function Sect3() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: bread1
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: bread2
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: bread3
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: bread4
    },
    {
      title: 'Brown bread',
      text: 'Bon Au Pain is a pioneer in the\nhealthy fast food scene.Bon',
      price: 19.55,
      lastPrice: 22.55,
      src: bread5
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
              <SwapBtn src={left} alt="left" onClick={handlePrev} />
              <SwapBtn src={right} alt="right" onClick={handleNext} />
            </div>
            <ProductCards cards={cards} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </section>
    </>
  )
}

export default Sect3