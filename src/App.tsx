import styles from './smartphone.module.css'
export function App() {
  return (
    <main className={styles.container}>
      <section className={styles.bclsmartphone}>
        <div className={styles.backgroundPanels}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.phone}>
          <div className={styles.phoneBack}>
            <div className={styles.phoneLeftSide}>
              <div className={styles.phoneAntena}></div>
              <div className={`${styles.phoneButton} ${styles.top}`}></div>
              <div className={styles.phoneButton}></div>
              <div className={`${styles.phoneButton} ${styles.bottom}`}></div>
              <div className={`${styles.phoneAntena} ${styles.bottom}`}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
