import React from "react";

const pTitleStyle = "lg:text-mediumDesk";
const pTextStyle = "lg:text-lgBtm ";

const Delivery = () => {
  return (
    <article className="bg-mainBG px-10">
      <h1 className="text-titleXl ml-12 pt-20 pb-10">Умови для замовлення</h1>
      <p className={pTitleStyle}>1. Повна інформація про автомобіль</p>
      <p className={`${pTextStyle} mb-10`}>
        - Під час оформлення замовлення необхідно надати повну інформацію про
        транспортний засіб, а саме: об’єм двигуна, рік випуску, номер кузова
        (VIN-код), а також фото або відео необхідної запчастини й номер
        запчастини.
      </p>
      <p className={pTitleStyle}>2. Умови обміну та повернення</p>
      <p className={`${pTextStyle} mb-10`}>
        - Товар підлягає обміну або поверненню протягом 10 календарних днів з
        моменту його отримання. У разі, якщо товар виявився несправним або не
        підходить, необхідно надати відеопідтвердження, що засвідчує проблему.
      </p>
      <p className={pTitleStyle}>        
        3. Умови оплати        
      </p>
      <p className={`${pTextStyle} mb-10`}>
          - Для підтвердження замовлення необхідне внесення завдатку (попередньої
          оплати) від загальної вартості товару. Оплата здійснюється виключно на
          офіційний рахунок фізичної особи-підприємця (ФОП).
        </p>
      
      <p className={pTitleStyle}>
        4. Відмова від замовлення        
      </p>
      <p className={pTextStyle}>
          - У разі відмови від замовлення або його неотримання покупцем — внесена
          передоплата не підлягає поверненню.
        </p>
      <div className="flex flex-row justify-center items-center mt-10 pb-20">
        <input type="checkbox" className="mx-4 " style={{width: "30px", height: "30px"}} />
        <p className={pTextStyle}>
          Залишаючи заявку, ви підтверджуєте свою згоду на умови співпраці та
          відсутність претензій щодо зазначених умов.
        </p>
      </div>
    </article>
  );
};

export default Delivery;
