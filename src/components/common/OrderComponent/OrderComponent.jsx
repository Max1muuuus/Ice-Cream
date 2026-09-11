import styles from './OrderComponent.module.css'

function OrderComponent({steps}) {
    const isLastStep = (index) => index === steps.length - 1;
    return (
        <div className={`d-flex flex-column gap-3`}>
        {steps.map((step, index) => (
            <div key={index} className={`d-flex align-items-center gap-3 ${isLastStep(index) ? '' : styles.useAfter}`}>
                <p className={`d-flex align-items-center justify-content-center ${styles.stepNumber}`}>{index+1}</p>
                <p className={styles.stepDescription}>{step}</p>
            </div>
        ))}
        </div>
    );
}

export default OrderComponent;