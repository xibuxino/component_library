import styles from './Badge.module.scss';
import clsx from 'clsx';

export const Badge = ({ children, variant = 'square', color = 'gray' }) => {
	return (
		<span className={clsx(styles.badge, styles[color], styles[variant])}>
			{children}
		</span>
	);
};
