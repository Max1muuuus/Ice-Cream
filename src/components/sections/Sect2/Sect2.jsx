import styles from "./Sect2.module.css";

function Sect2() {
  return (
    <>
      <section
        className={`container-fluid col-12 d-flex justify-content-center align-items-center`}
      >
        <div
          className={`${styles.Sect2} d-flex justify-content-center align-items-center`}
        >
          <p className={`${styles.text} position-relative text-center`}>
            Porem ipsum dolor sit amet, consectetur <br />
            adipiscing elit.{" "}
            <span className={`${styles.highlight}`}>
              Nunc vulputate libero et velit
              <br />
              interdum, ac aliquet odio mattis. Class aptent <br />
              taciti sociosqu ad litora torquent
            </span>{" "}
            per conubia <br />
            nostra, per inceptos himenaeos.
            <img
              className={`position-absolute z-2`}
              style={{ right: "120px", top: "-60px" }}
              src="/IceCream/src/assets/pistachio.png"
              alt="pistachio"
            />
            <img
              className={`position-absolute z-2`}
              style={{ right: "534px", bottom: "0" }}
              src="/IceCream/src/assets/strawberry.png"
              alt="strawberry"
            />
            <img
              className={`position-absolute z-2`}
              style={{ left: "33px", bottom: "85px" }}
              src="/IceCream/src/assets/milk.png"
              alt="milk"
            />
          </p>
        </div>
      </section>
    </>
  );
}

export default Sect2;
