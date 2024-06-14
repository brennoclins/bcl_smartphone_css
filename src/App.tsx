import {
  Bars3BottomLeftIcon,
  Battery50Icon,
  ChartBarIcon,
  ShoppingBagIcon,
  StarIcon,
  WifiIcon,
} from '@heroicons/react/24/outline'

import styles from './smartphone.module.css'
import { ShowTime } from './utils/currentTime'
export function App() {
  const currentTime = ShowTime()

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

            <div className={styles.phoneBottom}>
              <div className={styles.bottomSpeaker}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className={styles.phoneCharger}></div>

              <div className={`${styles.bottomSpeaker} ${styles.right}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className={styles.phoneScreen}></div>

          <div className={styles.phoneDisplay}>
            <div className={styles.phoneNotch}>
              <div className={styles.phoneSpeaker}></div>
            </div>

            <div className={styles.displayContent}>
              <div className={styles.notificationsBar}>
                <div className={styles.time}>
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className={styles.notificationsBarIcon}>
                  <ChartBarIcon />
                  <WifiIcon />
                  <Battery50Icon />
                </div>
              </div>

              <div className={styles.nav}>
                <Bars3BottomLeftIcon className={styles.menu} />
                <ShoppingBagIcon className={styles.shoppingBag} />
              </div>
              <section className={styles.productImage}>
                <div>
                  <img src="/imgs/tara.jpg" alt="" />
                </div>
              </section>

              <section className={styles.contentBox}>
                <div className={styles.contentBoxContainer}>
                  <div className={styles.contentHeader}>
                    <h4>Bikini Bubaaman Surf</h4>
                    <h2>Bubaaman</h2>
                    <div>
                      <span>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </span>{' '}
                      97% visualizações
                    </div>
                  </div>
                  <div className={styles.description}>
                    <p>
                      Este elegante bikini foi projetado especialmente para as
                      surfistas que desejam combinar proteção e estilo. Com
                      detalhes cuidadosamente pensados, ele oferece o equilíbrio
                      perfeito entre funcionalidade e feminilidade.
                    </p>
                  </div>

                  <div className={styles.productSize}>
                    <h4>Tamanhos</h4>
                    <ul>
                      <li>PP</li>
                      <li>P</li>
                      <li>M</li>
                      <li>G</li>
                      <li>GG</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
