'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function Menu({params}) {

  const [singleProduct, setSingleProduct] = useState(null)
  const [loading, setLoading] = useState('false')

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then(resp => resp.json())
      .then((result) => {setSingleProduct(result), setLoading('true')})
  }, [])

  console.log('this is blog item', singleProduct)

  return (
    <div className={styles.mainCont}>
      {loading === "false" && <div>Please wait...</div>}

      {singleProduct && <div className={styles.container}>
        <Image className={styles.image} src={'/food.png'} width={500} height={350}/>
        <h1 className={styles.title}>{singleProduct.title}</h1>
        <p className={styles.desc}>{singleProduct.description}</p>
        </div>}
    </div>
  )
}

export default Menu