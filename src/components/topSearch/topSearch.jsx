"use client";
import React, { useState, useEffect } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import topSearch from "../../../public/json/slider.json";
import styles from "./styles.module.css";

import { useSwipeable } from "react-swipeable";
import ButtonComponent from "../modalForm/modalForm";

const SlideShow = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [slidesPerPage, setSlidesPerPage] = useState(1);
	const totalSlides = topSearch.length;

	useEffect(() => {
		const changeSlide = () => {
			const width = window.innerWidth;

			if (width < 870) {
				setSlidesPerPage(1);
			} else if (width >= 871 && width <= 1270) {
				setSlidesPerPage(2);
			} else if (width >= 1271) {
				setSlidesPerPage(3);
			}
		};

		changeSlide();
		window.addEventListener("resize", changeSlide);

		return () => window.removeEventListener("resize", changeSlide);
	}, []);

	const nextSlide = () => {
		if (currentIndex === totalSlides - slidesPerPage) {
			return setCurrentIndex(0);
		}
		const nextIndex = (currentIndex + 1) % totalSlides;
		setCurrentIndex(nextIndex);
	};

	const prevSlide = () => {
		if (currentIndex === 0) {
			return setCurrentIndex(totalSlides - slidesPerPage);
		}
		const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		setCurrentIndex(prevIndex);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<>
			<div {...handlers} className={styles.sliderContainer}>
				<button onClick={prevSlide} className={styles.arrowButton}>
					<FcPrevious size={40} />
				</button>
				{topSearch.slice(currentIndex, currentIndex + slidesPerPage).map((slide) => (
					<div key={slide.title} className={styles.slideCard}>
						<img src={slide.img} alt={slide.alt} className={styles.slideImage} />
						<p className={styles.slideText}>{slide.text}</p>
						<ButtonComponent stl={styles.orderButton} text={"Замовити"} />
					</div>
				))}

				<button onClick={nextSlide} className={styles.arrowButton}>
					<FcNext size={40} />
				</button>
			</div>

			<div className={styles.dotsContainer}>
				{[...Array(Math.ceil(totalSlides / slidesPerPage)).keys()].map((index) => (
					<div
						key={index}
						className={`${styles.dot} ${
							currentIndex / slidesPerPage === index ? styles.activeDot : ""
						}`}
						onClick={() => setCurrentIndex(index * slidesPerPage)}
					/>
				))}
			</div>
		</>
	);
};

export default SlideShow;
