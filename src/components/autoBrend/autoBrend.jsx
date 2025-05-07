import React from "react";
import styles from "./styles.module.css";

const cars = [
	"Honda Prelude 3gen",
	"Nissan 180SX",
	"Nissan Fairlady",
	"Mazda Miata",
	"Datsun",
	"Mitsubishi",
];

const autoMark = () => {
	return (
		<div className={styles.marqueeSection}>
			<div className={styles.marquee}>
				<div className={styles.marqueeContent}>
					{[...cars, ...cars, ...cars].map((car, index) => (
						<span key={index} className={styles.listItem}>
							{car}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default autoMark;
