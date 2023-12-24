'use client'
import React, { useState } from 'react'
import styles from './darkModeToggle.module.css'
import Image from 'next/image'


function DarkModeToggle() {
    const [light, setLight] = useState("right")

  return (
    <div className={styles.container}
    onClick={() =>{

        if(light === "left"){
          setLight("right")
        }
        else{
          setLight("left")
        }
        
    }}>
        <div className={styles.icon}><Image src={'/moon.png'} width={15} height={15}/></div>
        <div className={styles.icon}><Image src={'/sun.png'}  width={15} height={15}/></div>
        <div className={styles.ball} style={light === 'right' ? {left: '4px'}: {right: '4px', }}/>
    </div>
  )
}

export default DarkModeToggle