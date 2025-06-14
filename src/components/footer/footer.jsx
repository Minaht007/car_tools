import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import logo from "../../../public/img/Logo.png";
import phone from "../../../public/icons/phone.png";
import mail from "../../../public/icons/mail.png";
import tg from "../../../public/icons/tg.png";

const footer = () => {
	return (
		<div className={styles.container} id="contacts">
			<div className={styles.logoWrapper}>
				<Image src={logo} alt="logo" width={220} height={220} className={styles.logo} />
			</div>
			{/* CONTACTS */}
			<div className={styles.contacts}>
				<p className={styles.contactItem}>
					<Image src={phone} alt="phone" width={24} height={24} className={styles.icon} />{" "}
					+38-093-478-14-77
				</p>
				<p className={styles.contactItem}>
					<Image src={mail} alt="mail" width={24} height={24} className={styles.icon} />{" "}
					@cardeteils.com
				</p>
				<p className={styles.contactItem}>
					<Image src={tg} alt="telegram" width={24} height={24} className={styles.icon} /> @car_IU
				</p>
			</div>
			{/* WORK HOUR */}
			<div className={styles.hours}>
				<p className={styles.time}>Пн-Пт: 09.00-18.00</p>
				<p className={styles.time}>Сб: 10.00-16.00</p>
				<p className={styles.time}>Нд: вихідний</p>
			</div>
		</div>
	);
};

export default footer;
