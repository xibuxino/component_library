import styles from './Banner.module.scss';
import clsx from 'clsx';
import {
	SuccessIcon,
	WarningIcon,
	ErrorIcon,
	InfoIcon,
} from './icons/index.js';

const iconMap = {
	success: <SuccessIcon />,
	warning: <WarningIcon />,
	error: <ErrorIcon />,
	info: <InfoIcon />,
};
export const Banner = ({ children, status = 'info' }) => {
	return (
		<div className={clsx(styles.banner, styles[status])}>
			{iconMap[status]}
			{children}
		</div>
	);
};
