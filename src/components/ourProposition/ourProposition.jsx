import Image from "next/image";
import React from "react";
import advImg from "../../../public/img/advImg.png";
import styles from "./styles.module.css";

const ourProposition = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Що ми пропонуємо</h1>
			<div className={styles.content}>
				<Image className={styles.image} src={advImg} alt="honda adv" width={987} height={465} />
				<ul className={styles.list}>
					<li className={styles.listItem}>Підбір та доставка</li>
					<li className={styles.listItem}>Оптімальна вартість</li>
					<li className={styles.listItem}>Замовлення в пару кліків</li>
					<li className={styles.listItem}>Гарантована якість</li>
				</ul>
			</div>
		</section>
	);
};

export default ourProposition;
