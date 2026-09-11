import styles from './Sect4.module.css'
import OrderComponent from '../../common/OrderComponent/OrderComponent.jsx'


function Sect4() {
  return (
    <>
        <section className={`${styles.section4} container-fluid flex-row align-items-center col-12 d-flex`}>
            <div className={`d-flex flex-column col-5 gap-3 ${styles.instruction}`} role="group" aria-label="Product instruction">
                <h1 className={`${styles.title}`}>Simple way <span className={`${styles.highlight}`}>to order</span><br />
                your food</h1>
                <p className={`${styles.text}`}>
                    Some food has looked so awful that it's looked like<br />
                    something that the dog's brought home, yet after one <br />
                    mouthful I've been left eating my thoughts, my words.
                </p>
                <OrderComponent steps={['Select Your Food', 'Add To Cart', 'Order Your Food']} />
                <div className={`d-flex gap-3 ${styles.appGroup}`} role="group" aria-label="Get app">
                    <button className={`d-flex align-items-center justify-content-center gap-2 ${styles.appBtn}`}>
                        <img src="/IceCream/src/assets/apple.png" alt="apple" />
                        <div className={`d-flex flex-column align-items-start ${styles.appText}`}>
                            <span className={`${styles.appSub}`}>Download on the</span>
                            <span className={`${styles.appTitle}`}>App Store</span>
                        </div>
                    </button>
                    <button className={`d-flex align-items-center justify-content-center gap-2 ${styles.appBtn}`}>
                        <img src="/IceCream/src/assets/google.png" alt="google" />
                        <div className={`d-flex flex-column align-items-start ${styles.appText}`}>
                            <span className={`${styles.appSub}`}>Get it on</span>
                            <span className={`${styles.appTitle}`}>Play Store</span>
                        </div>
                    </button>
                </div>
            </div>
            <img className={`col-7`} src="/IceCream/src/assets/sect4.png" alt="sect4" />
        </section>
    </>
  )
}

export default Sect4