import styles from './Header.module.css'

function Header() {
  return (
    <>
        <header className={`container-fluid col-12 d-flex justify-content-between align-items-center gap-3`}>
            <img className={`${styles.logo}`} src="/IceCream/src/assets/logo.png" alt="Logo" />

            <nav>
                <ul className={`d-flex gap-5 ${styles.navLinks}`} role="navigation" aria-label="Main navigation">
                    <li><a href="#Main">Main</a></li>
                    <li><a href="#AboutUs">About Us</a></li>
                    <li><a href="#Trainers">Trainers</a></li>
                    <li><a href="#App">App</a></li>
                </ul>
            </nav>

            <div className={`d-flex gap-3`} role="group" aria-label="Social media links">
                <button className={`${styles.mediaBtn}`}><img src="/IceCream/src/assets/instagram.png" alt="Instagram" /></button>
                <button className={`${styles.mediaBtn}`}><img src="/IceCream/src/assets/facebook.png" alt="Facebook" /></button>
                <button className={`${styles.mediaBtn}`}><img src="/IceCream/src/assets/twitter.png" alt="Twitter" /></button>
                <button className={`${styles.mediaBtn}`}><img src="/IceCream/src/assets/youtube.png" alt="YouTube" /></button>
            </div>
        </header>
    </>
  )
}

export default Header