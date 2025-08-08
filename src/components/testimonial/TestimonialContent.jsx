import styles from './Testimonial.module.scss';
import clsx from 'clsx';

export const TestimonialContent = ({ children, className }) => {
	return <div className={clsx(className, styles.content)}>{children}</div>;
};
