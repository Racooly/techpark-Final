import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';


const getData = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
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
   <>
    <button>foods</button>
    <button>drinks</button>
    <div className={styles.foodMain}>
     {data.map((foodLists) => (
        <Link href={`/menu/${foodLists.id}`} key={foodLists.id}>
            <div className={styles.foodContainer}>
            <Image
            src={'/food.png'}
            width={270}
            height={200}
            />
            <div className={styles.foodTexts}>
                <h1 className={styles.foodName}>{foodLists.title}</h1>
                <p className={styles.foodDesc}>{foodLists.description} </p>
            </div>
        </div>
        </Link>
     ))}
    </div>
  </> 
  )
}

export default page