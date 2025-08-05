import styles from './Banner.module.scss';
import clsx from 'clsx';
import {
	successIcon,
	warningIcon,
	errorIcon,
	neutralIcon,
} from '/src/assets/icons/index.js';

const iconMap = {
	success: successIcon,
	warning: warningIcon,
	error: errorIcon,
	neutral: neutralIcon,
};
export const Banner = ({ children, status = 'neutral' }) => {
	return (
		<div className={clsx(styles.banner, styles[status])}>
			<img className='banner-icon' src={iconMap[status]} aria-hidden='true' />
			{children}
		</div>
	);
};
