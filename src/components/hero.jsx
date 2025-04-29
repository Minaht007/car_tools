
import Image from 'next/image'
import React from 'react'
import heroCarImg from "../../public/img/honda_prelude.png"
import styles from "./style/styles.module.css"

const hero = () => {
  return (
    <div className=" flex bg-mainBG overflow-hidden relative">
        <div className="ml-[170px] pt-[130px] ">
            <h1 className="text-xl">Живи легендою...</h1>
            <h1 className="text-xl ">Ремонтуй з оригіналом</h1>
            <button className='bg-bgBtm lg:px-[14px] lg:py-4 rounded-Btm lg:text-lgBtm text-whiteText mt-16 my-80'>Замовити деталь</button>
            <Image className='absolute top-10 right-[-400px]' src={heroCarImg} alt='honda_imge' width={1800} height={877} />
        </div>
        
            
        
    </div>
  )
}

export default hero

// {`${styles.heroSection} bg-mainBG`}
// {styles.heroTitle}