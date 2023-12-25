import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

function Button({title, url}) {
  return (
   <Link href={`${url}`}>
    <button className={styles.button}>{title}</button>
    <p>fdsdfsdf</p>
   </Link> 
   
  )
}

export default Button