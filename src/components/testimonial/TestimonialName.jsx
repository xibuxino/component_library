import styles from './Testimonial.module.scss';
import clsx from 'clsx';

export const TestimonialName = ({ children }) => {
	return <p className={styles.name}>{children}</p>;
};
