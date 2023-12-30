'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

function Menu({params}) {

  const [singleProduct, setSingleProduct] = useState(null)
  const [loading, setLoading] = useState('false')
  const [singlePost, setSinglePost] = useState({})
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState("")

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(resp => resp.json())
      .then((result) => {
        setSingleProduct(result),
        setLoading('true'),
        setSinglePost(result);
        setTitle(result.title);
        setDesc(result.body);
        setUserId(result.userId);
      })
  }, [])


  const editProduct = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: singlePost.id,
        title,
        body: desc,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();
    setSingleProduct(data)
  };
  const deleteProduct = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {method: 'DELETE'})
    setSingleProduct({})
  }





  return (
    <div className={styles.mainCont}>
      {loading === "false" && <div>Please wait...</div>}

      {singleProduct && <div className={styles.container}>
        <Image className={styles.image} src={'/food.png'} width={500} height={350}/>
        <h1 className={styles.title}>{singleProduct.title}</h1>
        <p className={styles.desc}>{singleProduct.body}</p>
        </div>}
     <div className={styles.editDiv}>   
      <input
      type="text"
      placeholder='Change title'
      style={{ height: "30px", width: "300px" }}
      onChange={(e) => setTitle(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder='Change description'
        style={{ height: "30px", width: "300px" }}
        onChange={(e) => setDesc(e.target.value)}
      />
     <div> 
      <button className={styles.button} onClick={editProduct}>edit</button>  
      <button className={styles.button} onClick={deleteProduct}>delete</button>
      
     </div>
    </div>
   </div>
  )
}

export default Menu