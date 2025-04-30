import React from 'react'
import autoLogoImg from "../../public/json/autoLogo.json"
import Image from 'next/image'
import toolsImg from "../../public/img/autoTools.webp"

const autoLogo = () => {
    return (
      <div className='bg-mainBG pb-22 relative'>
        <h1 className='text-titleXl pt-5 pl-20 font-light'>Марки автомобілів</h1>
  
        <div className='flex flex-row flex-wrap justify-around gap-20 px-18'>
          {
            autoLogoImg.map((item) => (
              <Image 
                key={item.title}
                src={item.img} 
                alt={item.alt} 
                width={100} 
                height={100} 
                
              />
            ))
          }
        </div>
        <div className='absolute right-0 top-70'>
            <Image src={toolsImg} alt='auto tools' width={1040} height={670} />
        </div>
      </div>
      
    );
  };

export default autoLogo
