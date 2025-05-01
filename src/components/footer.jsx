import Image from 'next/image'
import React from 'react'
import logo from "../../public/img/Logo.png"
import phone from "../../public/icons/phone.png"
import mail from "../../public/icons/mail.png"
import tg from "../../public/icons/tg.png"
import point from "../../public/icons/point.png"

const footer = () => {
  return (
    <div className='flex flex-row items-center bg-bgBtm py-2 justify-around ' id='contacts' >
        <div className=''>
            <Image src={logo} alt='logo' width={220} height={220} className='rounded-Btm'/>
        </div>
        {/* CONTACTS */}
        <div className='flex flex-col w-[250] ml-10'>
        <p className='flex flex-row justify-start items-center text-whiteText'>
                <Image src={phone} alt='phone' width={24} height={24} className='mr-5' /> +38-093-478-14-77 
            </p>
            <p className='flex flex-row justify-start items-center text-whiteText py-6'>
                <Image src={mail} alt='phone' width={24} height={24} className='mr-5' /> @cardeteils.com 
            </p>
            <p className='flex flex-row justify-start items-center text-whiteText'>
                <Image src={tg} alt='phone' width={24} height={24} className='mr-5' /> @car_IU
            </p>
        </div>
        {/* WORK HOUR */}
        <div className='flex flex-col text-whiteText'>
            <p className='pb-6'>Часи роботи:</p>
            <p>Пн-Пт: 09.00-18.00</p>
            <p>Сб: 10.00-16.00</p>
            <p>Нд: вихідний</p>
        </div>
        {/* Map */}
        <div>
        <p className='flex flex-row justify-start items-center text-whiteText'>
                <Image src={point} alt='phone' width={24} height={34} className='mr-5' />Україна
            </p>
        </div>
    </div>
  )
}

export default footer