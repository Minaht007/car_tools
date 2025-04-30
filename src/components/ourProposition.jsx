import Image from "next/image";
import React from "react";
import advImg from "../../public/img/advImg.png";

const ourProposition = () => {
  return (
    <section className="relative overflow-hidden bg-mainBG">
      <h1 className="text-titleXl pt-10 ml-20 italic font-[100]">
        Що ми пропонуємо
      </h1>
      <div className="flex flex-row">
        <Image
          className=" ml-[-200px] pt-40 min:w-[787px] min:h-[265px] "
          src={advImg}
          alt="honda adv"
          width={987}
          height={465}
        />
        <ul className="flex flex-wrap  gap-4 h-[300px] ">
          <li className="px-[26px] py-[26px] w-[300px] h-[140px] bg-bgBtm text-center text-mediumUnderTitleDesk text-whiteText my-auto">
            Підбір та доставка
          </li>
          <li className="px-[26px] py-[26px] w-[300px] h-[140px] bg-bgBtm text-center text-mediumUnderTitleDesk text-whiteText my-auto">
            Оптімальна вартість
          </li>
          <li className="px-[26px] py-[26px] w-[300px] h-[140px] bg-bgBtm text-center text-mediumUnderTitleDesk text-whiteText my-auto">
            Замовлення в пару кліків
          </li>
          <li className="px-[26px] py-[26px] w-[300px] h-[140px] bg-bgBtm text-center text-mediumUnderTitleDesk text-whiteText my-auto">
            Гарантована якість
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ourProposition;
