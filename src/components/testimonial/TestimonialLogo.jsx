import styles from './Testimonial.module.scss';
import clsx from 'clsx';
import { QuotationMark } from './icons/index';

export const TestimonialLogo = ({ logo }) => {
	return (
		<>
			{logo ? (
				<img className={styles.logo} src={logo} alt='Logo of the company' />
			) : (
				<QuotationMark className={styles.quotation} />
			)}
		</>
	);
};
