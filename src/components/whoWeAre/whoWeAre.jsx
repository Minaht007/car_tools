import React from "react";
import Img from "../../../public/img/whoWeAreImg.png";
import Image from "next/image";
import styles from "./styles.module.css";


const whoWeAre = () => {
  return (
		<section className={styles.whoWeAreSection} id="whoWeAre">
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Хто ми</h1>
			</div>

			<h2 className={styles.subtitle}>Надійний постачальник автозапчастин будь-якої складності</h2>
			<p className={styles.text} style={{ textAlign: "justify" }}>
				Наша компанія професійно займається підбором та постачанням автозапчастин, зокрема рідкісних
				і важкодоступних деталей. Ми оперативно опрацьовуємо запити, ефективно орієнтуємося в
				асортименті та забезпечуємо високий рівень обслуговування.
			</p>
			<p className={styles.text} style={{ textAlign: "justify" }}>
				Гарантуємо надійність, безпечні умови співпраці та індивідуальний підхід до кожного клієнта.
				Ми цінуємо ваш час — працюємо згідно з графіком та виконуємо зобов’язання без затримок.
			</p>

			<Image src={Img} alt="car" width={368} height={414} className={styles.carImage} />
		</section>
	);
};

export default whoWeAre;
