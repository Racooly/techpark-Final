import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <span>@All rights reserved</span>
        <div className={styles.footerLinks}>
            <Image
             src={'/facebook.png'}
             width={35}
             height={35}
             alt='facebook'
             className={styles.logo}
            />
            <Image
             src={'/instagram.png'}
             width={35}
             height={35}
             alt='instagram'
             className={styles.logo}
            />
            <Image
             src={'/twitter.png'}
             width={35}
             height={35}
             alt='twitter'
             className={styles.logo}
            />
            <Image
             src={'/youtube.png'}
             width={35}
             height={35}
             alt='youtube'
             className={styles.logo}
            />
        </div>
    </div>
  )
}

export default Footer