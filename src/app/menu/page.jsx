import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';


const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
    });
  
    if (!res.ok) {
      throw new Error("There is no data");
    }
  
    return res.json();
  };

async function page() {
    const data = await getData();

  return (
    <div className={styles.foodMain}>
     {data.map((foodLists) => {
        <Link href={`/menu/${foodLists.id}`}>
            <div className={styles.foodContainer}>
            <Image
            src={'/food.png'}
            width={270}
            height={200}
            />
            <div>
                <h1 className={styles.foodName}>{foodLists.title}</h1>
                <p className={styles.foodDesc}>{foodLists.body} </p>
            </div>
        </div>
        </Link>
     })}
     
    </div>
  )
}

export default page