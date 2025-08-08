import styles from './Testimonial.module.scss';
import clsx from 'clsx';

export const TestimonialCompany = ({ company, role }) => {
	return (
		<p>
			<span className={styles.company}>{company}</span>
			<span className={styles.role}>{role}</span>
		</p>
	);
};
