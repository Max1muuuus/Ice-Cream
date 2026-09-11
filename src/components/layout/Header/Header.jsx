import styles from './Header.module.css'
import logo from '../../../assets/logo.png'
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import youtube from '../../../assets/youtube.png'

function Header() {
  return (
    <>
        <header className={`container-fluid col-12 d-flex justify-content-between align-items-center gap-3`}>
            <img className={`${styles.logo}`} src={logo} alt="Logo" />

            <nav>
                <ul className={`d-flex gap-5 ${styles.navLinks}`} role="navigation" aria-label="Main navigation">
                    <li><a href="#Main">Main</a></li>
                    <li><a href="#AboutUs">About Us</a></li>
                    <li><a href="#Trainers">Trainers</a></li>
                    <li><a href="#App">App</a></li>
                </ul>
            </nav>

            <div className={`d-flex gap-3`} role="group" aria-label="Social media links">
                <button className={`${styles.mediaBtn}`}><img src={instagram} alt="Instagram" /></button>
                <button className={`${styles.mediaBtn}`}><img src={facebook} alt="Facebook" /></button>
                <button className={`${styles.mediaBtn}`}><img src={twitter} alt="Twitter" /></button>
                <button className={`${styles.mediaBtn}`}><img src={youtube} alt="YouTube" /></button>
            </div>
        </header>
    </>
  )
}

export default Header