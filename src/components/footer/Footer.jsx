import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.footerContainer}>
        <span>@All rights reserved</span>
        <div className={styles.footerLinks}>
          <Link href={'https://www.facebook.com/'} target={'_blank'}>
            <Image
             src={'/facebook.png'}
             width={35}
             height={35}
             alt='facebook'
             className={styles.logo}
            />
          </Link>
          <Link href={'https://www.instagram.com'} target={'_blank'}>
            <Image
             src={'/instagram.png'}
             width={35}
             height={35}
             alt='instagram'
             className={styles.logo}
            />
          </Link>
          <Link href={'https://www.x.com'} target={'_blank'}> 
            <Image
             src={'/twitter.png'}
             width={35}
             height={35}
             alt='twitter'
             className={styles.logo}
            />
          </Link>
          <Link href={'https://www.youtube.com'} target={'_blank'}>
            <Image
             src={'/youtube.png'}
             width={35}
             height={35}
             alt='youtube'
             className={styles.logo}
            />
          </Link>
        </div>
    </div>
  )
}

export default Footer