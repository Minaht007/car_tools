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
					<li className={styles.listItem}>
						<p className={styles.itemText}>Підбір та доставка</p>
					</li>
					<li className={styles.listItem}>
						<p className={styles.itemText}>Оптімальна вартість</p>
					</li>
					<li className={styles.listItem}>
						<p className={styles.itemText}>Замовлення в пару кліків</p>
					</li>
					<li className={styles.listItem}>
						<p className={styles.itemText}>Гарантована якість</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default ourProposition;
