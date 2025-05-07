"use client";

import { useState } from "react";
import Modal from "../modal/modal";
import styles from "./styles.module.css";

const initialData = {
	name: "",
	phone: "",
	carName: "",
	carModel: "",
	year: "",
	engine: "",
	vin: "",
	carParts: "",
	description: "",
	privacy: false,
};

const FormComponent = ({ stl, text }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState(initialData);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("/api/sendToTelegram", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});
		setFormData(initialData);
		setIsOpen(false);
	};

	return (
		<div>
			<button type="button" className={stl} onClick={() => setIsOpen(!isOpen)}>
				{text}
			</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<h2 className={styles.title}>Форма для замовленя</h2>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.grid}>
						<input
							type="text"
							placeholder="Ваше ім'я"
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							className={styles.input}
							required
						/>
						<input
							type="text"
							placeholder="Ваш телефон"
							value={formData.phone}
							onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
							className={styles.input}
							required
						/>
						<input
							type="text"
							placeholder="Марка авто"
							value={formData.carName}
							onChange={(e) => setFormData({ ...formData, carName: e.target.value })}
							className={styles.input}
							required
						/>
						<input
							type="text"
							placeholder="Модель авто"
							value={formData.carModel}
							onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Об'єм Двигуна"
							value={formData.engine}
							onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
							className={styles.input}
							required
						/>
						<input
							type="text"
							placeholder="Рік випуску"
							value={formData.year}
							onChange={(e) => setFormData({ ...formData, year: e.target.value })}
							className={styles.input}
						/>
					</div>

					<input
						type="text"
						placeholder="VIN-номер"
						value={formData.vin}
						onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
						className={styles.input}
					/>
					<textarea
						placeholder="Яка запчастина вам потрібна"
						value={formData.carParts}
						onChange={(e) => setFormData({ ...formData, carParts: e.target.value })}
						className={styles.textarea}
						required
					/>
					<textarea
						placeholder="Коментар"
						value={formData.description}
						onChange={(e) => setFormData({ ...formData, description: e.target.value })}
						className={styles.textarea}
					/>
					<div className="flex ">
						<input
							type="checkbox"
							value={formData.privacy}
							onChange={() => setFormData({ ...formData, privacy: !formData.privacy })}
							className={styles.checkbox}
							required
						/>
						<p>Я підтверджую, що прочитав і згоден з правилами сайту.</p>
					</div>

					<div className={styles.buttons}>
						<button type="button" onClick={() => setIsOpen(false)} className={styles.cancelBtn}>
							Скасувати
						</button>
						<button type="submit" className={styles.submitBtn}>
							Надіслати
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default FormComponent;