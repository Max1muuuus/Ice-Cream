import styles from './Sect5.module.css'


function Sect5() {
  return (
    <>
        <section className={`container-fluid d-flex flex-column align-items-center justify-content-center col-12 gap-3 ${styles.section5}`} role="group" aria-label="Have Question">
            <h1 className={`text-center ${styles.title}`}>
                <span className={`${styles.highlight}`}>Have Question</span> in Mind?<br />
                Let us help you
            </h1>
            <div className={`justify-content-center ${styles.inputGroup}`} role="group" aria-label="Input group">
                <input type="text" className={`${styles.inputQuestion}`} placeholder="Enter your question" />
                <button className={`${styles.sendButton}`}>Send</button>
            </div>
        </section>
    </>
  )
}

export default Sect5