'use client'
import React, { useContext, useState } from 'react'
import styles from './darkModeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/app/context/ThemeContext'


function DarkModeToggle() {
  const {toggle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        {/* <div className={styles.icon}><Image src={'/moon.png'} width={15} height={15}/></div>
        <div className={styles.icon}><Image src={'/sun.png'}  width={15} height={15}/></div> */}
        <div className={styles.ball}
        style={mode === 'dark' ? {right: '2px', backgroundColor: 'white'} : {left : '2px', backgroundColor: 'black' }}/>
    </div>
  )
}

export default DarkModeToggle