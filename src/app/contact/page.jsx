import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
function Contact() {
  return (
    <div className={styles.mainCont}>
        <h1>CONTACT US:</h1>
        <Link href="tel: +21923400340">mobile: +995555555555</Link>
        <p>Email: example@gmail.com</p>
    </div>
  )
}

export default Contact