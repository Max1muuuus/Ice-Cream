import styles from "./Sect1.module.css";
import sect1Image from '../../../assets/sect1-img.png'

function Sect1() {
  return (
    <>
      <section
        className={`container-fluid col-12 d-flex justify-content-between align-items-center gap-3`}
      >
        <div className={`col-6 d-flex flex-column`}>
          <p className={`${styles.subtitle}`}>Sweet fun, full of milk.</p>
          <h1 className={`${styles.title}`}>
            Feel inside cold with
            <br />
            our delicious{" "}
            <span className={`${styles.highlight}`}>ice-cream</span>
          </h1>
          <p className={`${styles.text}`}>
            Some food has looked so awful that it's looked like something that
            the
            <br />
            dog's brought home, yet after one mouthful I've been left eating my
            <br />
            thoughts, my words.
          </p>
          <button
            className={`d-flex align-items-center justify-content-center ${styles.orderbtn}`}
          >
            Buy Now
          </button>
        </div>
        <img className={`col-6`} src={sect1Image} alt="IMG" />
      </section>
    </>
  );
}

export default Sect1;
