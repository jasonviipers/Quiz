import Image from 'next/image';
import React from 'react';
import { withTranslation } from 'react-i18next';
import styles from './Slider.module.scss';

const Slider = () => {
	return (
		<div className="mx-auto max-w-7xl h-48 sm:h-96 sm:px-6 lg:px-8">
			<section
				className={`${styles.carousel}`}
				aria-label="Gallery"
				dir="ltr"
			>
				<div className={`${styles.carousel_viewport}`}>
					<ol className={`${styles.carousel_track}`}>
						<li
							className={`${styles.carousel_slide} relative w-full shadow-xl sm:overflow-hidden`}
						>
							<div className="absolute inset-0">
								<Image
									src="/assets/img/loading.gif"
									alt="slider-1"
									width="100%"
									height="100%"
									layout="fill"
									className={`${styles.carousel_image} object-cover w-full h-full`}
								/>
								<div className="absolute inset-0"></div>
							</div>
							<div className="flex relative items-center px-6 w-full h-48 sm:px-10 sm:h-96">
								<div className="w-1/3">
									<p className="text-sm font-bold sm:text-xl lg:text-3xl text-gray-300 ">
										{
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
										}
									</p>
									<a className="block px-3 py-3 w-32 rounded-full text-sm text-white text-center my-1 mx-auto bg-red-400">
										{'Lets Play'}
									</a>
									
								</div>
							</div>
						</li>
					</ol>
				</div>
				<button
					className={`${styles.carousel__prev}  hidden sm:flex`}
					type="button"
					aria-label="Navigate to previous slide"
				>
					<svg
						className={`${styles.carousel__icon}`}
						viewBox="0 0 24 24"
						role="img"
					>
						<title>arrowLeft</title>
						<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
					</svg>
				</button>
				<button
					className={`${styles.carousel__next}  hidden sm:flex`}
					type="button"
					aria-label="Navigate to next slide"
				>
					<svg
						className={`${styles.carousel__icon}`}
						viewBox="0 0 24 24"
						role="img"
					>
						<title>arrowRight</title>
						<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
					</svg>
				</button>
			</section>
		</div>
	);
};

export default withTranslation()(Slider);
