import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle'

function Navbar() {
   const links = [
    {
        id: 1,
        name: 'home',
        url: '/'
    },
    {
        id: 2,
        name: 'Menu',
        url: '/menu'
    },
    {
        id: 3,
        name: 'Contact',
        url: '/contact'
    }
   ]
  return (
    <div className={styles.navContainer}>
        <Link href={'/'} className={styles.logo}>
            La Carravana
        </Link>
            
        <div className={styles.navLinks}>
          <DarkModeToggle/>
        {links.map((link) => (
          <Link href={link.url}>{link.name}</Link>
        ))}
        </div>
    </div>
  )
}

export default Navbar