"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroCarImg from "../../../public/img/honda_prelude.png";
import heroCarImg2 from "../../../public/img/honda_prelude_2.png";
import FormComponent from "../modalForm/modalForm";
import styles from "./styles.module.css";

const hero = () => {
	const [carImg, setCarImg] = useState(false);
	return (
		<div className={styles.heroSection}>
			<div className={styles.textBlock}>
				<h1 className={styles.title}>Живи легендою...</h1>
				<h1 className={styles.title}>Ремонтуй з оригіналом</h1>
				<FormComponent stl={styles.orderButton} text={"Замовити деталь"} />

				<Image
					className={styles.carImage}
					onClick={() => setCarImg(!carImg)}
					src={carImg ? heroCarImg2 : heroCarImg}
					alt="honda_imge"
					width={1800}
					height={877}
				/>
			</div>
		</div>
	);
};

export default hero;
