import styles from './Footer.module.css'
import logo from '../../../assets/logo.png'
import instagram from '../../../assets/instagram.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import youtube from '../../../assets/youtube.png'

function Footer() {
  return (
    <>
        <footer className={`${styles.footerBase} container-fluid d-flex align-items-center justify-content-center col-12 gap-3`} role="group" aria-label="Have Question">
            <div className={`d-flex col-12 gap-5 ${styles.spBtw}`}>
                <div>
                    <img className={`${styles.logo}`} src={logo} alt="Logo" />
                    <p className={`text-center ${styles.textFooter}`}>
                        Some food has looked so awful<br />
                        that it's looked like something<br />
                        that the dog's brought home.
                    </p>
                    <div className={`d-flex gap-3`} role="group" aria-label="Social media links">
                        <button className={`${styles.mediaBtn}`}><img src={instagram} alt="Instagram" /></button>
                        <button className={`${styles.mediaBtn}`}><img src={facebook} alt="Facebook" /></button>
                        <button className={`${styles.mediaBtn}`}><img src={twitter} alt="Twitter" /></button>
                        <button className={`${styles.mediaBtn}`}><img src={youtube} alt="YouTube" /></button>
                    </div>
                </div>
                <div className='d-flex gap-3 flex-column'>
                    <h3 className={styles.footerTitle}>MENU</h3>
                    <div className='d-flex flex-column'>
                        <a href='#' className={styles.footerBasictext}>Main</a>
                        <a href='#' className={styles.footerBasictext}>About Us</a>
                        <a href='#' className={styles.footerBasictext}>Trainers</a>
                        <a href='#' className={styles.footerBasictext}>Pricing</a>
                    </div>
                </div>
                <div className='d-flex gap-3 flex-column'>
                    <h3 className={styles.footerTitle}>CONTACTS</h3>
                    <div className='d-flex flex-column'>
                        <a href='#' className={styles.footerBasictext}>831.466.3000</a>
                        <a href='#' className={styles.footerBasictext}>info@basketball.com</a>
                    </div>
                </div>
                <div className='d-flex gap-3 flex-column'>
                    <h3 className={styles.footerTitle}>LOCATION</h3>
                    <div className='d-flex flex-column'>
                        <a href='#' className={styles.footerBasictext}>1347 Pacific Avenue, Suite 201</a>
                        <a href='#' className={styles.footerBasictext}>Santa Cruz, CA, 95060</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer