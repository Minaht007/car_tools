import React from "react";
import autoLogoImg from "../../../public/json/autoLogo.json";
import Image from "next/image";
import toolsImg from "../../../public/img/autoTools.webp";
import styles from "./styles.module.css";

const autoLogo = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Марки автомобілів</h1>

			<div className={styles.logosGrid}>
				{autoLogoImg.map((item) => (
					<Image key={item.title} src={item.img} alt={item.alt} width={100} height={100} />
				))}
			</div>
			<div className={styles.toolsImg}>
				<Image src={toolsImg} alt="auto tools" width={1040} height={670} />
			</div>
		</div>
	);
};

export default autoLogo;
