
import Image from 'next/image'
import React from 'react'
import heroCarImg from "../../public/img/honda_prelude.png"
import styles from "./style/styles.module.css"

const hero = () => {
  return (
    <div className="bg-mainBG">
        <div className={styles.heroTitleDiv}>
            <h1 className={styles.heroTitle}>Живи легендою...</h1>
            <h1 className={styles.heroTitle}>Ремонтуй з оригіналом</h1>
            <button className={styles.heroBtm}>Замовити деталь</button>
        </div>
        <div className={styles.heroImgDiv}>
            <Image className={styles.heroImg} src={heroCarImg} alt='honda_imge' width={1800} height={877} />
        </div>
    </div>
  )
}

export default hero

// {`${styles.heroSection} bg-mainBG`}