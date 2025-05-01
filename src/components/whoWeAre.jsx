import React from "react";
import Img from "../../public/img/whoWeAreImg.png"
import Image from "next/image";

const whoWeAre = () => {
  return (
    <section className="bg-mainBG py-10 relative" id="whoWeAre">
        <div className="lg:w-[270px] ml-16 pt-[72px] mb-[30px]">
        <h1 className="flex flex-row justify-center items-center text-titleXl text-whiteText bg-bgBtm py-2 px-4 rounded-Btm ">Хто ми</h1>
        </div>
      
      <h2 className="text-mediumDesk ml-[54px] ">Надійний постачальник автозапчастин будь-якої складності</h2>
      <p className="text-mediumUnderTitleDesk py-4 px-[54px]" style={{ textAlign: 'justify' }}>
        Наша компанія професійно займається підбором та постачанням
        автозапчастин, зокрема рідкісних і важкодоступних деталей. Ми оперативно
        опрацьовуємо запити, ефективно орієнтуємося в асортименті та
        забезпечуємо високий рівень обслуговування.
      </p>
      <p className="text-mediumUnderTitleDesk px-[54px]" style={{ textAlign: 'justify' }}>
        Гарантуємо надійність, безпечні умови співпраці та індивідуальний підхід
        до кожного клієнта. Ми цінуємо ваш час — працюємо згідно з графіком та
        виконуємо зобов’язання без затримок.
      </p>

      <Image src={Img} alt="car" width={368} height={414} className="absolute top-0 right-0" />
    </section>
  );
};

export default whoWeAre;
