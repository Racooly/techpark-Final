import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainText}><span className={styles.border}>La Carravana</span></h1>
     <div className={styles.prc}> 
      <p className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      doloribus quas dignissimos minima nostrum nemo soluta nesciunt quisquam! Beatae est itaque aspernatur.
      </p>
     </div>

     <section className={styles.About}>
          <div className={styles.textSide}>
            <span className={styles.aboutTitle}>About us</span>
            <p className={styles.aboutDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <Button title={'READ MORE'} url={'/about'}/>
          </div>
          <Image
          src={'/restaurant.png'}
          width={513}
          height={598}
          />

     </section>
    </main>
  )
}
