import styles from './Testimonial.module.scss';
import clsx from 'clsx';

export const TestimonialText = ({ children, className }) => {
	return <p className={clsx(className, styles.text)}>{children}</p>;
};
