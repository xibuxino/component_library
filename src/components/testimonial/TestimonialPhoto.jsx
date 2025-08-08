import styles from './Testimonial.module.scss';
import clsx from 'clsx';

export const TestimonialPhoto = ({ photo, name }) => {
	return (
		photo && (
			<img className={styles.photo} src={photo} alt={`Photo of ${name}`} />
		)
	);
};
